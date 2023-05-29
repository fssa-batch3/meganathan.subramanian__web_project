// const Book_cards = [{
//     "image": {
//         "source": "https://m.media-amazon.com/images/I/71Rcjb+1yLL.jpg",
//         "alt": "Attitude is everything book"
//     },
//     'title': 'Attitude is Everything  by Jeff',
//     'price': 120.00,
//     'strike_price': 200,

// const { doc } = require("prettier");

// },
// {
//     "image": {
//         "source": "https://m.media-amazon.com/images/I/617UBjNbf9L.jpg",
//         "alt": "Attitude is everything book"
//     },
//     'title': 'Attitude is everything book',
//     'price': 200.00,
//     'strike_price': 300,

// },
// {
//     "image": {
//         "source": " https://m.media-amazon.com/images/I/516VyKCKi-L.jpg",
//         "alt": "Attitude is everything book"
//     },
//     'title': 'Eat that Frog Written by brian Tracy',
//     'price': 200.00,
//     'strike_price': 400,

// },
// {
//     "image": {
//         "source": "https://m.media-amazon.com/images/I/71H8-WDVR9L.jpg",
//         "alt": "Attitude is everything book"
//     },
//     'title': "Happy is the Goal Tamil Edition Book",
//     'price': 150.00,
//     'strike_price': 300,

// },
// {
//     "image": {
//         "source": "https://m.media-amazon.com/images/I/61xFwIM2UNL.jpg",
//         "alt": ""
//     },
//     'title': 'The Secret Book By Rhina',
//     'price': 200.00,
//     'strike_price': 400,

// },
// {
//     "image": {
//         "source": "https://m.media-amazon.com/images/I/51jpuH++30L._SX318_BO1,204,203,200_.jpg",
//         "alt": "Attitude is everything book"
//     },
//     'title': 'Rich dad Poor Dad in Tamil edition',
//     'price': 200.00,
//     'strike_price': 400,

// },
// {
//     "image": {
//         "source": "https://m.media-amazon.com/images/I/51390klhT7L.jpg",
//         "alt": "Attitude is everything book"
//     },
//     'title': 'Attitude is everything book',
//     'price': 150.00,
//     'strike_price': 400,

// },
// {
//     "image": {
//         "source": "https://m.media-amazon.com/images/I/519tZhMkdIL.jpg",
//         "alt": "Attitude is everything book"
//     },
//     'title': 'Attitude is Everything Written by Jeff',
//     'price': 300.00,
//     'strike_price': 500,

// },
// {
//     "image": {
//         "source": "https://m.media-amazon.com/images/I/512fCrERU2L.jpg",
//         "alt": "Attitude is everything book"
//     },
//     'title': 'Attitude is Everything Written by Jeff',
//     'price': 200.00,
//     'strike_price': 500,

// },
// {
//     "image": {
//         "source": "https://m.media-amazon.com/images/I/712H8OZbswS.jpg",
//         "alt": "Attitude is everything book"
//     },
//     'title': 'Attitude is Everything Written by Jeff',
//     'price': 190.00,
//     'strike_price': 400,

// },
// ]

// create a div 

let products_details = JSON.parse(localStorage.getItem("Book_details"));
console.log(products_details);
// get the local storage for the active user
let active_user = JSON.parse(localStorage.getItem("activeUser"))

let user_wish_list = JSON.parse(localStorage.getItem("wishlist")) ?? [];

let user_cart = JSON.parse(localStorage.getItem("user_cart")) ?? [];



// let book_category;
// Below the code for the tamil books
let tamil = products_details.filter((data) => {
    if (data.Book_language.toLowerCase() == "tamil") {
        return data;
    }
});

// Below to code for best seller book
let bestseller = products_details.filter((data) => {
    if (data.booktype == "Best Seller") {
        return data;
    }
});
// Below the code for New arrival book
let newArrivalbook = products_details.filter((data) => {
    if (data["booktype"] == "New arrival book") {
        return data;
    }
});

// Below the code for fiction book
let fictionBook = products_details.filter((data) => {
    if (data["booktype"] == "fiction book") {
        return data;
    }
})


