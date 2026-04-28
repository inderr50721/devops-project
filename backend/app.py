from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/stats")
def stats():
    return jsonify({
        "services": 3,
        "containers": 5,
        "cpu": "45%",
        "memory": "60%"
    })

if __name__ == "__main__":
    app.run(port=5000)