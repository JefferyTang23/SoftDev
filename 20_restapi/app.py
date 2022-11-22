from flask import Flask, render_template
import urllib.request, json

app = Flask(__name__)

@app.route("/")
def load_main():
    key = open("key_nasa.txt", "r").read()
    url = "https://api.nasa.gov/planetary/apod?api_key=" + key

    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)
    return render_template("main.html", image1=dict["hdurl"], desc=dict["explanation"])


if __name__ == "__main__":
    app.debug = True
    app.run()