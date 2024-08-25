# backend/app/auth.py
from flask import Blueprint, request, jsonify
from .models import User
from . import db, bcrypt
from flask_login import login_user, logout_user, current_user, login_required
from sqlalchemy.exc import IntegrityError

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Check if the email already exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'error': 'Email already registered'}), 400

    # If the email doesn't exist, proceed to create the user
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(username=username, email=email, password=hashed_password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User registered successfully'}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'Username already taken'}), 400
@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        login_user(user)
        return jsonify({"message": "Login successful", "username": user.username}), 200
    else:
        return jsonify({"message": "Incorrect username and/or password"}), 401

@auth.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logout successful"}), 200
