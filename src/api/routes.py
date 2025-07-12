from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Subscriber
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)
CORS(api)


######Adimin Routes######

@api.route("/admin/users", methods=["GET"])
def get_admin_users():
    users = User.query.filter_by(is_admin=True).all()
    return jsonify([u.serialize() for u in users]), 200

@api.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"msg": "Bad credentials"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user": user.serialize()}), 200


##### Subscriber Routes #####

@api.route("/subscribers", methods=["GET"])
def get_subscribers():
    subscribers = Subscriber.query.all()
    return jsonify([s.serialize() for s in subscribers]), 200

@api.route("/subscribe", methods=["POST"])
def subscribe():
    data = request.get_json()
    email = data.get("email")
    name = data.get("name")

    if not email:
        return jsonify({"msg": "Email is required"}), 400

    if Subscriber.query.filter_by(email=email).first():
        return jsonify({"msg": "You are already subscribed"}), 409

    subscriber = Subscriber(email=email, name=name)
    db.session.add(subscriber)
    db.session.commit()

    return jsonify({"msg": "Subscription successful"}), 201
