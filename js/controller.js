const basket = new Observer(function (id, price) {
    const newItem = document.createElement('div');
    const img = document.createElement('img');
    const itemCode = document.createElement('p');
    const itemPrice = document.createElement('p');

    img.setAttribute('class', 'basket-item__img')
    img.setAttribute('src', './img/product.jpg')
    itemCode.setAttribute('class', 'basket-item__price')
    itemCode.innerHTML = 'Код товара: ' + id;
    newItem.appendChild(img);
    newItem.appendChild(itemCode);
    newItem.appendChild(itemPrice);
    newItem.setAttribute('class', 'basket-item')
    itemPrice.setAttribute('class', 'basket-item__code')
    itemPrice.innerHTML = 'Price: ' + price;

    list.appendChild(newItem);
    productCount.innerHTML= Number(productCount.innerHTML) + 1;
    if(productCount.innerHTML > -1){
        productCount.style.display = 'flex';
    }
});

const modal = new Observer(function (id) {
    let msg = 'Товар ' + id  + " добавлен в корзину";
    addProduct.style.display = 'flex'
    function t(){
        addProduct.style.display = 'none'
    }
    setTimeout(t, 2000);
    addProduct.innerHTML = msg;
});

observable.addObserver(modal);
observable.addObserver(basket);



for (let i = 0; i < lis.length ; i++) {
    lis[i].addEventListener("click", function () {
        let id = this.getAttribute('data-id');
        let price = this.getAttribute('data-price');
        observable.sendMsg(id, price);
    })
}

basketImg.addEventListener("click", function () {
    basket1.style.display = 'block';
});
productCount.addEventListener("click", function () {
    basket1.style.display = 'block';
});

closeBasket.addEventListener("click", function () {
    basket1.style.display = 'none';
});
basket1.addEventListener("click", function (e) {
    e.stopPropagation();
    let el = e.target;
    if(el.classList.contains('basket-full')){
        basket1.style.display = 'none';
    }
});





