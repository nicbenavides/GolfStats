# backend/app/routes.py
from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return {"message": "Welcome to Golf Stats!"}
