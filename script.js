// Function to define the Pet object with properties and methods
function Pet(name, type, age, happiness, hunger) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.happiness = happiness;
    this.hunger = hunger;

    // Method to dress up the pet and do a photoshoot
    this.dressUp = function() {
        this.happiness += 15; // Increase happiness
        if (this.happiness > 100) this.happiness = 100; // Cap happiness at 100
        alert(`${this.name} looks great in it's new outfit! Happiness is now: ${this.happiness}`);
    };

    // Method for Hide and Seek
    this.hideAndSeek = function() {
        this.happiness += 10; // Increase happiness
        if (this.happiness > 100) this.happiness = 100; // Cap happiness at 100
        alert(`${this.name} had fun playing Hide and Seek! Happiness is now: ${this.happiness}`);
    };

    // Method for Hygiene Test
    this.hygieneTest = function() {
        alert(`Time for a hygiene test! ${this.name} is all clean and ready!`);
    };
}

// Ask for user input to create a new pet
let petName = prompt("What's your pet name?");
let petType = prompt("What kind of pet is it (e.g., Dinosaur, Leopard, Crocodile)🙄?");
let petAge = parseInt(prompt(`How aged is ${petName}?`)) || 0; // Default to 0 if NaN
let petHappiness = parseInt(prompt(`How thrilled is ${petName} with you -really?`)) || 0; // Default to 0 if NaN
let petHunger = parseInt(prompt(`How much is ${petName} food-obsessed?`)) || 0; // Default to 0 if NaN


// Create the new pet instance
let myPet = new Pet(petName, petType, petAge, petHappiness, petHunger);

// Function to interact with the pet
function interactWithPet() {
    let action = prompt(`What would you like to do with ${myPet.name}? Choose any one:
    1) Dress-up and Photoshoot
    2) Hide and Seek
    3) Hygiene Test
    4) Not Interested (I'm lazy)`);}