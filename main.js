var dogContainer = document.getElementById("dog");
var button = document.getElementById("generate");

button.addEventListener("click", generateDog);

function generateDog() {
    button.innerHTML = "Generating Pup...";
    axios.get("https://dog.ceo/api/breeds/image/random").then(function(data) {
        dogContainer.innerHTML = `<img src="${data.data.message}" style="height: 300px; width: auto">`
        button.innerHTML = "Generate Pup";    
    });
}

