console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById("dog-image-container");
    const dogBreedsList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
  
    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        data.message.forEach((imageUrl) => {
          const img = document.createElement("img");
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      })
      .catch((error) => console.error("Error fetching images:", error));
  
    // Challenge 2: Fetch and display dog breeds
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        breeds.forEach((breed) => {
          const listItem = document.createElement("li");
          listItem.textContent = breed;
          dogBreedsList.appendChild(listItem);
        });
      })
      .catch((error) => console.error("Error fetching breeds:", error));
  
    // Challenge 3: Change font color on click
    dogBreedsList.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        event.target.style.color = "red"; // Change font color to red
      }
    });
  
    // Challenge 4: Filter breeds by starting letter
    function filterBreeds(letter) {
      const breeds = dogBreedsList.getElementsByTagName("li");
      for (let i = 0; i < breeds.length; i++) {
        const breed = breeds[i];
        if (breed.textContent.startsWith(letter)) {
          breed.style.display = "list-item";
        } else {
          breed.style.display = "none";
        }
      }
    }
  
    breedDropdown.addEventListener("change", function () {
      const selectedLetter = breedDropdown.value;
      filterBreeds(selectedLetter);
    });
  });
  