/*
Here below the code for the cart page 
user can  add the cart 
*/
let user_cart = JSON.parse(localStorage.getItem("user_cart"));
let Book_details = JSON.parse(localStorage.getItem("Book_details"));
let active_user = localStorage.getItem("activeUser");
let output = "";
let increment = 1;
let addition = 0;
let quantity_increase = 1;
user_cart.forEach((item, index) => {
    if (active_user == item.user_email) {
        // console.log(item);
        output += `<tr>
        <td>${index + 1}</td>
        <td><img src=${item.Book_image}></td>
        <td>
            <div class="book_info">
                <div class="div">
                    <p>${item.Book_title}</p>
                    <a href="" class="remove">Remove</a>
                </div>
            </div>
        </td>
        <td>&#8377;${item.originalPrice}</td>
        <td>
        <div class="quantity"><i  class="fa-solid fa-minus"></i>
        <p id="increment_quantity">1</p>
        <i class="fa-solid fa-plus quantity_increase"></i>
        </div>
        </td>
        <td>&#8377;${item.originalPrice}</td>
    </tr>`
    };
    addition += Number(item.originalPrice);
    document.getElementById("table_body").innerHTML = output;

    console.log(item.Book_id);
    let remove = document.querySelectorAll(".remove")
    remove.forEach(e => {
        e.addEventListener("click", function () {
            confirm('Are you sure want to delete?');
            for (let i = 0; i < user_cart.length; i++) {
                if (active_user == user_cart[i]["user_email"] && user_cart[i]["Book_id"] == item.Book_id) {
                    user_cart.splice(i, 1);
                    localStorage.setItem("user_cart", JSON.stringify(user_cart));
                }
                else {
                    console.log("not");
                };
            };
        });
    });
    let quant_increase = document.querySelectorAll(".quantity_increase");
    quant_increase.forEach(e =>{
        e.addEventListener('click',function(){
            increment ++;
        });
    });

    // below the code for add the price
    // let quantity_price = document.querySelectorAll("Quantity_price");
    // quantity_price.forEach(e => {
    //     e.addEventListener("click", () => {
    //         quantity_increase++;
    //         return;
    //     });
    // });

});

// let Book_price = document.getElementById("increase_price");
// Book_price.innerHTML = quantity_increase;
// console.log(quantity_increase);

// This code for show the addition of the price 
let cost = document.getElementById("price");
cost.innerHTML = "&#8377; " + addition;
console.log(addition);

// below the code for increment the qunatity 
let increment_quantity = document.getElementById("increment_quantity");
increment_quantity.innerHTML = increment;
console.log();



/*
This another way to delete the cart but it wont work.
*/

// // This code is delete the user cart
// function userCart() {
//     confirm('Are you sure want to delete?');
//     for (let i = 0; i < user_cart.length; i++) {
//         if (active_user == user_cart[i]["user_email"] && user_cart[i]["Book_id"] == Book_details[i]["bookid"]) {
//             user_cart.splice(i, 1);
//         };
//         localStorage.setItem("user_cart", JSON.stringify(user_cart));
//     };
// };
