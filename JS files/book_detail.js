// create a profile details page using js 


// Create a div 

const product_div = document.createElement("div");
product_div.setAttribute("class","products");

// Create a another div 
 
const Product_img_div = document.createElement("div");
Product_img_div.setAttribute("class","product_img");
product_div.append(Product_img_div);

// Create a img 

const img1 = document.createElement("img");
img1.setAttribute("src",'https://m.media-amazon.com/images/I/41jOqQ0X7DL.jpg');
img1.setAttribute('alt','attitude is everything books');
Product_img_div.append(img1);

// Create a anthor div
 const product_details_div = document.createElement("div");
 product_details_div.setAttribute("class","product_details");

// Create anchor tag 
const a1 = document.createElement("a");
a1.setAttribute("href","../../index.html");

// Create a h1 tag 
const h1 = document.createElement("h1")
h1.innerText = "Attitude is Everything by-Jeff Keller Change Your Mindest Change Your Attitude.";

// Create a h4 tag 
const h4 = document.createElement("h4");
h4.innerText = "&#8377;150.00";

// Create a Small tag 
const small = document.createElement("s");
small.innerText = "&#8377;200.00Off";
h4.append(small);

// Create a form tag 
const form = document.createElement("form");

// Create label tag 
const label = document.createElement("label");
form.append(label);

// Create input tag 
const inpt = document.createElement("input");
inpt.setAttribute("type","number");
inpt.setAttribute("value","1");
label.append(inpt);

// create a another div 
const cart_div =  document.createElement("div");
cart_div.setAttribute("class","btn-cart");

// Create a anchor tag 
const a2 = document.createElement("a");
a2.setAttribute("class","btn"); 
a2.setAttribute("href","../../Pages/orders/Wish_list.html");

// Create a anchor tag 
const a3 = document.createElement("a");
a3.setAttribute("class","btn");
a3.setAttribute("href","../../Pages/orders/Cart_list.html");
cart_div.append(a2,a3);

// Create h2 tag 
const h2 = document.createElement("h2");
h2.innerText  = "Book Details";

// Create a P tag 
const p_tag = document.createElement("p");
p_tag.innerText = "Attitude is an all-encompassing term that defines your outlook and approach to life.It includes your inner thoughts and outward experssions. In the end, attitude determines everything you say and so and what you say and do determine your success.";

// Create a hr tag 
const hr_tag = document.createElement("hr");


// Append all the div and tags 
product_div.append(product_details_div);
product_details_div.append(a1);
product_details_div.append(h1);
product_details_div.append(h4);
product_details_div.append(form);
product_details_div.append(cart_div);
product_details_div.append(h2);
product_details_div.append(p_tag);
document.querySelector("main").append(product_div);



// AUTHOR SECTION


// Create a another div about the author 

// const about_author_div = document.createElement("div");
// about_author_div.setAttribute( "class","about-author");

// Create a h2 element 

const h2_2 = document.createElement("h2");
h2_2.innerHTML = "About the Author :";

// Create a row div 
const row = document.createElement("div");
row.setAttribute("class","row1");

// Create a another div author-img 
const author_img_div = document.createElement("div");
author_img_div.setAttribute("class","author-img");

// Create a author img 

const author_img = document.createElement("img");
author_img.setAttribute("src","../../assets/images/jeff keller.jfif");
author_img.setAttribute("alt","author-img");

//append the content
author_img_div.append(author_img);

//Create a author content div 

const author_content = document.createElement("div");
author_content.setAttribute("class","author-content");

// Create a p tag 
const P_tag2 = document.createElement("p");
P_tag2.innerHTML = "Jeffrey Keller, President of Attitude is Everything, Incorporated, works with organizations that want to develop acheivers ans with sales mangeres who want theru people to be more positive jeff is a speaker,seminar leader and writer in the area of motivation and human potential.He delivers his uplifting persentation to businesses,associations and educational instituation Jeff is also an attorney and praticed law for more than ten years before pursing a full time carrer as a speaker and writer. In june 1999,jeff's book,attitude is Everything ,was released by INTI pulblishing & Resourcev Books. This exciting new book consists of 12 lessons on attitude and success. For more than 9 years,Jeff has written the Attitude is Everything Newsletter, which has received high praise from Zig Ziglar and the late Dr. Norman Vincent Peale.";

// append the p tag 
author_content.append(P_tag2);


// append all the div and tags 
// about_author_div.append(h2_2);
// about_author_div.append(row);
row.append(author_img_div);
row.append(author_content);
document.querySelector(".about-author").append(h2_2,row);


