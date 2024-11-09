function filterPets(event) {
    event.preventDefault();

    // Get selected filter values
    const selectedAnimal = document.getElementById("animalType").value;
    const selectedLocation = document.getElementById("location").value;

    // Get all pet cards
    const petCards = document.querySelectorAll(".card");

    // Loop through each pet card and hide or show based on filters
    petCards.forEach(card => {
        const cardAnimal = card.getAttribute("data-animal");
        const cardLocation = card.getAttribute("data-location");

        // Check if card matches selected filters
        const matchesAnimal = selectedAnimal === "" || cardAnimal === selectedAnimal;
        const matchesLocation = selectedLocation === "" || cardLocation === selectedLocation;

        // Show or hide the card based on matching criteria
        if (matchesAnimal && matchesLocation) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
