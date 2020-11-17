from flask import Flask

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    print(data)
    return 'Results'