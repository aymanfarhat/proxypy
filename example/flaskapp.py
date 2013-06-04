from flask import Flask, request, Response, render_template
import json
import proxypy

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/crossdomain")
def crossdom():
    reply = proxypy.get(request.query_string)
    return Response(reply,status=200,mimetype='application/json') 

if __name__ == "__main__":
    app.run(debug=True)
