// let shop = document.getElementById("shop");


// let shopItemsData = [
//     {
//         id: "Jalingo",
//         name: "Casual Shoes",
//         price: 45,
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
//         img: "https://media.istockphoto.com/id/1316320272/photo/colored-sneakers-close-up-modern-trendy-sneakers-side-view.jpg?s=612x612&w=0&k=20&c=WFJCweJcVICcsi1X01jQB6qa2mKsXOPCQ_wD7L0_AUc=",
//     },
//     {
//         id: "Taraba",
//         name: "Casual Shoes",
//         price: 100,
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
//         img: "https://media.istockphoto.com/id/1316320272/photo/colored-sneakers-close-up-modern-trendy-sneakers-side-view.jpg?s=612x612&w=0&k=20&c=WFJCweJcVICcsi1X01jQB6qa2mKsXOPCQ_wD7L0_AUc=",
//     },
//     {
//         id: "Lagos",
//         name: "Casual Shoes",
//         price: 75,
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
//         img: "https://media.istockphoto.com/id/1316320272/photo/colored-sneakers-close-up-modern-trendy-sneakers-side-view.jpg?s=612x612&w=0&k=20&c=WFJCweJcVICcsi1X01jQB6qa2mKsXOPCQ_wD7L0_AUc=",
//     },
//     {
//         id: "Kaduna",
//         name: "Casual Shoes",
//         price: 55,
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
//         img: "https://media.istockphoto.com/id/1316320272/photo/colored-sneakers-close-up-modern-trendy-sneakers-side-view.jpg?s=612x612&w=0&k=20&c=WFJCweJcVICcsi1X01jQB6qa2mKsXOPCQ_wD7L0_AUc=",
//     },
//     {
//         id: "Kano",
//         name: "Casual Shoes",
//         price: 200,
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
//         img: "https://media.istockphoto.com/id/1316320272/photo/colored-sneakers-close-up-modern-trendy-sneakers-side-view.jpg?s=612x612&w=0&k=20&c=WFJCweJcVICcsi1X01jQB6qa2mKsXOPCQ_wD7L0_AUc=",
//     },
//     {
//         id: "Ibadan",
//         name: "Casual Shoes",
//         price: 90,
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
//         img: "https://media.istockphoto.com/id/1316320272/photo/colored-sneakers-close-up-modern-trendy-sneakers-side-view.jpg?s=612x612&w=0&k=20&c=WFJCweJcVICcsi1X01jQB6qa2mKsXOPCQ_wD7L0_AUc=",
//     },
//     {
//         id: "Abeokuta",
//         name: "Casual Shoes",
//         price: 25,
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
//         img: "https://media.istockphoto.com/id/1316320272/photo/colored-sneakers-close-up-modern-trendy-sneakers-side-view.jpg?s=612x612&w=0&k=20&c=WFJCweJcVICcsi1X01jQB6qa2mKsXOPCQ_wD7L0_AUc=",
//     },
//     {
//         id: "Osogbo",
//         name: "Casual Shoes",
//         price: 35,
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
//         img: "https://media.istockphoto.com/id/1316320272/photo/colored-sneakers-close-up-modern-trendy-sneakers-side-view.jpg?s=612x612&w=0&k=20&c=WFJCweJcVICcsi1X01jQB6qa2mKsXOPCQ_wD7L0_AUc=",
//     },
// ]
// let basket = JSON.parse(localStorage.getItem("data")) || [];
// // let basket = []

// let generateShop = () => {
//     return (shop.innerHTML = shopItemsData.map((x) => {
//             let { id, name, desc, img, price } = x;
//             let search = basket.find((y) => y.id === id) || []; 
//             // let search = []
//             return `<div id=product-id-${id} class="item">
//             <img width="220" src=${img} alt="">
//             <div class="details">
//                 <h3>${name}</h3>
//                 <p>${desc}</p>
//                 <div class="price-quantity">
//                     <h2>$ ${price}</h2>
//                     <div class="buttons">
//                         <i onclick="decrement(${id})" class="bi bi-dash"></i>
//                         <div id= ${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
//                         <i onclick="increment(${id})" class="bi bi-plus"></i>
//                     </div>
//                 </div>
//             </div>
//         </div>`
//         } ).join(""))
        
// }
// generateShop();
// let increment = (id) => {
//     let selectedItem = id;
//     let search = basket.find((x)=> x.id === selectedItem.id);
// if (search === undefined) {
//     basket.push({
//         id:selectedItem.id,
//         item: 1
//     });
// }else {
//     search.item += 1;
// }
// //  console.log(basket); 
//  update(selectedItem.id);
//  localStorage.setItem("data", JSON.stringify(basket));  
// }


// let decrement = (id) => {
//     let selectedItem = id;
//     let search = basket.find((x) => x.id === selectedItem.id);

//     if (search === undefined) return;
//     else if (search.item === 0)return;
//     else {
//         search.item -= 1;
//     }
    
//     update(selectedItem.id);
//     basket = basket.filter((x) => x.item !== 0);
//     localStorage.setItem("data", JSON.stringify(basket));
// }

// let update = (id) => {
//     let search = basket.find((x) => x.id === id);
//     document.getElementById(id).innerHTML = search.item;
//     calculation();
// }

// let calculation = () => {
//     let cartIcon = document.getElementById("cartAmount");
//     cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
// }

// // let mySavedData = (key) => {
// //     return localStorage.setItem(key, JSON.stringify(basket));
// // }
// calculation();










let shop = document.getElementById("shop");


let basket = JSON.parse(localStorage.getItem("data")) || [];
// let basket = []

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
            let { id, name, desc, img, price } = x;
            let search = basket.find((y) => y.id === id) || []; 
            // let search = []
            return `<div id=product-id-${id} class="item">
            <img width="220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash"></i>
                        <div id= ${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>`
        } ).join(""))
        
}

generateShop();
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
    localStorage.setItem("data", JSON.stringify(basket));
}

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
}

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}

// let mySavedData = (key) => {
//     return localStorage.setItem(key, JSON.stringify(basket));
// }
calculation();





















