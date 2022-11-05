from flask import Flask, request

app = Flask(__name__)


@app.get("/")
def hello_world():
    return "<p>Hello 🙂</p>"


@app.get("/headers")
def show_headers():
    headers = request.headers.to_wsgi_list()
    response = "<ul>\n"
    for header, value in headers:
        response += f"\t<li>{header}: {value}</li>\n"
    response += "</ul>"
    return response


@app.post("/")
def get_json():
    return request.json


if __name__ == "__main__":
    app.run(host="localhost", port=5000)
