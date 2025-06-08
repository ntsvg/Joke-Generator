const joke=document.getElementById("joke");
const jokeBtn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,explicit&type=single";

function generateJoke() {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            joke.textContent = `${item.joke}`;
        });
}
generateJoke();