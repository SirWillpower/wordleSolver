# Imports the words and runs the server of Wordle Solver

import json
import sys

from flask import Flask, render_template, jsonify


# Configure application
app = Flask(__name__, template_folder=".")

# Link list of possible answers
WORD_LIST = "words_list.txt"


def import_words(text_f):
    # Read the word list from the text file
    with open(text_f, "r") as file:
        content = file.read()
    # Use eval() to convert to the content to a Python list
    try:
        words = eval(content)
        return words
    except SyntaxError:
        sys.exit("Invalid word list")


@app.route("/")
def index():
    return render_template("index.html")


# Load the word list onto the front-end
@app.route("/get_words", methods=["GET"])
def get_words():
    return jsonify(data=import_words(WORD_LIST))


if __name__ == "__main__":
    app.run(debug=True)
