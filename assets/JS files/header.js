const root = window.location.origin;

const Afterlogin = `<div class="head" id="head">
<div class="nav-logo">
    <div class="logo">
        <a href="${root}/index.html"><img src="${root}/assets/images/books_store-removebg-preview.png" alt="webiste logo"
                width="190"></a>
    </div>
    <div class="navi2">
        <ol class="lang">
            <li><a href="#">Lang <i class=" fa-solid fa-caret-down"></i></a>
                <ol class="Lang_option">
                    <li> <a href="#">English</a></li>
                    <li> <a href="#">Tamil</a></li>
                </ol>
            </li>
        </ol>
        <ul class="fonts">
            <li> <a href="${root}/Pages/orders/Wish_list.html">
                    <i class="fa-regular fa-heart"></i>
                </a></li> <a href="${root}/Pages/orders/Wish_list.html"><span id="wish_count">
                </span></a>
            <li> <a href="${root}/Pages/orders/Cart_list.html"> <i class="fa-solid fa-cart-shopping"></i> </a></li>
        </ul>
    </div>
</div>

<div class="search_bar">
    <input type="text" placeholder="Search By Author Name Or Book name" id="Search_book">
</div>

<div class="container">
    <div class="nav">
        <div class="navi1">
            <ul>
                <li><a href="${root}/Pages/Books/self_help.html"><img src="${root}/assets/images/search books.png"
                            alt="search books img"></a></li>
            </ul>
        </div>
    </div>
</div>
</div>

<div class="navigation">
<ul>
    <li> <a href="${root}/index.html">Home</a></li>
    <li class="explore-menu"> <a href="">Categories<i
                class="fa-solid fa-caret-down"></i></a>
        <ol class="Explore-option">
            <li class="Arts-option"><a href="${root}/Pages/Books/book_category.html" class="Categories">Arts and Biography</a>
                <div class="arts-menu">
                    
                </div>
            </li>
            <li><a href="#" class="Categories">Fiction Books</a></li>
            <li><a href="${root}/Pages/Books/book_category.html" class="Categories">Law</a></li>
            <li><a href="${root}/Pages/Books/book_category.html" class="Categories">Medicine</a></li>
            <li><a href="${root}/Pages/Books/book_category.html" class="Categories">Self Help book</a></li>
            <li><a href="#"class="Categories" >Life Style</a></li>
            <li><a href="#" class="Categories">Science And Maths</a></li>
        </ol>
    </li>
    <li><a href="${root}/Pages/Books/Combo book.html">Combo</a></li>
    <li><a href="${root}/Customer-feedback.html">Customer Feedback</a></li>
    <li class="profile-menu"><a href="">My Account <i class="fa-solid fa-user"></i></a>
        <div class="profile">
            <ol>
                <li><a href="${root}/Pages/Account/edit-profile.html"><i class="fa-solid fa-pen-to-square"></i>Edit
                        Profile</a></li>
                <li><a href="#"><i class="fa-solid fa-message"></i>Inbox</a> </li>
                <li><a href="#"><i class="fa-solid fa-bars"></i>Setting</a></li>
                <li id="log-out"><a href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</a></li>
            </ol>
        </div>
    <li><a href="${root}/Pages/Seller_pages/Seller_login.html">Seller</a></li>
    </li>
</ul>
</div>`


