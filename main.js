var dogContainer = document.getElementById("dog");
var button = document.getElementById("generate");

button.addEventListener("click", generateDog());

function generateDog() {
    button.innerHTML = "Generating Pup...";
    axios.get('https://dog.ceo/api/breeds/image/random');
}

