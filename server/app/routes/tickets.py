from flask import Blueprint, jsonify, request
import json

bp = Blueprint('tickets', __name__)

def load_tickets():
    with open('app/data/tickets.json', 'r') as f:
        tickets = json.load(f)
    return tickets['tickets']

@bp.route('/tickets', methods=['GET'])
def get_tickets():
    print("Tickets request !")
    tickets = load_tickets()

    destination = request.args.get('destination')
    origin = request.args.get('origin')

    if destination or origin:
        filtered_tickets = []

        for ticket in tickets:
            if (not destination or ticket['from'] == destination) and \
               (not origin or ticket['to'] == origin):
                filtered_tickets.append(ticket)

        return jsonify(filtered_tickets)
    else:
        return jsonify(tickets)

