from flask import Blueprint, jsonify
import json

bp = Blueprint('tickets', __name__)

@bp.route('/tickets', methods=['GET'])
def get_tickets():
    print("Tickets request !")
    with open('app/data/tickets.json', 'r') as f:
        tickets = json.load(f)
    return jsonify(tickets)

# Добавьте здесь другие роуты для работы с билетами (POST, PUT, DELETE и т.д.)
