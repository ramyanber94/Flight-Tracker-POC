from flask import Flask, request, jsonify
import requests

app = Flask(__name__)


@app.route("/api/sendData", methods=['GET'])
def sendData():
    input = request.args.get("input")
    response = requests.get(
        "http://api.aviationstack.com/v1/flights?access_key=54e7e31596afbe3d8195fc6ffb0652fc&flight_number="+input)
    dataJson = response.json()
    data = dataJson['data']
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