// Create a product detail 

const h2_3 = document.createElement("h2");
h2_3.innerHTML = "Product details:"

// Create a book detail div 
const book_detail = document.createElement("div");
book_detail.setAttribute("class","book-detail");

//create a another div col1
const col1 =document.createElement("div");
col1.setAttribute("class","col1");

// Create h3 tag 
const h3_1 = document.createElement("h3");
h3_1.innerHTML = "Publisar Date :";

// Create a span tag 
const span_tag = document.createElement("span");
span_tag.innerHTML = "Augest 2016"

//append the span tag 
h3_1.append(span_tag);

// Create a another h3 tag
const h3_2 = document.createElement("h3");
h3_2.innerHTML = "binding :";

// create a span tag 
const span_tag_2 = document.createElement("span");
span_tag_2.innerHTML = "Paperback";

// append the span tag 
h3_2.append(span_tag_2);

// Create a a another h3 tag 
const h3_3 = document.createElement("h3");
h3_3.innerHTML = "Height";

// Create a another span tag 
const span_tag_3 = document.createElement("span");
span_tag_3.innerHTML = "280mm";

// append the span tag 
h3_3.append(span_tag_3);

// Create a another h3 tag 
const h3_4 = document.createElement("h3");
h3_4.innerHTML = "No of Pages :"

// Create a span tag 
const span_tag_4 = document.createElement("span");
span_tag_4.innerHTML = "384";

// Append the span tag 
h3_4.append(span_tag_4);

// Create a another h3 tag 
const h3_5 = document.createElement("h3");
h3_5.innerHTML = "Series of Title :"

// Create a another span tag 
const span_tag_5 = document.createElement("span");
span_tag_5.innerHTML = "NA";

// append the span tag 
h3_5.append(span_tag_5);

// Create a another h3 tag 
const h3_6 = document.createElement("h3");
h3_6.innerHTML = "Weight :"

// Create a another span tag 
const span_tag_6 = document.createElement("span");
span_tag_6.innerHTML = "288grm";

// append the span tag 
h3_6.append(span_tag_6)

// append all the h3 tag 
col1.append(h3_1);
col1.append(h3_2);
col1.append(h3_3);
col1.append(h3_4);
col1.append(h3_5);
col1.append(h3_6);

// create a another div name col2

const col2 =document.createElement("div");
col2.setAttribute("class","col2");

// Create h3 tag 
const h3_7 = document.createElement("h3");
h3_7.innerHTML = "Publisher Imprint :";

// Create a span tag 
const span_tag_7 = document.createElement("span");
span_tag_7.innerHTML = "Savitha Printers"

//append the span tag 
h3_7.append(span_tag_7);

// Create a another h3 tag
const h3_8 = document.createElement("h3");
h3_8.innerHTML = "Depth:";

// create a span tag 
const span_tag_8 = document.createElement("span");
span_tag_8.innerHTML = "25";

// append the span tag 
h3_8.append(span_tag_8);

// Create a a another h3 tag 
const h3_9 = document.createElement("h3");
h3_9.innerHTML = "Language";

// Create a another span tag 
const span_tag_9 = document.createElement("span");
span_tag_9.innerHTML = "Yes";

// append the span tag 
h3_9.append(span_tag_9);

// Create a another h3 tag 
const h3_10 = document.createElement("h3");
h3_10.innerHTML = "Returnable :"

// Create a span tag 
const span_tag_10 = document.createElement("span");
span_tag_10.innerHTML = "Yes";

// Append the span tag 
h3_10.append(span_tag_10);

// Create a another h3 tag 
const h3_11 = document.createElement("h3");
h3_11.innerHTML = "Spin Width:"

// Create a another span tag 
const span_tag_11 = document.createElement("span");
span_tag_11.innerHTML = "28mm";

// append the span tag 
h3_11.append(span_tag_11);

// Create a another h3 tag 
const h3_12 = document.createElement("h3");
h3_12.innerHTML = "width :"

// Create a another span tag 
const span_tag_12 = document.createElement("span");
span_tag_12.innerHTML = "135mm";

// append the span tag 
h3_12.append(span_tag_12)

// append all the h3 tag 
col2.append(h3_7);
col2.append(h3_8);
col2.append(h3_9);
col2.append(h3_10);
col2.append(h3_11);
col2.append(h3_12);

// append the div tag 
book_detail.append(col1);
book_detail.append(col2);
document.querySelector(".book-details").append(h2,book_detail);

