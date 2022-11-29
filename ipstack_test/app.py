from flask import Flask, render_template
import urllib.request, json

app = Flask(__name__)

@app.route("/")
def load_main():
    key = open("key_ipstack.txt", "r").read()
    url = "http://api.ipstack.com/50.75.209.82?access_key=" + key

    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)
    data1 = response.read()
    dict1 = json.loads(data)
    return render_template("main.html", show=dict, show1=dict1)


if __name__ == "__main__":
    app.debug = True
    app.run()