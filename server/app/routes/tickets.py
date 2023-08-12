from flask import Blueprint, jsonify, request
import json

bp = Blueprint('tickets', __name__)

def load_places():
    with open('app/data/places.json', 'r') as f:
        places = json.load(f)
    return places


def load_tickets():
    with open('app/data/tickets.json', 'r') as f:
        tickets = json.load(f)
    return tickets['tickets']

def get_places_to(country):
    places = load_places()
    to_places = [place for place in places if place['airport_code'] == country]
    return to_places

@bp.route('/tickets', methods=['GET'])
def get_tickets():
    print("Tickets request !")
    tickets = load_tickets()

    destination = request.args.get('destination')
    origin = request.args.get('origin')

    places_to = get_places_to(origin)
    
    if destination or origin:
        filtered_tickets = []


        for ticket in tickets:
            if (not destination or ticket['from'] == destination) and \
               (not origin or ticket['to'] == origin):
                filtered_tickets.append(ticket)

        response_data = {
            'tickets': filtered_tickets,
            'places_to': places_to
        }

        return jsonify(response_data)
    else:
        response_data = {
            'tickets': tickets,
            'places_to': places_to
        }
        return jsonify(response_data)

