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
    return `You ordered <strong>${this.quantity}</strong> x <strong>${this.name}</strong> on the way.<br>Total: $${total}`;
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
    
    let currentSmoothie=null;
    
// when click on card -> open the modal with smoothie info
    
document.querySelectorAll('.card').forEach(card=>{
   card.addEventListener('click',()=>{
    const flavorId=card.querySelector('h2').innerText.toLowerCase().replace(/ /g,'-');
    const smoothie=smoothieMenu[flavorId];
    document.getElementById('modalTitle').innerText=smoothie.name;
    document.getElementById('modalIngredients').innerText='Ingredients: '+smoothie.ingredients.join(', ');
    document.getElementById('modalPrice').innerText='Price: $'+smoothie.price.toFixed(2);
    document.getElementById('orderModal').style.display='flex';
    document.getElementById('quantity').innerText=1;
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
    const qty=parseInt(document.getElementById('quantity').innerText);
    const smoothie=new Smoothie(currentSmoothie.name,currentSmoothie.ingredients,currentSmoothie.price,qty);
    
    const output=document.getElementById('output');
    const order=document.createElement('div');
    order.innerHTML=smoothie.describe();
    output.appendChild(order);
    
document.getElementById('orderModal').style.display='none';
    
// show second confirm modal
const confirmText=`
    <p>Your order:</p>
    <strong>${qty} x ${smoothie.name}</strong><br>
    Ingredients: ${smoothie.ingredients.join(', ')}<br>
    Total: $${(smoothie.price*qty).toFixed(2)}<br>
    <em>On the way, thank you!</em>
    `;
    
document.getElementById('confirmDetails').innerHTML=confirmText;
document.getElementById('confirmModal').style.display='flex';
});
    
// close confirm modal
document.getElementById('closeConfirm').addEventListener('click',()=>{
document.getElementById('confirmModal').style.display='none';
});
    