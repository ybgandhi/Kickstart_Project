# imort dependencies
from logging import debug
from flask import Flask, jsonify

#############
#Flask set up
#############

app = Flask(__name__)

#############
#Flask Routes
#############
@app.route("api route")
def dataset():
    """Return data as JSON"""

    return jsonify()

@app.route("/")
def welcome():
    return (
        f"Welcome to the NFL Dataset API<br/>"
        f"Available Routes: <br/"
        f"api route"
    )
if __name__ == "__main__":
    app.run(debug=True)
    