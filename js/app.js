// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
var detailsElement = document.getElementById('details');
detailsElement.addEventListener('click', ShowDetails);
function ShowDetails(){
    alert('Not Available in Hawaii');
}
// 2. Add an event to the div element with the id of 'name1' that will show/hide
// the description ('descrip1') after hovering over Air Jordan II.
var eleName1 = document.getElementById('name1');
var eleDescrip1 = document.getElementById('descrip1');
eleName1.addEventListener('mouseover', ToggleDescrip1);
function ToggleDescrip1(){
    eleDescrip1.style.display = 'block';
    eleName1.onmouseout = function (){
        eleDescrip1.style.display = 'none'
    }
}

// 3. Add an event to the div element with the id of 'name2' that will show/hide 
// the following description after clicking on the element.
// 'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 
// 3 during Michael Jordan's 1987-88 NBA season.'
// You'll need to:
// create a div element with an id of 'descrip2'
// append this element to the div element with the id of 'name2' 
var eleName2 = document.getElementById('name2');
var eleDescrip2 = document.createElement('div');
var showDescrip2 = false;
eleDescrip2.id = 'descrip2';
eleDescrip2.innerHTML = 'The instantly recognizable Jumpman silhouette made its' + 
' debut with the Air Jordan 3 during Michael Jordan\'s 1987-88 NBA season.';
eleName2.appendChild(eleDescrip2);
eleName2.addEventListener('click', ToggleDescrip2);
function ToggleDescrip2(){
    if (showDescrip2 === false){
        eleDescrip2.style.display = 'block';
        showDescrip2 = true;
    } else {
        eleDescrip2.style.display = 'none';
        showDescrip2 = false;
    }
}

//4. Add events to the all the thumbs up icon that will add a count for each time
// the icon is clicked on for any shoe.
var thumbElements = document.getElementsByClassName('far fa-thumbs-up');
var thumbData = [];
for (var i = 0; i < thumbElements.length; i++){
    var dataObj = { 
        icon : thumbElements[i], 
        likeNum : 0,
        likeElement : document.createElement('div')
    };
    thumbElements[i].appendChild(dataObj.likeElement);
    dataObj.likeElement.innerHTML = dataObj.likeNum.toString();
    thumbData.push(dataObj);
}
thumbData.forEach(
    function (obj) {
        obj.icon.addEventListener('click', function(){AddLike(obj)});
    }
)
function AddLike(obj){
    obj.likeNum++;
    console.log(obj.likeNum);
    obj.likeElement.innerHTML = obj.likeNum.toString();
}
//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.
var plusElements = document.getElementsByClassName('far fa-plus-square');
var price4Element = document.getElementById('price4');
console.log(typeof price4Element.innerHTML);
var price4val = Number.parseInt(price4Element.textContent);
console.log(price4val);
plusElements[0].addEventListener('click', IncrementPrice4);
console.log(price4Element.innerHTML);
console.log(price4Element.textContent);
function IncrementPrice4(){
    oldPrice = price4val;
    console.log('IncrementPrice4 called');
    price4val++;
    console.log(price4val.toString());
    price4Element.innerHTML = price4Element.innerHTML.replace(oldPrice.toString(), price4val.toString());
    plusElements[0].addEventListener('click', IncrementPrice4);
}
//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.
var minusElements = document.getElementsByClassName('far fa-minus-square');
var priceEle5 = document.getElementById('price5');
var priceVal5 = Number.parseInt(priceEle5.textContent);
minusElements[0].addEventListener('click', DecrementPrice5);
function DecrementPrice5(){
    var oldPrice = priceVal5;
    priceVal5--;
    priceEle5.innerHTML = priceEle5.innerHTML.replace(
        oldPrice.toString(), priceVal5.toString());
    minusElements[0].addEventListener('click', DecrementPrice5);
}
//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 
// https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805882_2.jpg
var ajXI_image = document.getElementsByClassName('block3')[1].children[0];
var ajXI_imageSrcOriginal = ajXI_image.getAttribute('src');
ajXI_image.addEventListener('mouseover', alterAJXI_image);
function alterAJXI_image(){
    ajXI_image.setAttribute('src', 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805882_2.jpg');
    ajXI_image.onmouseout = function(){ajXI_image.setAttribute('src', ajXI_imageSrcOriginal)};
}

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.
var ajxiiImage = document.getElementsByClassName('block1')[2].children[0];
var ajxiiData = {
    width: (250).toString() + 'px',
    height: (250).toString() + 'px',
    bigWidth: (250 * 1.5).toString() + 'px',
    bigHeight: (250 * 1.5).toString() + 'px'
}
ajxiiImage.style.height = ajxiiData.height;
ajxiiImage.style.width = ajxiiData.width;
function toggleImage(){
    if ((ajxiiImage.style.height === ajxiiData.height) || (ajxiiImage.style.width === ajxiiData.width))
    {
        ajxiiImage.style.height = ajxiiData.bigHeight;
        ajxiiImage.style.width = ajxiiData.bigWidth;
    } 
    else 
    {
        ajxiiImage.style.height = ajxiiData.height;
        ajxiiImage.style.width = ajxiiData.width;
    }
}
ajxiiImage.addEventListener('click', toggleImage);

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.
var priceEle8 = document.getElementById('price8');
var plusEle8 = document.getElementById('oneUp');
var minusEle8 = document.getElementById('oneDown');
plusEle8.addEventListener('click', priceUp);
minusEle8.addEventListener('click', priceDown);
function priceUp(){
    priceEle8.textContent++;
    priceEle8.appendChild(plusEle8);
    priceEle8.appendChild(minusEle8);
}
function priceDown(){
    priceEle8.textContent--;
    priceEle8.appendChild(plusEle8);
    priceEle8.appendChild(minusEle8);
}

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
var ajxxviii_image = document.getElementsByClassName('block3')[2].children[0];
ajxxviii_image.addEventListener('click', cryingJordan)
function cryingJordan(){
    ajxxviii_image.src = 'https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/ccfwgvvfzrrlhno2fb0c.jpg';
}
