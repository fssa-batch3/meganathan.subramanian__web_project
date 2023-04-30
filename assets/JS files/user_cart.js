/*
Here below the code for the cart page 
user can  add the cart 
*/
let user_cart = JSON.parse(localStorage.getItem("user_cart"));
let Book_details = JSON.parse(localStorage.getItem("Book_details"));
let active_user = localStorage.getItem("activeUser");
let output = "";
let addition = 0;
user_cart.forEach((item, index) => {
    if (active_user == item.user_email) {
        // console.log(item);
        output += `<tr>
    <td>${index + 1}</td>
    <td>
        <div class="book_info">
            <img src="${item.Book_image}" alt="Attitude is everthing">
            <div class="div">
                <p>${item.Book_title}</p>
                <small id="cost">${item.DiscountPrice}</small>
                <br>
                <a href=""  class="remove">Remove</a>
            </div>
        </div>
    </td>
    <td><i class="fa-solid fa-plus"></i>
    <p>1</p>
    <i class="fa-solid fa-plus"></i></td>
    <td>${item.originalPrice}</td>
</tr>
  </tr>`
    };
    addition += Number(item.originalPrice);
    document.getElementById("table_body").innerHTML = output;

    console.log(item.Book_id)
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
        })
    })


});

// This code for show the addition of the price 
let cost = document.getElementById("price");
cost.innerHTML = addition;
console.log(addition);

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
