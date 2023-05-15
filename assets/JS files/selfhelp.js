// get from the local storage

let book_details = JSON.parse(localStorage.getItem("Book_details"));


// Create a wishlist count

let res;

// let category;
let categname;
let cat = document.querySelectorAll(".Categories");
// console.log(cat);
cat.forEach((data) => {
  data.addEventListener("click", () => {
    categname = data.innerText;
    //   alert(categname);
    data.setAttribute("href", `?category=${categname}`)
    // alert(don)

  })
})
// ok.addEventListener("click",()=>{{
//     alert("soksos")
// }})


let url = window.location.search;
const search = new URLSearchParams(url);
const product_id = search.get("category");
console.log(product_id);



for (let i = 0; i < book_details.length; i++) {

  if (book_details[i]["category"] == product_id) {

    // Create a wishlist count
    let wish_icons = document.createElement("div");
    wish_icons.setAttribute("id", "wishlist_icons");
    wish_icons.setAttribute("class", "wish_icons");


    let icon_i = document.createElement("i")
    icon_i.setAttribute("class", "fa-sharp fa-regular fa-heart icon_wishlist");
    icon_i.setAttribute("id", "wish_icon");
    wish_icons.prepend(icon_i)
    // console.log(wish_icons);

    const book_img_div = document.createElement("div");
    book_img_div.setAttribute("class", "book-img");

    // create a another div

    const trend_book_div = document.createElement("div");
    trend_book_div.setAttribute("class", "trend_book");
    book_img_div.append(trend_book_div);

    // create a anchor tag 

    const a_1 = document.createElement("a");
    //  a_1.setAttribute("href", "../../Pages/products_details/Product_page.html");

    // create a img tag 

    const img = document.createElement("img");
    img.setAttribute("src", book_details[i]["bookImage"]);
    // img.setAttribute("alt", Book_cards[i]["image"]["alt"]);
    a_1.append(img);

    // Create a another anchor tag 

    const a_2 = document.createElement("a");
    a_2.setAttribute("href", "");

    // create a input tag 

    const inpt = document.createElement("input");
    inpt.setAttribute("type", "button");
    inpt.setAttribute("value", "add to cart");
    inpt.setAttribute("class", "add");
    // inpt.setAttribute("id","User_cart");
    a_2.append(inpt);
    trend_book_div.append(a_1);
    trend_book_div.append(a_2);

    // console.log(book_img_div);


    // // Create a second div 

    const book_info_div = document.createElement("div");
    book_info_div.setAttribute("class", "book-info");
    book_img_div.append(book_info_div);

    // Create a p_tag

    const p_tag = document.createElement("p");
    p_tag.innerText = book_details[i]["bookName"];


    // Create a New div class name:rating 
    rating_div = document.createElement("div");
    rating_div.setAttribute("class", "rating")


    // Create a Icon tag 
    for (let a = 1; a <= 5; a++) {
      icon = document.createElement("i");
      icon.setAttribute("class", "fa-solid fa-star");
      rating_div.append(icon);
    }

    // Create a small tag

    const small_tag = document.createElement("s");
    small_tag.innerText = "₹" + book_details[i]["DiscountPrice"];

    // Create  a h3 tag 

    const h_3 = document.createElement("h3");
    h_3.innerText = "₹" + book_details[i]["originalPrice"];
    h_3.append(small_tag);

    // Create a anchor tag 

    const a_3 = document.createElement("a");
    a_3.setAttribute("href", "Pages/products_details/Product_page.html?id=" + book_details[i]["category"]);

    // Create a button tag 

    const btn = document.createElement("button");
    btn.innerText = "Buy Now";


    // append all the element and div

    a_3.append(btn);
    book_info_div.append(p_tag);
    book_info_div.append(rating_div);
    book_info_div.append(h_3);
    book_info_div.append(a_3);
    book_img_div.append(book_info_div);
    wish_icons.append(book_img_div);
    document.querySelector("div.books").append(wish_icons);
  };

}





