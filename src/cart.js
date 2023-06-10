let shoppingCart = document.getElementById('shopping-cart');
let label = document.getElementById('label');


let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}

calculation();

let generateCartItem =()=>{
    if (basket.length !== 0){
        return(shoppingCart.innerHTML = basket.map(({id, item}) => {
            let search = shopItemsData.find((x) => x.id === id) || [] ;
            let {img, price, name} = search;
            return`
            <div class="cart-item">
        <img width="100" src=${img} alt="" />

        <div class="details">
        
          <div class="title-price-x">
            <h4 class="title-price">
              <p>${name}</p>
              <p class="cart-item-price">$ ${price}</p>
            </h4>
            <i onclick="removeItem(${id})" class="bi bi-x"></i>
          </div>

          <div class="cart-buttons">
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus"></i>
            </div>
          </div>

          <h3>$ ${item * price}</h3>
        
        </div>
      </div>
        `
        }).join(""));
    }
        else {
            shoppingCart.innerHTML= "";
            label.innerHTML=`
            <h2>Cart is empty</h2>
            <a href='index.html'>
                <button class="homebtn">Back to Home</button>
                </a>
                `
    }
}

generateCartItem();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
if (search === undefined) {
    basket.push({
        id:selectedItem.id,
        item: 1
    });
}else {
    search.item += 1;
}
//  console.log(basket); 
 generateCartItem();
 update(selectedItem.id);
 localStorage.setItem("data", JSON.stringify(basket));  
}


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0)return;
    else {
        search.item -= 1;
    }
    
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItem();
    localStorage.setItem("data", JSON.stringify(basket));
}

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    totalAmount();
}

// let calculation = () => {
//     let cartIcon = document.getElementById("cartAmount");
//     cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
// }

// // let mySavedData = (key) => {
// //     return localStorage.setItem(key, JSON.stringify(basket));
// // }
// calculation();
// generateCartItem();
// localStorage.setItem("data", JSON.stringify(basket)); 
// update(selectedItem.id);

let removeItem = (id) => {
    let selectedItem = id;
    basket = basket.filter((x)=> x.id !== selectedItem.id);
    calculation();
    generateCartItem();
    totalAmount();
    localStorage.setItem("data", JSON.stringify(basket)); 
}


let totalAmount = (id) => {
    if (basket.length !== 0) {
        let amount = basket.map(({id, item}) => {
            let search = shopItemsData.find((x) => x.id === id);
        return search.price * item;
        }).reduce((x, y) => x + y, 0);
        return (label.innerHTML = ` 
        <h2>Total Bill : $ ${amount}</h2>
        <button class="checkout">Checkout</button>
        <button onclick="clearCart()" class="removeAll">Clear Cart</button>
        `);
    } else return;
};
 totalAmount();


 let clearCart = () => {
    basket = []
    generateCartItem();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket)); 
 }













