// write the json for cart page

// create a product cart div


let user_wishlist = JSON.parse(localStorage.getItem("wishlist"));
let book_detatils = JSON.parse(localStorage.getItem("Book_details"));
let active_user = localStorage.getItem("activeUser");
console.log(active_user);

// console.log(active_user)


for (let i = 0; i < user_wishlist.length; i++) {

    if (user_wishlist[i]["user_email"] == active_user) {

        let product_cart_div = document.createElement("div");
        product_cart_div.setAttribute("class", "product-cart");


        // create a product img div
        let product_img_div = document.createElement("div");
        product_img_div.setAttribute("class", "product-img");


        // create img tag 1 
        let img1 = document.createElement("img");
        img1.setAttribute("src", user_wishlist[i]["Book_image"]);
        img1.setAttribute("alt", "products imgs");



        // append the img1 to div

        product_img_div.append(img1);

        // create a anothor div 
        let product_details_div = document.createElement("div");
        product_details_div.setAttribute("class", "product-deatils");


        // create a h2 tag one 
        let h2_tag1 = document.createElement("h2");
        h2_tag1.innerHTML = user_wishlist[i]["Book_title"];

        // create a h3 tag
        let h3_tag1 = document.createElement("h3");
        h3_tag1.innerHTML = user_wishlist[i]["originalPrice"];

        // create a samll tag
        let s_tag = document.createElement("s");
        s_tag.setAttribute("style", "color:red");
        s_tag.innerHTML = user_wishlist[i]["DiscountPrice"] + "OFF";

        // append the small tag
        h3_tag1.append(s_tag);

        // create a p tag
        let p_tag = document.createElement("p");
        p_tag.innerHTML = user_wishlist[i]["author_content"];

        // create a h4 tag
        let h4_tag = document.createElement("h4");
        h4_tag.innerHTML = "QTY :"

        // create a input tag
        let inpt = document.createElement("input");
        inpt.setAttribute("type", "number");
        inpt.setAttribute("value", "1");

        // create a icon tag
        let icon = document.createElement("i");
        icon.setAttribute("id", "delete_cart");
        icon.setAttribute("class", "fa-solid fa-trash");
        icon.setAttribute("onclick",`deleteWishlist(${user_wishlist[i]["Book_id"]})`)
        // append the input and icons tag to h4
        h4_tag.append(inpt, icon);

        // append the all element into the div
        product_cart_div.append(product_img_div, product_details_div);
        product_details_div.append(h2_tag1, h3_tag1, p_tag, h4_tag);
        document.querySelector("div.product-detail").append(product_cart_div);


        // delete the add to cart feature

        // icon.addEventListener("click", () => {
        //     confirm("Do you want this delete this product");
        //     for (let j = 0; j < user_wishlist.length; j++) {
        //         if (active_user == user_wishlist[j]["user_email"] && book_detatils[j]["bookid"] == user_wishlist[j]["Book_id"]) {
        //             user_wishlist.splice(j, 1);
        //         };
        //         localStorage.setItem("wishlist", JSON.stringify(user_wishlist));
        //         // location.reload();
        //         break;
        //     };
        //     // alert("Product is removed");
        // });

    }
    else {
        console.log("else");
    };

};

function deleteWishlist(id) {
    let user_wishlist = JSON.parse(localStorage.getItem("wishlist"));
    let finded_wishlist = user_wishlist.find((f) => f.Book_id == id) ;
    let index = user_wishlist.indexOf(finded_wishlist);
    user_wishlist.splice(index,1);
    localStorage.setItem("wishlist",JSON.stringify(user_wishlist));
    location.reload()
};










