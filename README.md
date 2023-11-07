# Wordle Solver webpage

#### Author:
William Carle *(Ottawa, Canada)*
#### Video Demo: [Wordle Solver demonstration](https://youtu.be/WPdJyUX3750)

#### Description:

The Wordle Solver project is aimed at creating a user-friendly and efficient tool to assist Wordle players in solving the popular word puzzle game offered by [The New York Times](https://www.nytimes.com/games/wordle/index.html). It is designed to be user-friendly, fast, and privacy-focused, ensuring a positive and secure experience for Wordle enthusiasts.

Wordle is a game where players attempt to guess a five-letter word within six attempts, with each guess providing feedback in the form of color-coded hints to guide the player toward the correct word. The Wordle Solver will be designed to enhance the Wordle gaming experience by offering solutions and suggestions based on the hints provided within the game.

Key Features and Functionalities:

- Input Hints: Users will be able to input the corresponding hints received for each guess. The hints consist of colored tiles indicating whether a letter is in the target word and if it is in the correct position or not.

- Word Suggestions: The Wordle Solver uses the provided hints to generate a list of possible word suggestions that match the given hints. This list of words is filtered based on the constraints of the game (5-letter words) and the hints provided by the user.

- Real-time Updates: The tool offers real-time updates, allowing users to add hints and guesses, receive updated suggestions, and continue refining their guesses until they find the correct word.

- User Interface: The Wordle Solver features an intuitive and user-friendly interface. It includes a text input field for guesses, color-coded tiles to represent hints, and a list of suggested words.

- Database of Valid Words: The Wordle Solver utilizes a database of valid 5-letter words sourced directly from the game source code to provide accurate word suggestions.

- Accessibility: The tool can be accessed and operates on the most widely used web browsers, both on desktop and mobile devices.

- Privacy and Data Security: The project will prioritize user data privacy by not storing or sharing any personal information or game-related data.

Benefits:

- Enhanced Wordle Experience: The Wordle Solver will serve as a valuable companion for players, making the game more enjoyable and less frustrating by providing hints and suggestions.

- Learning Tool: Users can learn and improve their Wordle-solving skills by observing how the tool generates word suggestions based on the given hints.

- Time-Saver: The Wordle Solver can save players time and effort, especially for challenging puzzles where they might otherwise struggle.


#### Files:

The project comes with the following files:

`1. app.py`

This `Python` script imports the Wordle solutions from a text file and initializes the Flask server. The list of words is then provided as a JavaScript object.

`2. index.html`

This `HTML` file constructs a webpage featuring eleven distinct input fields, a clear button, and a results display section. The webpage is optimized for fast loading, responsiveness, and a pleasing design. Additionally, there's an integrated function that automatically shifts focus from one input field to another once it's filled.

`3. solver.js`

This `JavaScript` script leverages a set of seven functions to implement the automation and underlying logic of the webpage. In addition to filtering user inputs to generate the correct list of words, the script retrieves the word list from the server and presents it in an unordered list. These actions are accomplished through the utilization of event listeners, enabling users to obtain real-time updates without the necessity of submitting their input.

`4. styles.css`

This `CSS` file primarily defines the visual presentation of the Wordle Solver page. It's worth mentioning that the styling of list items is adapted from [Wordle Word finder](https://word.tips/wordle/), while box shadows are incorporated into each input field to align with the Wordle game's color scheme. Additionally, the font is imported from `Adobe Fonts`, and the form style is derived from `Bootstrap`.

`5. word_icon.png`

This is a simple icon created to be used a favicon.

`6. words_list.txt`

This text document serves as a straightforward compilation of possible Wordle solutions extracted directly from the game's source code.

`7. words_data.txt`

At this point in the app's development, this text file is currently inactive. It contains the roster of approved words employed by Wordle, with the potential for future utilization in enhancing the algorithm.

`8. README.md (this file)`

Provides a description of the project.