let wish_count = 0;
for (let i = 0; i < tamil.length; i++) {

    // Create a new div
    let book_filter_div = document.createElement("div");
    book_filter_div.setAttribute("class", "Book_filter");


    // Create a wishlist count
    let wish_icons = document.createElement("div");
    wish_icons.setAttribute("id", "wishlist_icons");
    wish_icons.setAttribute("class", "wish_icons");


    let icon_i = document.createElement("i")
    icon_i.setAttribute("class", "fa-sharp fa-regular fa-heart icon_wishlist");
    icon_i.setAttribute("id", "wish_icon");
    wish_icons.prepend(icon_i)
    // console.log(icon_i);
    // console.log(wish_icons);

    const book_img_div = document.createElement("div");
    book_img_div.setAttribute("class", "book-img");

    // create a another div

    const trend_book_div = document.createElement("div");
    trend_book_div.setAttribute("class", "trend_book");
    book_img_div.append(trend_book_div);

    // create a anchor tag 

    const a_1 = document.createElement("a");
    a_1.setAttribute("href", "Pages/products_details/Product_page.html?id=" + tamil[i]["bookid"]);

    // create a img tag 

    const img = document.createElement("img");
    img.setAttribute("src", tamil[i]["bookImage"]);
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
    p_tag.innerText = tamil[i]["bookName"];


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
    small_tag.innerText = "₹" + tamil[i]["DiscountPrice"];

    // Create  a h3 tag 

    const h_3 = document.createElement("h3");
    h_3.innerText = "₹" + tamil[i]["originalPrice"];
    h_3.append(small_tag);

    // Create a anchor tag 

    const a_3 = document.createElement("a");
    a_3.setAttribute("href", "Pages/products_details/Product_page.html?id=" + tamil[i]["bookid"]);

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
    book_filter_div.append(wish_icons)
    document.querySelector("div.books").append(book_filter_div);
    // document.querySelector("div.Book_filter").append(wish_icons);
    // console.log(wish_icons);




    // ADD TO WISHLIST PAGE LOGIC

    // let cart = document.getElementById("wishlist_icons");
    icon_i.addEventListener("click", (e) => {


        // get the book for this book is already there in the wishlist
        // let book_id = products_details[i]["bookid"];
        // console.log(book_id)

        let check;

        user_wish_list.find(f => {
            // console.log(check);
            if (f["Book_id"] == tamil[i]["bookid"] && active_user == f["user_email"]) {
                check = 1;

            }
            else {
                check = 0;
            };

        })

        if (check == 1) {
            // for (let j = 0; j < user_wish_list.length; j++) {
            //     if (book_id == user_wish_list[j]["Book_id"]) {
            //         user_wish_list.splice(j, 1);
            //         localStorage.setItem("wishlist", JSON.stringify(user_wish_list));
            //     };
            // };
            alert("This product is Already there in you're Cart");
        }
        else {
            let user_wishlist = {};
            user_wishlist["user_email"] = active_user,
                user_wishlist["Book_image"] = tamil[i]["bookImage"],
                user_wishlist["Book_title"] = tamil[i]["bookName"],
                user_wishlist["DiscountPrice"] = tamil[i]["DiscountPrice"],
                user_wishlist["originalPrice"] = tamil[i]["originalPrice"],
                user_wishlist["author_content"] = tamil[i]["author_content"],
                user_wishlist["Book_id"] = tamil[i]["bookid"],
                // user_wishlist["Status"] = true;
                user_wish_list.push(user_wishlist);
            localStorage.setItem("wishlist", JSON.stringify(user_wish_list));
            alert("Product is Added");
        };
    });
    // This is for add to cart
    a_2.addEventListener("click", () => {
        // let book_id = products_details[i]["bookid"];
        let check;
        user_cart.find(f => {
            if (f["Book_id"] == tamil[i]["bookid"] && active_user == f["user_email"]) {
                return check = 1;
            }
            else {
                return check = 0;
            };
        });
        if (check == 1) {
            // for (let j = 0; j < user_cart.length; j++) {
            //     if (book_id == user_cart[j]["Book_id"]) {
            //         user_cart.splice(j, 1);
            //         localStorage.setItem("user_cart", JSON.stringify(user_cart));
            //     };
            // };
            alert("This product is Already there in you're Wishlist");
        }
        else {
            let user_carlist = {};
            user_carlist["user_email"] = active_user,
                user_carlist["Book_image"] = tamil[i]["bookImage"],
                user_carlist["Book_title"] = tamil[i]["bookName"],
                user_carlist["DiscountPrice"] = tamil[i]["DiscountPrice"],
                user_carlist["originalPrice"] = tamil[i]["originalPrice"],
                user_carlist["author_content"] = tamil[i]["author_content"],
                user_carlist["Book_id"] = tamil[i]["bookid"],
                user_carlist["qty"] = 1

            user_cart.push(user_carlist);
            localStorage.setItem("user_cart", JSON.stringify(user_cart));
            alert("Product is Added");
        };

    });

};

