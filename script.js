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
