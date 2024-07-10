from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

accounts = {"sigma":"123","tejas":"panja"}

@app.route('/get', methods=['GET'])
def testget():
    return jsonify(message='get request received')

@app.route('/post', methods=['POST'])
def testpost():
    content = request.json
    if(content['username'] not in accounts.keys()):
        return jsonify(status = "Invalid username")
    if(accounts[content["username"]] != content["password"]):
        return jsonify(status="Invalid Password.")
    return jsonify(content= "logged in as " + content['username'])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)