// Below the code for the bestseller section
for (let i = 0; i < bestseller.length; i++) {

    // Create a another div

    let book_filter_div = document.createElement("div");
    book_filter_div.setAttribute("class", "Book_filter");


    // Create a wishlist count
    let wish_icons = document.createElement("div");
    wish_icons.setAttribute("id", "wishlist_icons");
    wish_icons.setAttribute("class", "wish_icons");


    let icon_i = document.createElement("i")
    icon_i.setAttribute("class", "fa-sharp fa-regular fa-heart icon_wishlist");
    icon_i.setAttribute("id", "wish_icon");
    wish_icons.prepend(icon_i)
    // console.log(icon_i);
    // console.log(wish_icons);

    const book_img_div = document.createElement("div");
    book_img_div.setAttribute("class", "book-img");

    // create a another div

    const trend_book_div = document.createElement("div");
    trend_book_div.setAttribute("class", "trend_book");
    book_img_div.append(trend_book_div);

    // create a anchor tag 

    const a_1 = document.createElement("a");
    a_1.setAttribute("href", "Pages/products_details/Product_page.html?id=" + bestseller[i]["bookid"]);

    // create a img tag 

    const img = document.createElement("img");
    img.setAttribute("src", bestseller[i]["bookImage"]);
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
    p_tag.innerText = bestseller[i]["bookName"];


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
    small_tag.innerText = "₹" + bestseller[i]["DiscountPrice"];

    // Create  a h3 tag 

    const h_3 = document.createElement("h3");
    h_3.innerText = "₹" + bestseller[i]["originalPrice"];
    h_3.append(small_tag);

    // Create a anchor tag 

    const a_3 = document.createElement("a");
    a_3.setAttribute("href", "Pages/products_details/Product_page.html?id=" + bestseller[i]["bookid"]);

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
    book_filter_div.append(wish_icons)
    document.querySelector("div.books1").append(book_filter_div);




    // ADD TO WISHLIST PAGE LOGIC

    // let cart = document.getElementById("wishlist_icons");
    icon_i.addEventListener("click", (e) => {

        // get the book for this book is already there in the wishlist
        // let book_id = products_details[i]["bookid"];
        // console.log(book_id)

        let check;

        user_wish_list.find(f => {
            // console.log(check);
            if (f["Book_id"] == bestseller[i]["bookid"] && active_user == f["user_email"]) {
                check = 1;

            }
            else {
                check = 0;
            };

        })

        if (check == 1) {
            // for (let j = 0; j < user_wish_list.length; j++) {
            //     if (book_id == user_wish_list[j]["Book_id"]) {
            //         user_wish_list.splice(j, 1);
            //         localStorage.setItem("wishlist", JSON.stringify(user_wish_list));
            //     };
            // };
            alert("This product is Already there in you're Cart");
        }
        else {
            let user_wishlist = {};
            user_wishlist["user_email"] = active_user,
                user_wishlist["Book_image"] = bestseller[i]["bookImage"],
                user_wishlist["Book_title"] = bestseller[i]["bookName"],
                user_wishlist["DiscountPrice"] = bestseller[i]["DiscountPrice"],
                user_wishlist["originalPrice"] = bestseller[i]["originalPrice"],
                user_wishlist["author_content"] = bestseller[i]["author_content"],
                user_wishlist["Book_id"] = bestseller[i]["bookid"]

            user_wish_list.push(user_wishlist);
            localStorage.setItem("wishlist", JSON.stringify(user_wish_list));
            alert("Product is Added");
        };
    });
    // This is for add to cart
    a_2.addEventListener("click", () => {
        // let book_id = products_details[i]["bookid"];
        let check;
        user_cart.find(f => {
            if (f["Book_id"] == bestseller[i]["bookid"] && active_user == f["user_email"]) {
                return check = 1;
            }
            else {
                return check = 0;
            };
        });
        if (check == 1) {
            // for (let j = 0; j < user_cart.length; j++) {
            //     if (book_id == user_cart[j]["Book_id"]) {
            //         user_cart.splice(j, 1);
            //         localStorage.setItem("user_cart", JSON.stringify(user_cart));
            //     };
            // };
            alert("This product is Already there in you're Wishlist");
        }
        else {
            let user_carlist = {};
            user_carlist["user_email"] = active_user,
                user_carlist["Book_image"] = bestseller[i]["bookImage"],
                user_carlist["Book_title"] = bestseller[i]["bookName"],
                user_carlist["DiscountPrice"] = bestseller[i]["DiscountPrice"],
                user_carlist["originalPrice"] = bestseller[i]["originalPrice"],
                user_carlist["author_content"] = bestseller[i]["author_content"],
                user_carlist["Book_id"] = bestseller[i]["bookid"],
                user_carlist["qty"] = 1

            user_cart.push(user_carlist);
            localStorage.setItem("user_cart", JSON.stringify(user_cart));
            alert("Product is Added");
        };
    });
    // const wish = JSON.parse(localStorage.getItem("wishlist"))
    // wish_count = wish.length
    // document.getElementById("wish_count").innerText = wish_count;


};


