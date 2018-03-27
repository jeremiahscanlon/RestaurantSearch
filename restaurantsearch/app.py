from flask import Flask, render_template, jsonify, redirect

app = Flask(__name__)

@app.route("/")
def index():
    #listings = mongo.db.listings.find_one()
    return render_template("index.html")

@app.route("/map")
def map():
    #listings = mongo.db.listings.find_one()
    return render_template("geomap.html")

@app.route("/burst")
def burst():
    #listings = mongo.db.listings.find_one()
    return render_template("fireburst2.html")

@app.route("/flare")
def flare():
    #listings = mongo.db.listings.find_one()
    return render_template("flare.html")


if __name__ == "__main__":
    app.run(debug=True)