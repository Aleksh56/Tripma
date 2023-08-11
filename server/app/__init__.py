from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from .routes.tickets import bp as tickets_bp
    
    app.register_blueprint(tickets_bp)

    return app
