// Smoothie class, for making smoothie object
class Smoothie{
    constructor(name,ingredients,price,quantity){
    this.name=name;
    this.ingredients=ingredients;
    this.price=price;
    this.quantity=quantity;
    }
    
    // make a message about smoothie info
    describe(){
    const total=(this.price*this.quantity).toFixed(2);
    return `You ordered ${this.quantity}x ${this.name} on the way.<br>Total: $${total}`;
    }
    }
    
    const smoothieMenu={
    "monstrous-mint":{
    name:"Monstrous Mint",
    ingredients:["peppermint cream","dark chocolate chips","vanilla extract"],
    price:4.99
    },
    "perfect-peach-mango":{
    name:"Perfect Peach Mango",
    ingredients:["peach purée","mango chunks","clover honey"],
    price:5.49
    },
    "fruity-fantasy":{
    name:"Fruity Fantasy",
    ingredients:["kiwi","pineapple","coconut milk"],
    price:5.29
    },
    "berry-cherry-blast":{
    name:"Berry Cherry Blast",
    ingredients:["blueberry","cherry chunks","vanilla"],
    price:5.59
    },
    "strawberry-sprinkle":{
    name:"Strawberry Sprinkle",
    ingredients:["strawberry","sprinkles","whipped cream"],
    price:4.89
    }
    };
    // smoothie object selected by the current user (temporary storage)
    let currentSmoothie=null;
    

// Add a click event to each card that displays an order popup when clicked.    
document.querySelectorAll('.card').forEach(card=>{
   card.addEventListener('click',()=>{
    // Key converted to menu object based on card title
    const flavorId=card.querySelector('h2').innerText.toLowerCase().replace(/ /g,'-');
    // Get the corresponding smoothie data
    const smoothie=smoothieMenu[flavorId];
    // Display the smoothie name, ingredients, and price in the modal
    document.getElementById('modalTitle').innerText=smoothie.name;
    document.getElementById('modalIngredients').innerText='Ingredients: '+smoothie.ingredients.join(', ');
    document.getElementById('modalPrice').innerText='Price: $'+smoothie.price.toFixed(2);
    // Display the modal
    document.getElementById('orderModal').style.display='flex';
    // Set the initial quantity to 1
    document.getElementById('quantity').innerText=1;
    // Store the selected smoothie data in currentSmoothie
    currentSmoothie={...smoothie,id:flavorId};
    });
});
    
// add quantity
document.getElementById('plusBtn').addEventListener('click',()=>{
    let qty=parseInt(document.getElementById('quantity').innerText);
document.getElementById('quantity').innerText=qty+1;
    });
    
// minus quantity
document.getElementById('minusBtn').addEventListener('click',()=>{
    let qty=parseInt(document.getElementById('quantity').innerText);
    if(qty>1){
document.getElementById('quantity').innerText=qty-1;
    }
});
    
// close the first modal
document.getElementById('closeModal').addEventListener('click',()=>{
    document.getElementById('orderModal').style.display='none';
});
    
// when click Order Now button
document.getElementById('confirmOrder').addEventListener('click',()=>{
    // Get the quantity from the quantity input
    const qty=parseInt(document.getElementById('quantity').innerText);
    // Create a new Smoothie object with the selected smoothie data and quantity
    const smoothie=new Smoothie(currentSmoothie.name,currentSmoothie.ingredients,currentSmoothie.price,qty);
    // Display the order details in the output area
    const output=document.getElementById('output');
    const order=document.createElement('div');
    order.innerHTML=smoothie.describe();
    output.appendChild(order);
    // Close the first modal
document.getElementById('orderModal').style.display='none';
    
  // Set the content of the confirmation modal
const confirmText=`
    <p>Your order:</p>
    <strong>${qty} x ${smoothie.name}</strong><br>
    Ingredients: ${smoothie.ingredients.join(', ')}<br>
    Total: $${(smoothie.price*qty).toFixed(2)}<br>
    <em>On the way, thank you!</em>
    `;
    // Display the confirmation modal
document.getElementById('confirmDetails').innerHTML=confirmText;
document.getElementById('confirmModal').style.display='flex';
});
    
// close confirm modal
document.getElementById('closeConfirm').addEventListener('click',()=>{
document.getElementById('confirmModal').style.display='none';
});
    