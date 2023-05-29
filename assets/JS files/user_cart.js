/*
Here below the code for the cart page 
user can  add the cart 
*/
let user_cart = JSON.parse(localStorage.getItem("user_cart")) ?? [];
let Book_details = JSON.parse(localStorage.getItem("Book_details"));
let active_user = JSON.parse(localStorage.getItem("activeUser"));
// let user_list =
let addition = 0;
let total1 = 0;
let itemQuantity = 1;


user_cart.forEach((item, index) => {

    if (active_user == item.user_email) {

        total1 += Number(item.originalPrice)
        // console.log(item);
        let tr1 = document.createElement("tr");
        // this code for  S.NO
        let td1 = document.createElement("td");
        td1.innerText = index + 1 + ".";
        let td2 = document.createElement("td");
        let img1 = document.createElement("img");
        img1.setAttribute("src", item.Book_image);

        //append into the td
        td2.append(img1);

        let td3 = document.createElement("td");

        // Create a div
        let book_info_div = document.createElement("div");
        book_info_div.setAttribute("class", "book_info");

        // Create a another div
        let div_div = document.createElement("div");
        div_div.setAttribute("class", "div");

        // Create a p tag
        let p_tag = document.createElement("p");
        p_tag.innerText = item.Book_title;

        // Create a another tag
        let a_tag = document.createElement("a");
        a_tag.setAttribute("id", "remove");
        a_tag.innerText = "Remove";


        // append the ptag and a tag
        div_div.append(p_tag, a_tag);
        book_info_div.append(div_div);
        td3.append(book_info_div);

        // create a td4 
        let td4 = document.createElement("td");
        td4.setAttribute("class", "price")
        td4.setAttribute("data-book_id", item.Book_id)
        // console.log(item.Book_id)
        td4.innerText = item.originalPrice;
        td4.setAttribute("data-price", item.originalPrice)

        // create a another td 
        let td5 = document.createElement("td");

        // Create a quantity div
        let qunatity_div = document.createElement("div");
        qunatity_div.setAttribute("class", "quantity");


        // Create a p tag
        let icon_plus = document.createElement("i");
        icon_plus.setAttribute("class", "fa-solid fa-plus plus");
        icon_plus.setAttribute("id", "plus");


        // Create a another ptag 
        let p_tag2 = document.createElement("p");
        p_tag2.setAttribute("id", "adding_quantity");
        p_tag2.setAttribute("class", "qty")
        p_tag2.innerText = itemQuantity;

        let icon_minus = document.createElement("i");
        icon_minus.setAttribute("class", "fa-solid fa-minus minus");
        icon_minus.setAttribute("id", "minus");

        // append the p tags 
        qunatity_div.append(icon_minus, p_tag2, icon_plus);
        td5.append(qunatity_div);
        // console.log(td5);

        // create a another td
        let td6 = document.createElement("td");
        td6.setAttribute("class", "subtotal_item")
        td6.innerText = item.originalPrice;
        console.log(td6);

        // append all the td and div
        tr1.append(td1, td2, td3, td4, td5, td6);
        // console.log(tr1);

        document.querySelector("#table_body").append(tr1);



        a_tag.addEventListener("click", () => {
            alert('Are you sure want to delete?');
            for (let i = 0; i < user_cart.length; i++) {
                if (active_user == user_cart[i]["user_email"] && user_cart[i]["Book_id"] == item.Book_id) {
                    user_cart.splice(i, 1);
                    localStorage.setItem("user_cart", JSON.stringify(user_cart));
                    location.reload();
                }
                else {
                    console.log("not");
                };
            };
        });

        // icon_plus.addEventListener('click', (e) => {
        //     itemQuantity++;
        //     p_tag2.innerText = itemQuantity;
        //     td6.innerText = td4.innerText * p_tag2.innerText;
        //     // td6.innerText = td6.innerText;
        //     for (let i = 0; i < user_cart.length; i++) {
        //         let increase_value = document.querySelectorAll("#adding_quantity");
        //         // console.log(e.target.parentElement.children[1].innerText)
        //         for(let j = 0; j < Book_details.length; j++){
        //             if (Book_details[j]["bookid"] == user_cart[i]["Book_id"]) {
        //                 // console.log(user_cart[i]["Book_id"])
        //                 user_cart[i]["qty"] = e.target.parentElement.children[i].innerText;
        //                 localStorage.setItem("user_cart", JSON.stringify(user_cart));
        //                 increase_value = user_cart[i]["qty"];
        //             }
        //         }

        //     }
        //     total_amount();
        // });

        icon_plus.addEventListener('click', (e) => {
            // if(active_user == user_cart[i]["user_email"] &&  )
        })

        // icon_minus.addEventListener("click", () => {
        //     if (itemQuantity > 1) {
        //         itemQuantity--;
        //         p_tag2.innerText = itemQuantity;
        //         td6.innerText = td6.innerText - td4.innerText;
        //         for (let i = 0; i < user_cart.length; i++) {
        //             let increase_value = document.querySelectorAll("#adding_quantity");
        //             if (Book_details[i]["bookid"] == user_cart[i]["Book_id"]) {
        //                 user_cart[i]["qty"] = e.target.parentElement.children[i].innerText;
        //                 localStorage.setItem("user_cart", JSON.stringify(user_cart));
        //                 increase_value = user_cart[i]["qty"];
        //             }

        //         }
        //         total_amount();
        //     };
        // });
    };
});








