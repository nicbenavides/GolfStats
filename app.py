from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    data = {"message": "Hello from Nic!"}
    return jsonify(data)

@app.route('/')
def serve_react_app():
    return send_from_directory('frontend/build', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('frontend/build', path)


if __name__ == '__main__':
    app.run(debug=True)
