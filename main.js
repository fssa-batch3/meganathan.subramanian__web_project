if (localStorage.getItem("userslist")) {

}


else {
    localStorage.setItem("userslist", JSON.stringify([
        {
            confirm_password
                :
                "Meganathan212003@gmail.com",
            email
                :
                "meganathan212003@gmail.com",
            name
                :
                "meganathan",
            password
                :
                "Meganathan212003@gmail.com",
            user_name
                :
                "dinesh"
        }

    ]));
}

if (localStorage.getItem("Book_details")) {

}

else {
    localStorage.setItem("Book_details", JSON.stringify([
        {

            DiscountPrice
                :
                "200",
            bookImage
                :
                "https://m.media-amazon.com/images/I/617UBjNbf9L.jpg",
            bookName
                :
                "ponniyin selvan book for tamil",
            bookid
                :
                27,
            originalPrice
                :
                "100",
            rating
                :
                ""
        }
    ]));
}





