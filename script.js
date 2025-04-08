// Define the Smoothie class to represent a smoothie order
class Smoothie {
    // Constructor method to initialize a new smoothie object
    constructor(name, ingredients, price) {
        this.name = name;          
        this.ingredients = ingredients; 
        this.price = price;         
    }
  
    // Method to generate a description of the smoothie
    describe() {
        return `You ordered <strong>${this.name}</strong> smoothie with: ${this.ingredients.join(', ')}.<br>Total price: $${this.price.toFixed(2)}`;
    }
}
  
// Define the menu with different smoothie options
const smoothieMenu = {
    mint: {
        name: "Monstrous Mint",
        ingredients: ["peppermint cream", "dark chocolate chips", "vanilla extract"],
        price: 4.99
    },
    "peach-mango": {
        name: "Perfect Peach Mango",
        ingredients: ["peach purée", "mango chunks", "clover honey"],
        price: 5.49
    },
    fruity: {
        name: "Fruity Fantasy",
        ingredients: ["kiwi", "pineapple", "coconut milk"],
        price: 5.29
    },
    berry: {
        name: "Berry Cherry Blast",
        ingredients: ["blueberry", "cherry chunks", "vanilla"],
        price: 5.59
    },
    strawberry: {
        name: "Strawberry Sprinkle",
        ingredients: ["strawberry", "sprinkles", "whipped cream"],
        price: 4.89
    }
};
  
// Add event listener to the form submission
document.getElementById('smoothieForm').addEventListener('submit', function(e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Get the selected smoothie flavor from the form
    const selectedValue = document.getElementById('flavor').value;
    // Get the smoothie details from the menu
    const selected = smoothieMenu[selectedValue];
  
    // Create a new Smoothie object with the selected options
    const smoothie = new Smoothie(selected.name, selected.ingredients, selected.price);
    // Display the smoothie description in the output div
    document.getElementById('output').innerHTML = smoothie.describe();
});
  