// Create the cart total div
let h2_tag = document.createElement("h2");
h2_tag.innerText = "Cart Total";

let hr_tag = document.createElement("hr");

// Create a cart_total div
let cart_total_div = document.createElement("div");
cart_total_div.setAttribute("class", "cart-total");

// create a div1 
let div1 = document.createElement("div");

// create a p tag
let p_tag3 = document.createElement("p");
p_tag3.innerText = "Subtotal";

// Create a another p tag
let p_tag4 = document.createElement("p");
p_tag4.innerText = "GST";

// Create a another p tag
let p_tag5 = document.createElement("p");
p_tag5.innerText = "Total";

// append the all p tags
div1.append(p_tag3, p_tag4, p_tag5);

console.log(div1);

// Create a another div 
let div2 = document.createElement("div");

// Create a p tag
let p_tag6 = document.createElement("p");
p_tag6.innerText = "460";

// Create a another p_tag
let p_tag7 = document.createElement("p");
p_tag7.innerText = "50.00";

// Create a another p_tag
let p_tag8 = document.createElement("p");
p_tag8.setAttribute("id", "price");
p_tag8, innerText = total1


// append the all p tags
div2.append(p_tag6, p_tag7, p_tag8);
cart_total_div.append(div1, div2);
// console.log(cart_total_div);

// Create a anchor tag
let a_tag1 = document.createElement("a");
// a_tag1.setAttribute("href", "../Payment gateway/payment.html?id=" + active_user);



// Create a another button tag
let button_tag = document.createElement("button");
button_tag.setAttribute("class", "checkout");
button_tag.innerText = " Checkout";

// append the buttoon
a_tag1.append(button_tag);

document.querySelector(".cart-amt").append(h2_tag, hr_tag, cart_total_div, a_tag1);

document.getElementById("price").innerText = total1;


// console.log(cart_total_div);


// Below the code for increae the amount
// function total_amount() {
//     let total_elem = document.querySelectorAll(".subtotal_item");
//     let total = 0;
//     for (let i = 0; i < total_elem.length; i++) {

//         total += Number(total_elem[i].innerText);
//         console.log(total);
//     }
//     p_tag8.innerText = total;
// }
// total_amount();

let plus = document.querySelectorAll(".plus")
let minus = document.querySelectorAll(".minus")
let qty = document.querySelectorAll(".qty")
let total_elem = document.querySelectorAll(".subtotal_item");
let price = document.querySelectorAll(".price");



for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
        if (itemQuantity > 10) {
            qty[i].innerText++
            const total = parseFloat(price[i].dataset.price) * parseFloat(qty[i].innerText)
            total_elem[i].innerText = total

            total1 += parseFloat(price[i].dataset.price)
            console.log(total1);

            p_tag8.innerText = Number(total1)

        }


    })
}
console.log(itemQuantity);

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
        if (itemQuantity > 1) {

            qty[i].innerText--
            const total = parseFloat(price[i].dataset.price) * parseFloat(qty[i].innerText)
            total_elem[i].innerText = total

            total1 -= parseFloat(price[i].dataset.price)
            console.log(total1);

            p_tag8.innerText = Number(total1)

        }

    })
}


a_tag1.addEventListener("click", () => {

    user_cart.find(e => {

        if (e.user_email === active_user) {

            for (let i = 0; i < qty.length; i++) {
                // qty[i].value
                if (e.Book_id === parseFloat(price[i].dataset.book_id)) {

                    // console.log("working")

                    e.qty = Number(qty[i].innerText)

                    localStorage.setItem("user_cart", JSON.stringify(user_cart))
                    break;
                    // console.log(e);
                }
            }
            window.location.href = "../Payment gateway/payment.html?id=" + active_user;

        }
        // return e;
    })

})







