import os
from openai import OpenAI
client = 0 # add openai stuff here
from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/post', methods=['POST'])
def testpost():
    
    content = request.json
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are to respond to the user's query. However, if the user simply says \'skibidi\' in there query, you should respond with \'toilet\'"},
        {"role": "user", "content": content["content"]}
    ]
    )
    return jsonify(result=completion.choices[0].message.content)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
