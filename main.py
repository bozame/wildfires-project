from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

df = pd.read_csv('database.csv')
df.to_csv('database.csv', index=None)

@app.route("/")
@app.route("/table")
def table():
    
    # converting csv to html
    data = pd.read_csv('database.csv')
    return render_template('index.html', tables=[data.to_html()], titles=[''])

 ##def home():
   # return render_template("index.html")
 

if __name__ == "__main__":
    app.run()