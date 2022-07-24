from flask import Flask, render_template
import pandas as pd
import matplotlib.pyplot as plt

app = Flask(__name__)



@app.route("/")
def home():
  #data = pd.read_csv('database.csv')
 # labels = [row[0] for row in data]
  #values = [row[0] for row in data]

  return render_template("index.html")
 

if __name__ == "__main__":
    app.run()

##@app.route("/table")
#def table():
    
    # converting csv to html
 #   data = pd.read_csv('database.csv')
  #  return render_template('index.html', tables=[data.to_html()], titles=[''])
