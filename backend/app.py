from flask import Flask, request
from flask import jsonify, make_response
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    # TODO: Process data

    resp_data = {'message': "Test Response"}
    resp = make_response(jsonify(resp_data), 201)
    return resp