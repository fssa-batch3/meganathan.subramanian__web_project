// write a new code 
// Write a Json Code 


// const Book_cards = [{
//     "image": {
//         "source": "https://m.media-amazon.com/images/I/71Rcjb+1yLL.jpg",
//         "alt": "Attitude is everything book"
//     },
//     'title': 'Attitude is Everything  by Jeff',
//     'price': 120.00,
//     'strike_price': 200,

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

for (let i = 0; i < products_details.length; i++) {

    let wish_icons = document.createElement("div");
    wish_icons.setAttribute("id", "wishlist_icons");
    wish_icons.setAttribute("class", "wish_icons");

    let icon_i = document.createElement("i")
    icon_i.setAttribute("class", "fa-sharp fa-regular fa-heart icon_wishlist")
    wish_icons.prepend(icon_i)

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
    img.setAttribute("src", products_details[i]["bookImage"]);
    // img.setAttribute("alt", Book_cards[i]["image"]["alt"]);
    a_1.append(img);

    // Create a another anchor tag 

    const a_2 = document.createElement("a");
    a_2.setAttribute("href", "Pages/orders/Wish_list.html");

    // create a input tag 

    const inpt = document.createElement("input");
    inpt.setAttribute("type", "button");
    inpt.setAttribute("value", "add to cart");
    inpt.setAttribute("class", "add");
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
    p_tag.innerText = products_details[i]["bookName"];


    // Create a New div class name:rating 
    rating_div = document.createElement("div");
    rating_div.setAttribute("class", "rating")


    // Create a Icon tag 
    for (a = 1; a <= 5; a++) {
        icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-star");
        rating_div.append(icon);
    }

    // Create a small tag

    const small_tag = document.createElement("s");
    small_tag.innerText = "₹" + products_details[i]["DiscountPrice"];

    // Create  a h3 tag 

    const h_3 = document.createElement("h3");
    h_3.innerText = "₹" + products_details[i]["originalPrice"];
    h_3.append(small_tag);

    // Create a anchor tag 

    const a_3 = document.createElement("a");
    a_3.setAttribute("href", "Pages/products_details/Product_page.html?id=" + products_details[i]["bookid"]);

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


    // add to cart logic

    // let cart = document.getElementById("wishlist_icons");
    icon_i.addEventListener("click", (e) => {

        let user_wish_list = JSON.parse(localStorage.getItem("wishlist")) ?? [];

        // get the book for this book is already there in the wishlist
        let book_id = products_details[i]["bookid"];

        let check;

        // get the local storage for the active user
        const active_user = localStorage.getItem("activeUser");


        user_wish_list.find(f => {
            // console.log(check);


            if (f["bookid"] == products_details[i]["bookid"] && active_user == f["user_email"]) {
                return check = 1;

            }
            else {
                return check = 0;
            };

        });
        if (check == 1) {
            for (let j = 0; j < user_wish_list.length; j++) {
                if (book_id == user_wish_list[j]["bookid"]) {
                    user_wish_list.splice(j, 1);
                    localStorage.setItem("wishlist", JSON.stringify(user_wish_list));
                };
                alert("This product is deleted");
            };
        }
        else {
            let user_wishlist = {};
            user_wishlist["user_email"] = active_user,
                user_wishlist["Book_image"] = products_details[i]["bookImage"],
                user_wishlist["Book_title"] = products_details[i]["bookName"],
                user_wishlist["DiscountPrice"] = products_details[i]["DiscountPrice"],
                user_wishlist["originalPrice"] = products_details[i]["originalPrice"],
                user_wishlist["author_content"] = products_details[i]["author_content"],
                user_wishlist["Book_id"] = products_details[i]["bookid"]


            user_wish_list.push(user_wishlist);
            localStorage.setItem("wishlist", JSON.stringify(user_wish_list));

        };
    });

};





