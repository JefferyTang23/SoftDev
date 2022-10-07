# Clyde 'Thluffy' Sinclair
# SoftDev
# Oct 2022

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign fxn to route
def hello_world():
    print(__name__) #prints __main__ to terminal
    return "No hablo queso!"  #displays text on website

app.run()  #activates the app
                
