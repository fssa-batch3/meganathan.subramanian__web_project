/*
Here below the code for the cart page 
user can  add the cart 
*/
let user_cart = JSON.parse(localStorage.getItem("user_cart"));
let Book_details = JSON.parse(localStorage.getItem("Book_details"));
let active_user = localStorage.getItem("activeUser");
let itemQuantity = 1;
let addition = 0;



user_cart.forEach((item, index) => {

    if (active_user == item.user_email) {
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
        td4.innerText = item.originalPrice;

        // create a another td 
        let td5 = document.createElement("td");

        // Create a quantity div
        let qunatity_div = document.createElement("div");
        qunatity_div.setAttribute("class", "quantity");

        // Create a p tag
        let icon_plus = document.createElement("i");
        icon_plus.setAttribute("class", "fa-solid fa-plus");
        icon_plus.setAttribute("id", "plus");

        // Create a another ptag 
        let p_tag2 = document.createElement("p");
        p_tag2.setAttribute("id", "adding_quantity");
        // p_tag2.innerText = itemQuantity;

        let icon_minus = document.createElement("i");
        icon_minus.setAttribute("class", "fa-solid fa-minus");
        icon_minus.setAttribute("id", "minus");

        // append the p tags 
        qunatity_div.append(icon_minus, p_tag2, icon_plus);
        td5.append(qunatity_div);
        console.log(td5);

        // create a another td
        let td6 = document.createElement("td");
        td6.innerText = item.originalPrice;

        // append all the td and div
        tr1.append(td1, td2, td3, td4, td5, td6);
        console.log(tr1);

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

    };
    addition += Number(item.originalPrice);


    // This code for show the addition of the price 
    let cost = document.getElementById("price");
    cost.innerHTML = "&#8377; " + addition;

    // let quantity_increase = document.getElementById("adding_quantity");
    // quantity_increase.innerText = itemQuantity;


    let increment = document.querySelectorAll("#plus")
    console.log(increment);
    // document.querySelectorAll("#plus").forEach(click, ()=>{
    //     itemQuantity++;
    //     console.log(itemQuantity);
    //     document.getElementById("adding_quantity").innerText = itemQuantity;
    // })
    // document.querySelectorAll("#minus").forEach(click, ()=>{
    //     itemQuantity--;
    //     console.log(itemQuantity);
    //     document.getElementById("adding_quantity").innerText = itemQuantity;
    // })
});



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

