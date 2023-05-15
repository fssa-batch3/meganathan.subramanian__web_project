if (localStorage.getItem("userslist")) {

}

else {
    localStorage.setItem("userslist", JSON.stringify([
        {
            Phone_number
                :
                "8778719738",
            address
                :
                "59/123 Vivenkanda street,vadapalani,chennai-00000\"\n",
            confirm_password
                :
                "Mega@123",
            email
                :
                "meganathan212003@gmail.com",
            password
                :
                "Mega@123",
            user_city
                :
                "Cheannai",
            user_name
                :
                "Dinesh",
            user_pincode
                :
                "60081",
            user_state
                :
                "Tamilnadu",
        }

    ]));
}

if (localStorage.getItem("Book_details")) {

}

else {
    localStorage.setItem("Book_details", JSON.stringify([
        {
            
        }
        

    ]));
}
if (localStorage.getItem("user_cart")) {

}
else {
    localStorage.setItem("user_cart", JSON.stringify([
        {
            Book_id
                :
                27,
            Book_image
                :
                "https://m.media-amazon.com/images/I/617UBjNbf9L.jpg",
            Book_title
                :
                "ponniyin selvan book for tamil",
            DiscountPrice
                :
                "200",
            originalPrice
                :
                "100",
            user_email
                :
                "\"meganathan212003@gmail.com\"",
        },
        {
            Book_id
                :
                19,
            Book_image
                :
                "https://m.media-amazon.com/images/I/516VyKCKi-L.jpg",
            Book_title
                :
                "Eat that frog Tamil edition",
            DiscountPrice
                :
                "200",
            originalPrice
                :
                "100",
            user_email
                :
                "\"meganathan212003@gmail.com\"",
        },
        {
            Book_id
                :
                19,
            Book_image
                :
                "https://m.media-amazon.com/images/I/516VyKCKi-L.jpg",
            Book_title
                :
                "Eat that frog Tamil edition",
            DiscountPrice
                :
                "200",
            originalPrice
                :
                "100",
            user_email
                :
                "\"dinesh@gmail.com\"",
        },
        {
            Book_id
                :
                1,
            Book_image
                :
                "https://m.media-amazon.com/images/I/71H8-WDVR9L.jpg",
            Book_title
                :
                " Happy is the Goal Tamil Edition Book",
            DiscountPrice
                :
                "200",
            originalPrice
                :
                "100",
            user_email
                :
                "\"dinesh@gmail.com\""
        }
    ]));
}
if (localStorage.getItem("wishlist")) {

}
else {
    localStorage.setItem("wishlist", JSON.stringify([
        {
            Book_id
                :
                27,
            Book_image
                :
                "https://m.media-amazon.com/images/I/617UBjNbf9L.jpg",
            Book_title
                :
                "ponniyin selvan book for tamil",
            DiscountPrice
                :
                "200",
            originalPrice
                :
                "100",
            user_email
                :
                "\"dinesh@gmail.com\""
        }
    ]
    )
    );
};
if (localStorage.getItem("activeUser")) {

}
else {
    localStorage.setItem("activeUser", JSON.stringify([{
        activeUser: "dinesh@gmail.com"
    }]))
}


