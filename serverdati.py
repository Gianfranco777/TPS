from flask import Flask, request
import csv
import json


app = Flask(__name__)

dati = []

def leggiFile():
    with open('misurazioni.csv', 'r') as file:
        reader = csv.reader(file)
    for row in csv_reader:
        m = {"id": row[0], "aula": row[1], "giorno": row[2], "ora": row[3], "valore": row[4]}
        dati.append(m)
    return dati

@app.route("/")
def index():
    response = app.response_class(
        response=dati,
        mimetype='application/json'
    )
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/add")
def add():
    #recupera i dati
    query_parameters = request.args

    aula = query_parameters.get("aula")
    valore = query_parameters.get("valore")

    #scrivi i dati su file

    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}