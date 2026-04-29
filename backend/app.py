from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
import random

@app.route("/stats")
def stats():
    return {
        "services": random.randint(2, 10),
        "containers": random.randint(3, 15),
        "cpu": f"{random.randint(30, 90)}%",
        "memory": f"{random.randint(40, 95)}%"
    }

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)