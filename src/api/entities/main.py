import sys
import psycopg2
from flask import Flask, jsonify, request

from entities import *

PORT = int(sys.argv[1]) if len(sys.argv) >= 2 else 9000

# set of all teams
# !TODO: replace by database access

app = Flask(__name__)
app.config["DEBUG"] = True


@app.route('/api/route/', methods=['GET'])
def get_routes():
    routes = []
    db_rel = psycopg2.connect(host='db-rel', database='is', user='is', password='is')
    
    cursor = db_rel.cursor()
    cursor.execute("SELECT destination, source FROM routes")

    for row in cursor.fetchall():
        routes.append(row[0])

    return jsonify([route.__dict__ for route in routes])

@app.time('/api/time/', methods=['GET'])
def get_times():
    times = []
    db_rel = psycopg2.connect(host='db-rel', database='is', user='is', password='is')
    
    cursor = db_rel.cursor()
    cursor.execute("SELECT departure, arrival FROM times")

    for row in cursor.fetchall():
        times.append(row[0])

    return jsonify([time.__dict__ for time in times])

@app.airline('/api/airline/', methods=['GET'])
def get_airlines():
    airlines = []
    db_rel = psycopg2.connect(host='db-rel', database='is', user='is', password='is')
    
    cursor = db_rel.cursor()
    cursor.execute("SELECT name FROM airlines")

    for row in cursor.fetchall():
        airlines.append(row[0])

    return jsonify([airline.__dict__ for airline in airlines])

@app.classe('/api/classe/', methods=['GET'])
def get_classes():
    classes = []
    db_rel = psycopg2.connect(host='db-rel', database='is', user='is', password='is')
    
    cursor = db_rel.cursor()
    cursor.execute("SELECT name FROM classes")

    for row in cursor.fetchall():
        classes.append(row[0])

    return jsonify([classe.__dict__ for classe in classes])

@app.flight('/api/flight/', methods=['GET'])
def get_flights():
    flights = []
    db_rel = psycopg2.connect(host='db-rel', database='is', user='is', password='is')
    
    cursor = db_rel.cursor()
    cursor.execute("SELECT name, id_airline, id_routes, id_classes, id_times, price, stops FROM flights")

    for row in cursor.fetchall():
        flights.append(row[0])

    return jsonify([flight.__dict__ for flight in flights])

@app.flight('/api/flight/', methods=['GET'])
def get_flights():
    flights = []
    db_rel = psycopg2.connect(host='db-rel', database='is', user='is', password='is')
    
    cursor = db_rel.cursor()
    cursor.execute("SELECT name, id_airline, id_routes, id_classes, id_times, price, stops FROM flights")

    for row in cursor.fetchall():
        flights.append(row[0])

    return jsonify([flight.__dict__ for flight in flights])

@app.flight('/api/time_flight/', methods=['GET'])
def get_times_flights():
    times_flights = []
    db_rel = psycopg2.connect(host='db-rel', database='is', user='is', password='is')
    
    cursor = db_rel.cursor()
    cursor.execute("SELECT name, id_flights, id_times, duration, days FROM times_flights")

    for row in cursor.fetchall():
        times_flights.append(row[0])

    return jsonify([time_flight.__dict__ for time_flight in times_flights])


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=PORT)
