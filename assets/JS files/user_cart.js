// // Write the json for create a table


// // create a table
// let table = document.createElement("table");
// table.setAttribute("aria-label","Create a Heading");

// // create a table row

// let tr1 = document.createElement("tr");

// // Create a table head
// let th1 = document.createElement("th");
// th1.innerText = "S.NO";

// let th2 = document.createElement("th");
// th2.innerText = "Products";

// let th3 = document.createElement("th");
// th3.innerText = "Quantity";

// let th4 = document.createElement("th");
// th4.innerText = "Subtotal";

// // append the first tr
// tr1.append(th1,th2,th3,th4);


// // Create a another table row 2
// let tr2 = document.createElement("tr");

// // Create a Table data 
// let td1 = document.createElement("td");
// td1.innerText = "1";

// // Create a another td
// let td2 = document.createElement("td");

// // Create a another div called book_info
// let book_info_div = document.createElement("div");
// book_info_div.setAttribute("class","book_info");

// // Create a img tag 
// let img1 = document.createElement("img");
// img1.setAttribute("src","../../assets/images/attitude is everthing.webp");
// img1.setAttribute("alt","Attitude is everything");

// // Create a another div called div

// let div_div = document.createElement("div");
// div_div.setAttribute("class","div");

// // Create a p tag
// let p_tag1 = document.createElement("p");
// p_tag1.innerText = "Atomic Habits by James Clear";

// // create a small tag 
// let small1 = document.createElement("small");
// small1.innerText = " Price : 150";

// // create a br tag
// let br1 = document.createElement("br");

// // Create a anchor tag
// let a1_tag = document.createElement("a");
// a1_tag.innerText = " Remove";

// // append the div
// div_div.append(p_tag1,small1,br1,a1_tag);
// book_info_div.append(img1,div_div);
// td2.append(book_info_div);

// // create a td tag
//  let td3 = document.createElement("td");
//  td3.setAttribute("type","number");
//  td3.setAttribute("value","1");

//  // create a another td tag
//  let td4 = document.createElement("td");
//  td4.innerText = " ₹+120.00";

//  // append the all td
// tr2.append(td1,td2,td3,td4);

// table.append(tr1,tr2);

// document.querySelector(".orders").append(table);


let user_cart = JSON.parse(localStorage.getItem("user_cart"));
let output="";
let addition=0;
user_cart.forEach(item => {
    console.log(item)
    output += `<tr>
    <td>"${item.Book_id}"</td>
    <td>
        <div class="book_info">
            <img src="${item.Book_image}" alt="Attitude is everthing">
            <div class="div">
                <p>${item.Book_title}</p>
                <small id="cost">${item.DiscountPrice}</small>
                <br>
                <a href="#">Remove</a>
            </div>
        </div>
    </td>
    <td><input type="number" value="1"></td>
    <td>${item.originalPrice}</td>
</tr>
  </tr>`
 addition += Number(item.originalPrice);


    document.getElementById("table_body").innerHTML = output;

});
let cost =document.getElementById("price");
cost.innerHTML=addition;
console.log(addition)