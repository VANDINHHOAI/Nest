
// Section Slide
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000);
}


// Shopping cart and Checkout
// OPEN & CLOSE CART
const cartIcon = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector("#cart-close");

closeCart.addEventListener("click", () => {
    cart.classList.remove('cart-active');
});

cartIcon.addEventListener('click', () => {
    cart.classList.add("cart-active");
})


let soluong = 0;
function addCart() {
    soluong++;
    document.querySelector('.quantity').innerHTML = soluong;
}


// Modal
const showMenu = document.querySelector('.js-menu-btn');
const modalMenu = document.querySelector('.js-modal-menu');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

function openMenu () {
    modalMenu.classList.add('open')
}

function closeMenu () {
    modalMenu.classList.remove('open')
}

showMenu.addEventListener('click', openMenu);

modalClose.addEventListener('click', closeMenu);

modalMenu.addEventListener('click', closeMenu);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})



// Section Products detail
// Lắng nghe sự kiện click trên các nút "Mua sản phẩm"
const buyButtons = document.querySelectorAll('.btn-more');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const url = `detail.html?id=${productId}`;
    window.location.href = url;
  });
});


/* button scroll to top design */
let toTop = document.getElementById('toTop');
toTop.style.display = 'none';
window.addEventListener('scroll', () => {
    if(this.scrollY > 500){
        toTop.style.display = 'block';
    }else{
        toTop.style.display = 'none';
    }
})
toTop.onclick = function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Search products
const products = [
    'Foster Farms Takeout Crispy Classic',
    'Organic Cage Grade A Large Eggs',
    'Haagen Caramel Cone Ice Cream Boxed',
    'All Natural Style Chicken Meatballs',
    'Blue Almonds Lightly Salted Vegetables',
    'Gorton’s Beer Battered Fish Fillets',
    'Seeds of Change Organic Red Rice',
    'Canada Dry Ginger Ale – 2 L Bottle',
    'Encore Seafoods Stuffed Alaskan',
    'Angie’s Sweet & Salty Kettle Corn'
];

const productInput = document.getElementById('productInput');
const searchBtn = document.getElementById('searchBtn');

productInput.addEventListener('keyup', function(event) {
    if(event.key === 'Enter') {
        const productName = productInput.value;

        if(products.includes(productName)) {
            window.location.href = `shop.html?search=${productName}`;
        }else {
            alert('Product not found. Please try again.');
        }
    }
});

// Lắng nghe sự kiện nhấn nút "Search"
searchBtn.addEventListener('click', function() {
    // Lấy giá trị nhập vào ô input
    const productName = productInput.value;
    // Kiểm tra xem sản phẩm có tồn tại trong danh sách không
    if (products.includes(productName)) {
        // Chuyển hướng đến trang "categories" với tham số là tên sản phẩm cần tìm kiếm
        window.location.href = `Shop.html?search=${productName}`;
    } else {
        // Hiển thị thông báo rằng sản phẩm không tồn tại trong danh sách
        alert('Product not found. Please try again.');
    }
});