// Below the Code for the new arival  Book

for (let i = 0; i < newArrivalbook.length; i++) {
    // Create a another div

    let book_filter_div = document.createElement("div");
    book_filter_div.setAttribute("class", "Book_filter");

    // Create a wishlist count
    let wish_icons = document.createElement("div");
    wish_icons.setAttribute("id", "wishlist_icons");
    wish_icons.setAttribute("class", "wish_icons");


    let icon_i = document.createElement("i")
    icon_i.setAttribute("class", "fa-sharp fa-regular fa-heart icon_wishlist");
    icon_i.setAttribute("id", "wish_icon");
    wish_icons.prepend(icon_i)
    // console.log(icon_i);
    // console.log(wish_icons);

    const book_img_div = document.createElement("div");
    book_img_div.setAttribute("class", "book-img");

    // create a another div

    const trend_book_div = document.createElement("div");
    trend_book_div.setAttribute("class", "trend_book");
    book_img_div.append(trend_book_div);

    // create a anchor tag 

    const a_1 = document.createElement("a");
     a_1.setAttribute("href", "Pages/products_details/Product_page.html?id=" + newArrivalbook[i]["bookid"]);

    // create a img tag 

    const img = document.createElement("img");
    img.setAttribute("src", newArrivalbook[i]["bookImage"]);
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
    p_tag.innerText = newArrivalbook[i]["bookName"];


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
    small_tag.innerText = "₹" + newArrivalbook[i]["DiscountPrice"];

    // Create  a h3 tag 

    const h_3 = document.createElement("h3");
    h_3.innerText = "₹" + newArrivalbook[i]["originalPrice"];
    h_3.append(small_tag);

    // Create a anchor tag 

    const a_3 = document.createElement("a");
    a_3.setAttribute("href", "Pages/products_details/Product_page.html?id=" + newArrivalbook[i]["bookid"]);

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
    book_filter_div.append(wish_icons)
    document.querySelector("div.books2").append(book_filter_div);




    // ADD TO WISHLIST PAGE LOGIC

    // let cart = document.getElementById("wishlist_icons");
    icon_i.addEventListener("click", (e) => {

        // get the book for this book is already there in the wishlist
        // let book_id = products_details[i]["bookid"];
        // console.log(book_id)

        let check;

        user_wish_list.find(f => {
            // console.log(check);
            if (f["Book_id"] == newArrivalbook[i]["bookid"] && active_user == f["user_email"]) {
                check = 1;

            }
            else {
                check = 0;
            };

        })

        if (check == 1) {
            // for (let j = 0; j < user_wish_list.length; j++) {
            //     if (book_id == user_wish_list[j]["Book_id"]) {
            //         user_wish_list.splice(j, 1);
            //         localStorage.setItem("wishlist", JSON.stringify(user_wish_list));
            //     };
            // };
            alert("This product is Already there in you're Cart");
        }
        else {
            let user_wishlist = {};
            user_wishlist["user_email"] = active_user,
                user_wishlist["Book_image"] = newArrivalbook[i]["bookImage"],
                user_wishlist["Book_title"] = newArrivalbook[i]["bookName"],
                user_wishlist["DiscountPrice"] = newArrivalbook[i]["DiscountPrice"],
                user_wishlist["originalPrice"] = newArrivalbook[i]["originalPrice"],
                user_wishlist["author_content"] = newArrivalbook[i]["author_content"],
                user_wishlist["Book_id"] = newArrivalbook[i]["bookid"]

            user_wish_list.push(user_wishlist);
            localStorage.setItem("wishlist", JSON.stringify(user_wish_list));
            alert("Product is Added");
        };
    });
    // This is for add to cart
    a_2.addEventListener("click", () => {
        // let book_id = products_details[i]["bookid"];
        let check;
        user_cart.find(f => {
            if (f["Book_id"] == newArrivalbook[i]["bookid"] && active_user == f["user_email"]) {
                return check = 1;
            }
            else {
                return check = 0;
            };
        });
        if (check == 1) {
            // for (let j = 0; j < user_cart.length; j++) {
            //     if (book_id == user_cart[j]["Book_id"]) {
            //         user_cart.splice(j, 1);
            //         localStorage.setItem("user_cart", JSON.stringify(user_cart));
            //     };
            // };
            alert("This product is Already there in you're Wishlist");
        }
        else {
            let user_carlist = {};
            user_carlist["user_email"] = active_user,
                user_carlist["Book_image"] = newArrivalbook[i]["bookImage"],
                user_carlist["Book_title"] = newArrivalbook[i]["bookName"],
                user_carlist["DiscountPrice"] = newArrivalbook[i]["DiscountPrice"],
                user_carlist["originalPrice"] = newArrivalbook[i]["originalPrice"],
                user_carlist["author_content"] = newArrivalbook[i]["author_content"],
                user_carlist["Book_id"] = newArrivalbook[i]["bookid"],
                user_carlist["qty"] = 1

            user_cart.push(user_carlist);
            localStorage.setItem("user_cart", JSON.stringify(user_cart));
            alert("Product is Added");
        };
    });
    // const wish = JSON.parse(localStorage.getItem("wishlist"))
    // wish_count = wish.length
    // document.getElementById("wish_count").innerText = wish_count;
};


