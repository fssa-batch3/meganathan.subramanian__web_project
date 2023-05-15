// Pop Up codes
// let popUp = document.getElementById("add_address")
// popUp.addEventListener("click", function () {
//     document.getElementById("pop_up").style.display = "block"
// })

// get the details from the local storage

// url params 

let url = window.location.search;
const search = new URLSearchParams(url);
const product_id = search.get("id");
const Book_details = JSON.parse(localStorage.getItem("Book_details"));
const active_user = localStorage.getItem("activeUser");
const user_details = JSON.parse(localStorage.getItem("userslist"));
let quantity = 1;

let res;
Book_details.find(function (e) {

    if (e.bookid == product_id) {
        return res = e
    }
    else {
        return res = 0
    }
});

// Below create the create element

// create a div


const info_div = document.createElement("div");
info_div.setAttribute("class", "info");

// Create a another div

const book_img_div = document.createElement("div");
book_img_div.setAttribute("class", "book_img");

// Create a img tag
const img1 = document.createElement("img");
img1.setAttribute("src", res["bookImage"]);
img1.setAttribute("alt", "book_img");

// create a anothe div
const quantity_div = document.createElement("div");
quantity_div.setAttribute("class", "quantity");

// Create a button tag
const button_minus = document.createElement("button");
button_minus.innerText = "-";

// Create a input tag
const inp_number = document.createElement("input");
inp_number.setAttribute("type", "number");
inp_number.setAttribute("id", "book_quantity");
inp_number.setAttribute("class", "quantity_value");
inp_number.setAttribute("value", "1");

// Create a another button
const button_plus = document.createElement("button");
button_plus.innerHTML = "+";

// append the between tags
quantity_div.append(button_minus, inp_number, button_plus);
book_img_div.append(img1, quantity_div);
// console.log(book_img_div);

// Create a another div
const detail_div = document.createElement("div");
detail_div.setAttribute("class", "detail");

// Create a h2 tag
const h2_tag1 = document.createElement("h2");
h2_tag1.innerText = "Delivered on April 30";

// create p_tag 
const p_tag1 = document.createElement("p");
p_tag1.setAttribute("class", "book_name");
p_tag1.innerText = "Book Name :" + res["bookName"];


// create a another p tag
const p_tag2 = document.createElement("p");
p_tag2.setAttribute("class", "paper");
p_tag2.innerText = res["book_binding"];

// create a span tag 
const span1 = document.createElement("span");
span1.setAttribute("class", "author");
span1.innerText = res["Book_language"];

// append the span
p_tag2.append(span1);

// Create a h3 tag
const h3_tag1 = document.createElement("h3");
h3_tag1.innerText = res["imprint"];

// Create a another div 
const price_sec_div = document.createElement("div");
price_sec_div.setAttribute("class", "price_sec");

// Create a h4 tag
const h4_tag = document.createElement("h4");

// Create a strike tag
const s_tag = document.createElement("s");
s_tag.innerText = "Offer Price:" + "₹" + res["DiscountPrice"];

// Create a br tag
const br_tag = document.createElement("br");

// append the tag
h4_tag.append(s_tag, br_tag);

// Create a h1 tag
const h1_tag = document.createElement("h1");
h1_tag.innerText = "Orginal price" + "₹" + res["originalPrice"];

// append the child tags
price_sec_div.append(h4_tag, h1_tag);

// Create a another div
const Remove_div = document.createElement("div");
Remove_div.setAttribute("class", "remove_option");

// create a p_tag 
const p_tag3 = document.createElement("p");
p_tag3.innerHTML = "Remove ";

// Create a icons 
const icon_tag = document.createElement("i");
icon_tag.setAttribute("class", "fa-solid fa-trash");

//append the icons
p_tag3.append(icon_tag);
Remove_div.append(p_tag3);
console.log(Remove_div);


// Create a another p_tag
const p_tag4 = document.createElement("p");
p_tag4.innerText = "₹" + res["originalPrice"];
p_tag4.setAttribute("class", "total_price");

// Create a another p_tag
const p_tag5 = document.createElement("p");
p_tag5.innerText = "Free";

// Create a another p_tag
const p_tag6 = document.createElement("p");
p_tag6.setAttribute("class", "Total_money total_price");
p_tag6.innerText = "₹" + res["originalPrice"];

document.querySelector(".Total_price").append(p_tag4, p_tag5, p_tag6);

// append all the div tags
detail_div.append(h2_tag1, p_tag1, p_tag2, h3_tag1, price_sec_div, Remove_div);

info_div.append(book_img_div, detail_div,)
console.log(info_div);
document.querySelector(".drpdown2").append(info_div);




// below the code for the increase quantity
button_plus.addEventListener("click", e => {
    quantity++;
    document.getElementById("book_quantity").value = quantity;
    let total = "";
    total += "Orginal price" + "₹" + parseInt(res["originalPrice"]) * quantity;
    h1_tag.innerText = total;


    let price = "";
    price += "₹" + parseInt(res["originalPrice"] * quantity);
    let input = document.querySelectorAll(".total_price")
    input[0].innerText = price;
    console.log(input[0].innerText = price)
    input[1].innerText = price;


});

// button_plus.addEventListener("click", e => {

// })
button_minus.addEventListener("click", e => {
    if (quantity > 1) {
        quantity--;
        document.getElementById("book_quantity").value = quantity;
        let total = "";
        total += "Orginal price" + "₹" + parseInt(res["originalPrice"]) * quantity;
        h1_tag.innerText = total;
        // console.log(total);
        let price = "";
        price += "₹" + parseInt(res["originalPrice"] * quantity);
        let input = document.querySelectorAll(".total_price")
        input[0].innerText = price;
        console.log(input[0].innerText = price)
        input[1].innerText = price;

    }
});

let payment = document.getElementById("payment");

payment.addEventListener("click", e => {
    payment.setAttribute(
        "href", "../Payment gateway/payment.html?id=" + res["bookid"] + "&qty=" + quantity
    )
})
