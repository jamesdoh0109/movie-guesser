const movies = [
    {title: "Harry Potter", explanation: "This movie is about a dude with a stick.", hint: "It\'s magic."},
    {title: "Just Go With It", explanation: "This movie is about people who go on holiday.", hint: "Adam, Drew, and Jennifer"},
    {title: "Never Back Down", explanation: "This movie is about two guys with daddy issues who beat each other up.", hint: "Kanye West–Stronger"},
    {title: "Spongebob Squarepants", explanation: "This movie is about a rectangle.", hint: "It\'s a cartoon."},
    {title: "50 First Dates", explanation: "This movie is about a chick; she has the worst memory.", hint: "50 times"},
    {title: "Cars", explanation: "In this movie, cars go fast.", hint: "Kachow"},
    {title: "Spiderman", explanation: "In this movie, this guy just doesn't pay his rent, no matter how many times the landlord asks.", hint: "Peta-Paka"},
    {title: "The Wolf of Wall Street", explanation: "In this movie, there\'s like illegal stuff, lots of money, and a blonde chick.", hint: "HAWOOooooooooo"},
    {title: "Inception", explanation: "In this movie, everyone is like sleeping all the time.", hint: "Dreams"},
    {title: "Peter Pan", explanation: "In this movie, some kids die, and an angel escorts them to heaven.", hint: "Always flying cuz he neverlands."},
    {title: "The Lord of the Rings", explanation: "In this movie, some small guys go for a walk.", hint: "You will not vacate past this exact position."}
];
    
var movieIndex = Math.floor(Math.random() * 10);
var description = document.getElementById("description");
description.innerHTML = movies[movieIndex].explanation;

var hint = document.getElementById("hint");
var hintText = document.getElementById("hint-text");
hint.addEventListener("click", () => {
    hintText.innerHTML = "Hint: " + movies[movieIndex].hint; 
});

const submit = document.getElementById("submit");
const output = document.getElementById("output");
submit.addEventListener("click", () => {
    let ans = document.getElementById("guess-input").value;
    if (ans) {
        if (ans == movies[movieIndex].title) {
            output.innerHTML = "Correct!"
        } else {
            output.innerHTML = "Incorrect!"
        }
    } else {
        output.innerHTML = "Please enter your guess in the box."
    }
    document.getElementById("guess-input").value = "";
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    resetMovie();
    document.getElementById("guess-input").value = ""
});

function resetMovie() {
    movieIndex = Math.floor(Math.random() * 10);
    description = document.getElementById("description");   
    description.innerHTML = movies[movieIndex].explanation;
    hintText.innerHTML = "";
    output.innerHTML = "";
}
