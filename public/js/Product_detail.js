var inputField = document.getElementById('inputField');
  var decreaseBtn = document.getElementById('decreaseBtn');
  var increaseBtn = document.getElementById('increaseBtn');

  decreaseBtn.addEventListener('click', function() {
    var currentValue = parseInt(inputField.value);
    if (!isNaN(currentValue)) {
      inputField.value = currentValue - 1;
    }
  });

  increaseBtn.addEventListener('click', function() {
    var currentValue = parseInt(inputField.value);
    
    if (!isNaN(currentValue)) {
      inputField.value = currentValue + 1;
    }
  });


  function openTab(tabName) {
    var i, tabContent, tabBtns;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    tabBtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }
    
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}


document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const product = getProductById(productId);

  if (product) {
    document.getElementById('product-image').innerHTML = `<img src="${product.image}" alt="${product.name}">`;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('price_old').textContent = product.price_old;
  }
});

// Hàm giả lập lấy thông tin sản phẩm dựa trên ID
function getProductById(productId) {
  // Giả sử có một danh sách sản phẩm với thông tin
  const products = [
    { id: '1', name: 'Foster Farms Takeout Crispy Classic', price: '$17.85', price_old:'$19.80', image:'./img/Products/product-1.jpg'},
    
    { id: '2', name: 'Organic Cage Grade A Large Eggs', price: '$21.00', price_old:'$24.00', image:'./img/Products/product-2.jpg'},
    
    { id: '3', name: 'Haagen Caramel Cone Ice Cream Boxed', price: '$22.85', price_old:'$24.80', image:'./img/Products/product-3.jpg'},
    
    { id: '4', name: 'All Natural Style Chicken Meatballs', price: '$23.00', price_old:'$122.00', image:'./img/Products/product-4.jpg'},
    
    { id: '5', name: 'Blue Almonds Lightly Salted Vegetables', price: '$23.85', price_old:'$25.80', save_price:'2000đ',image:'./img/Products/product-5.jpg'},
    
    { id: '6', name: 'Gorton’s Beer Battered Fish Fillets', price: '$23.85', price_old:'$25.80', save_price:'5000đ',image:'./img/Products/product-6.jpg'},
    
    { id: '7', name: 'Seeds of Change Organic Red Rice', price: '$28.85', price_old:'$32.80', save_price:'5000đ',image:'./img/Products/product-7.jpg'},
    
    { id: '8', name: 'Canada Dry Ginger Ale – 2 L Bottle', price: '$32.85', price_old:'$33.80', save_price:'12.000đ',image:'./img/Products/product-8.jpg'},
    
    { id: '9', name: 'Encore Seafoods Stuffed Alaskan', price: '$35.85', price_old:'$37.80', save_price:'21.000đ',image:'./img/Products/product-9.jpg'},
    
    { id: '10', name: 'Angie’s Sweet & Salty Kettle Corn', price: '$48.85', price_old:'$52.80', save_price:'10.000đ',image:'./img/Products/product-10.jpg'},
    // Thêm các sản phẩm khác vào đây
  ];

  return products.find(product => product.id === productId);
}


/* button scroll to top design */
let toTop = document.getElementById('toTop');
toTop.style.display = 'none';
window.addEventListener('scroll', () => {
    if(this.scrollY > 300){
        toTop.style.display = 'block';
    }else{
        toTop.style.display = 'none';
    }
})
toTop.onclick = function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}