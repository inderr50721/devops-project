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

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)