from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


class account:
    def __init__(self):
        print("initalized")
        self.value = 0
    #you return a dictionary of all the actions that the user can take
    def getActions(self):
        #{functionName,actualFunction}
        return {"addOne":self.addOne,"getVal":self.getVal}
    def addOne(self):
        self.value+=1
    def getVal(self):
        return self.value
accounts = {"omkar":["page",account()],"tejas":["panja",account()]}

@app.route('/get', methods=['GET'])
def testget():
    return jsonify(message='get request received')
#attemps log in username and password
def login(content):
    if(content['username'] not in accounts.keys()):
        return jsonify(status = False,content="Invalid username. ")
    if(accounts[content["username"]][0] != content["password"]):
        return jsonify(status= False, content = "Invalid Password.")
    return jsonify(status=True)
#is called for any general action
def act(content):
    attempt = login(content)
    if("$" in content):
        return attempt
    if(attempt["status"]== False):
        return attempt
    accountObj = accounts[content["username"]][1]
    #TODO loop through content's functions, parse the input, put the result into a new dictionary. Return this dictionary

#is called when a user wants to create a new account    
def create(content):
    if(content['username'] in accounts.keys()):
        return jsonify(result=False)
    accounts[content["username"]]  = [content["password"],account()]
    return jsonify(result=True)

@app.route('/post', methods=['POST'])
def testpost():
    content = request.json
    if(content['type'] == 'action'):
        return act(content)
    elif(content['type'] == 'create'):
        return create(content)
    
ADDRESS = "127.0.0.1" #put address here
if __name__ == '__main__':
    app.run(host=ADDRESS, port=5000)