const Beforelogin = `<div class="head" id="head">
<div class="nav-logo">
    <div class="logo">
        <a href="${root}/index.html"><img src="${root}/assets/images/books_store-removebg-preview.png" alt="webiste logo"
                width="190"></a>
    </div>
    <div class="navi2">
        <ol class="lang">
            <li><a href="#">Lang <i class=" fa-solid fa-caret-down"></i></a>
                <ol class="Lang_option">
                    <li> <a href="#">English</a></li>
                    <li> <a href="#">Tamil</a></li>
                </ol>
            </li>
        </ol>
        <ul class="fonts">
            <li> <a href="${root}/Pages/Account/signup.html">
                    <i class="fa-regular fa-heart" id="wishList"></i>
                </a></li> <a href="${root}/Pages/orders/Wish_list.html"><span id="wish_count"></span></a>
            <li> <a href="${root}/Pages/orders/Cart_list.html"> <i class="fa-solid fa-cart-shopping"></i> </a></li>
        </ul>
    </div>
</div>

<div class="search_bar">
    <input type="text" placeholder="Search By Author Name Or Book name" id="Search_book">
</div>

<div class="container">
    <div class="nav">
        <div class="navi1">
            <ul>
                <li><a href="${root}/Pages/Books/self_help.html"><img src="${root}/assets/images/search books.png"
                            alt="search books img"></a></li>
            </ul>
        </div>
    </div>
</div>
</div>
<div class="navigation">
<ul>
    <li> <a href="${root}/index.html">Home</a></li>
    <li class="explore-menu"> <a href="">Categories<i
                class="fa-solid fa-caret-down"></i></a>
        <ol class="Explore-option">
            <li class="Arts-option"><a href="${root}/Pages/Books/book_category.html">Arts and Biography</a>
                
            </li>
            <li><a href="#">Fiction Books</a></li>
            <li><a href="${root}/Pages/Books/book_category.html">Law</a></li>
            <li><a href="${root}/Pages/Books/book_category.html">Medicine</a></li>
            <li><a href="${root}/Pages/Books/book_category.html">Self Help book</a></li>
            <li><a href="${root}/Pages/Books/book_category.html">Life Style</a></li>
            <li><a href="${root}/Pages/Books/book_category.html">Science And Maths</a></li>

        </ol>
    </li>
    <li><a href="${root}/Pages/Books/Combo book.html">Combo</a></li>
    <li><a href="">Best Seller</a></li>
    <li><a href="${root}/Customer-feedback.html">Customer Feedback</a></li>
    <li class="profile-menu"><a href="">My Account <i class="fa-solid fa-user"></i></a>
        <div class="profile">
            <ol>
                <li><a href="${root}/Pages/Account/edit-profile.html"><i class="fa-solid fa-pen-to-square"></i>Edit
                        Profile</a></li>
                <li><a href="#"><i class="fa-solid fa-message"></i>Inbox</a> </li>
                <li><a href="#"><i class="fa-solid fa-bars"></i>Setting</a></li>
                <li id="log-out"><a href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</a></li>
            </ol>
        </div>
        <li id="login"><a href="${root}/Pages/Account/login.html">Login</a></li>
    <li><a href="${root}/Pages/Account/login.html">Seller</a></li>
    </li>
</ul>
</div>`
// Below have to write function
let user_unique = JSON.parse(localStorage.getItem("activeUser"));

if (user_unique) {
    document.body.insertAdjacentHTML("afterbegin", Afterlogin)
}
else {
    document.body.insertAdjacentHTML("afterbegin", Beforelogin)
}


// wislist icons for if user didn't login

// let user_wish = document.getElementById("wishList").addEventListener("click",(e)=>{
//     if(activeUser == false ){
//         alert("Please Login")
//         window.location.href = "/Pages/Account/login.html"; 
//     }
// })

// Logout
let activeUser = JSON.parse(localStorage.getItem("activeUser"));
let log_out = document.getElementById("log-out");
log_out.addEventListener("click", (e) => {
    const log_Out = delete active_user;
    localStorage.setItem("activeUser",JSON.stringify(log_Out) );
    window.location.href = "/Pages/Account/login.html";
    alert("Thank you visiting our website");
});


if(activeUser==false){
    let myaccount=document.querySelector(".profile-menu")
    myaccount.style.display="none"
}


// Navigate to the another page

// let book_details = JSON.parse(localStorage.getItem("Book_details"));
let categoryname;
let catgories = document.querySelectorAll(".Categories");
// console.log(cat);
catgories.forEach((data) => {
    data.addEventListener("click", () => {
        categoryname = data.innerText;
        //   alert(categname);
        data.setAttribute("href", `./Pages/Books/book_category.html?category=${categoryname}`);
    })
})


