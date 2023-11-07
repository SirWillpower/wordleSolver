// solver.js intends to provide a list of remaining possible solutions after
// a user has inputted provided hints while playing Wordle (Wordle Solver)

// Get the list of possible solutions
async function getData() {
    const response = await fetch("/get_words");
    var words = await response.json();
    words = words.data;
    // manipulate the list using user inputs
    userInputDict(function(userInputs) {
        console.log("userInputs in getData:", userInputs);
        wordsWrong = filterWrong(words, userInputs);
        console.log("wordsWrong from getData:", wordsWrong);
        wordsPlace = filterPlace(wordsWrong, userInputs);
        console.log("wordsPlace from getData:", wordsPlace);
        wordsRight = filterRight(wordsPlace, userInputs);
        console.log("wordsRight from getData:", wordsRight);
        displayWords(wordsRight);
    });
}

// Display results as a list
function displayWords(words) {
    const results = document.getElementById("result");
    // Clear the existing content
    results.innerHTML = '';

    // Iterate through the data array
    let count = 0
    for (const item of words) {

        // Limit the number of results
        if (count >= 60) {
            break;
        }

        const listItem = document.createElement("li");
        listItem.textContent = item.toUpperCase();
        results.appendChild(listItem);

        count++;
    }
}

// Clear all input fields with button
function clearInputs() {
    const inputIDs = ["l01", "l02", "l03", "l04", "l05", "l06", "l07", "l08", "l09", "l10", "wrong"];
    inputIDs.forEach(id => {
        document.getElementById(id).value = "";
    })
    document.getElementById("l01").focus();
    getData();
}

// Event Listeners
document.addEventListener("keydown", getData);
document.getElementById("clear").addEventListener("click", clearInputs);


// Send a promise to log user inputs as they are typed
function userInputDict(callback = () => {}) {
    // List of input IDs
    const inputIDs = ["l01", "l02", "l03", "l04", "l05", "l06", "l07", "l08", "l09", "l10", "wrong"];
    const userInputs = {
        l01: "",
        l02: "",
        l03: "",
        l04: "",
        l05: "",
        l06: "",
        l07: "",
        l08: "",
        l09: "",
        l10: "",
        wrong: ""
    };

    // Store inputs into a dict
    inputIDs.forEach(id => {
        const inputField = document.getElementById(id);
        if (inputField) {
            const inputValue = inputField.value;
            userInputs[id] = inputValue.toLowerCase();
        }
    });
    console.log("userInputs from userInputDict:", userInputs);
    callback(userInputs);
};


// Eliminates words with excluded letters
function filterWrong(data, inputs) {
    const userInputs = inputs;
    console.log("userInputs from filterWrong:", userInputs);
    const wrong = userInputs["wrong"];
    console.log("wrong from filterWrong:", wrong);

    if (wrong === "" || wrong == undefined) {
        return data; // No letters in the input field
    }
    for (let i = 0; i < wrong.length; i++) {
        for (let j = data.length - 1; j >= 0; j--) {
            const word = data[j];
            if (word.includes(wrong[i])) {
                data.splice(j, 1); // Removes the word from the array
            }
        }
    }
    return data
};


// Removes words that are missing the letter or have it in the wrong place
function filterPlace(data, inputs) {
    const userInputs = Object.values(inputs); // Assigns all values from the dict as an array
    console.log("userInputs from filterPlace:", userInputs);
    const place = userInputs.slice(5, 10); // Keeps only values for index 5 (inclusive) to 10 (exclusive)
    console.log("place from filterPlace:", place);

    if (place == undefined) {
        return data;
    }
    for (let i = 0; i < place.length; i++) {
        if (place[i] === "") {
            continue;
        }
        for (let j = data.length - 1; j >= 0; j--) {
            const word = data[j];
            if (!word.includes(place[i])) {
                data.splice(j, 1); // Removes the word if the known letter is absent
                continue;
            }
            if (place[i] === word[i]) {
                data.splice(j, 1); // Removes word where the letter is at the same position
                continue;
            }
        }
    }
    return data;
};


// Keeps only words that match the correct letters
function filterRight(data, inputs) {
    const userInputs = Object.values(inputs); // Assigns all values from the dict as an array
    console.log("userInputs from filterRight:", userInputs);
    const right = userInputs.slice(0, 5); // Keeps only values for index 0 (inclusive) to 5 (exclusive)
    console.log("place from filterRight:", right);

    if (right == undefined) {
        return data;
    }
    for (let i = 0; i < right.length; i++) {
        if (right[i] === "") {
            continue;
        }
        for (let j = data.length - 1; j >= 0; j--) {
            const word = data[j];
            if (right[i] !== word[i]) {
                data.splice(j, 1); // Removes word where the letter is not at the same position
                continue;
            }
        }
    }
    return data;
};