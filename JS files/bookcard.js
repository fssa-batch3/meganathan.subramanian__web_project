
// write a new code 

const Book_cards = [{
    "image": {
        "source": "https://m.media-amazon.com/images/I/71Rcjb+1yLL.jpg",
        "alt": "Attitude is everything book"
    },
    'title': 'Attitude is Everything  by Jeff',
    'price': 120.00,
    'strike_price': 200,

},
{
    "image": {
        "source": "https://m.media-amazon.com/images/I/71Rcjb+1yLL.jpg",
        "alt": "Attitude is everything book"
    },
    'title': 'Attitude is Everything Written by Jeff',
    'price': 120.00,
    'strike_price': 200,

},
{
    "image": {
        "source": "../assets/images/attitude book.jpg",
        "alt": "Attitude is everything book"
    },
    'title': 'Attitude is Everything Written by Jeff',
    'price': 120.00,
    'strike_price': 200,

},
{
    "image": {
        "source": "../assets/images/attitude book.jpg",
        "alt": "Attitude is everything book"
    },
    'title': 'Attitude is Everything Written by Jeff',
    'price': 120.00,
    'strike_price': 200,

},
{
    "image": {
        "source": "../assets/images/attitude book.jpg",
        "alt": "Attitude is everything book"
    },
    'title': 'Attitude is Everything Written by Jeff',
    'price': 120.00,
    'strike_price': 200,

},
{
    "image": {
        "source": "../assets/images/attitude book.jpg",
        "alt": "Attitude is everything book"
    },
    'title': 'Attitude is Everything Written by Jeff',
    'price': 120.00,
    'strike_price': 200,

},
{
    "image": {
        "source": "../assets/images/attitude book.jpg",
        "alt": "Attitude is everything book"
    },
    'title': 'Attitude is Everything Written by Jeff',
    'price': 120.00,
    'strike_price': 200,

},
{
    "image": {
        "source": "../assets/images/attitude book.jpg",
        "alt": "Attitude is everything book"
    },
    'title': 'Attitude is Everything Written by Jeff',
    'price': 120.00,
    'strike_price': 200,

},
{
    "image": {
        "source": "../assets/images/attitude book.jpg",
        "alt": "Attitude is everything book"
    },
    'title': 'Attitude is Everything Written by Jeff',
    'price': 120.00,
    'strike_price': 200,

},

]

// create a div 

for (i = 0; i <= 9; i++) {

    const book_img_div = document.createElement("div");
    book_img_div.setAttribute("class", "book-img");

    // create a another div

    const trend_book_div = document.createElement("div");
    trend_book_div.setAttribute("class", "trend_book");
    book_img_div.append(trend_book_div);

    // create a anchor tag 

    const a_1 = document.createElement("a");
    a_1.setAttribute("href", "Pages/products_details/Product_page.html");

    // create a img tag 

    const img = document.createElement("img");
    img.setAttribute("src", Book_cards[i]["image"]["source"]);
    img.setAttribute("alt", Book_cards[i]["image"]["alt"]);
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
    p_tag.innerText = Book_cards[i]["title"];


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
    small_tag.innerText = "180.00";

    // Create  a h3 tag 

    const h_3 = document.createElement("h3");
    h_3.innerText = "120.00";
    h_3.append(small_tag);

    // Create a anchor tag 

    const a_3 = document.createElement("a");
    a_3.setAttribute("href", "Pages/products_details/Product_page.html");

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
    document.querySelector("div.books").append(book_img_div);
    console.log(book_img_div);

}


// Write a Json Code 