// Below the code for fiction book

for (let i = 0; i < fictionBook.length; i++) {

    // Create a another div

    let book_filter_div = document.createElement("div");
    book_filter_div.setAttribute("class", "Book_filter");

    // Create a wishlist count
    let wish_icons = document.createElement("div");
    wish_icons.setAttribute("id", "wishlist_icons");
    wish_icons.setAttribute("class", "wish_icons");


    let icon_i = document.createElement("i")
    icon_i.setAttribute("class", "fa-sharp fa-regular fa-heart icon_wishlist");
    icon_i.setAttribute("id", "wish_icon");
    wish_icons.prepend(icon_i)
    // console.log(icon_i);
    // console.log(wish_icons);

    const book_img_div = document.createElement("div");
    book_img_div.setAttribute("class", "book-img");

    // create a another div

    const trend_book_div = document.createElement("div");
    trend_book_div.setAttribute("class", "trend_book");
    book_img_div.append(trend_book_div);

    // create a anchor tag 

    const a_1 = document.createElement("a");
     a_1.setAttribute("href", "Pages/products_details/Product_page.html?id=" + fictionBook[i]["bookid"]);

    // create a img tag 

    const img = document.createElement("img");
    img.setAttribute("src", fictionBook[i]["bookImage"]);
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
    p_tag.innerText = fictionBook[i]["bookName"];


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
    small_tag.innerText = "₹" + fictionBook[i]["DiscountPrice"];

    // Create  a h3 tag 

    const h_3 = document.createElement("h3");
    h_3.innerText = "₹" + fictionBook[i]["originalPrice"];
    h_3.append(small_tag);

    // Create a anchor tag 

    const a_3 = document.createElement("a");
    a_3.setAttribute("href", "Pages/products_details/Product_page.html?id=" + fictionBook[i]["bookid"]);

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
    book_filter_div.append(wish_icons)
    document.querySelector("div.books3").append(book_filter_div);




    // ADD TO WISHLIST PAGE LOGIC

    // let cart = document.getElementById("wishlist_icons");
    icon_i.addEventListener("click", (e) => {

        // get the book for this book is already there in the wishlist
        // let book_id = products_details[i]["bookid"];
        // console.log(book_id)

        let check;

        user_wish_list.find(f => {
            // console.log(check);
            if (f["Book_id"] == fictionBook[i]["bookid"] && active_user == f["user_email"]) {
                check = 1;

            }
            else {
                check = 0;
            };

        })

        if (check == 1) {
            // for (let j = 0; j < user_wish_list.length; j++) {
            //     if (book_id == user_wish_list[j]["Book_id"]) {
            //         user_wish_list.splice(j, 1);
            //         localStorage.setItem("wishlist", JSON.stringify(user_wish_list));
            //     };
            // };
            alert("This product is Already there in you're Cart");
        }
        else {
            let user_wishlist = {};
            user_wishlist["user_email"] = active_user,
                user_wishlist["Book_image"] = fictionBook[i]["bookImage"],
                user_wishlist["Book_title"] = fictionBook[i]["bookName"],
                user_wishlist["DiscountPrice"] = fictionBook[i]["DiscountPrice"],
                user_wishlist["originalPrice"] = fictionBook[i]["originalPrice"],
                user_wishlist["author_content"] = fictionBook[i]["author_content"],
                user_wishlist["Book_id"] = fictionBook[i]["bookid"]

            user_wish_list.push(user_wishlist);
            localStorage.setItem("wishlist", JSON.stringify(user_wish_list));
            alert("Product is Added");
        };
    });
    // This is for add to cart
    a_2.addEventListener("click", () => {
        // let book_id = products_details[i]["bookid"];
        let check;
        user_cart.find(f => {
            if (f["Book_id"] == fictionBook[i]["bookid"] && active_user == f["user_email"]) {
                return check = 1;
            }
            else {
                return check = 0;
            };
        });
        if (check == 1) {
            // for (let j = 0; j < user_cart.length; j++) {
            //     if (book_id == user_cart[j]["Book_id"]) {
            //         user_cart.splice(j, 1);
            //         localStorage.setItem("user_cart", JSON.stringify(user_cart));
            //     };
            // };
            alert("This product is Already there in you're Wishlist");
        }
        else {
            let user_carlist = {};
            user_carlist["user_email"] = active_user,
                user_carlist["Book_image"] = fictionBook[i]["bookImage"],
                user_carlist["Book_title"] = fictionBook[i]["bookName"],
                user_carlist["DiscountPrice"] = fictionBook[i]["DiscountPrice"],
                user_carlist["originalPrice"] = fictionBook[i]["originalPrice"],
                user_carlist["author_content"] = fictionBook[i]["author_content"],
                user_carlist["Book_id"] = fictionBook[i]["bookid"],
                user_carlist["qty"] = 1

            user_cart.push(user_carlist);
            localStorage.setItem("user_cart", JSON.stringify(user_cart));
            alert("Product is Added");
        };
    });
    // const wish = JSON.parse(localStorage.getItem("wishlist"))
    // wish_count = wish.length
    // document.getElementById("wish_count").innerText = wish_count;
};

const wish = JSON.parse(localStorage.getItem("wishlist"))
wish_count = wish.length
document.getElementById("wish_count").innerText = wish_count;

// BELOWE THE CONTENT THE COUNT THE WIHSLIST 

const btn = document.querySelectorAll(".wish_icons")
// console.log(btn);

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        location.reload();
    });
};












