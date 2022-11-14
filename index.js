let cart = {
    tovar1: {
        number: 0,
        price: 1000
    },

    tovar2: {
        number: 0,
        price: 300
    }
}

document.onclick = event => {
    console.log(event.target.classList);
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id)
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id)
    }
    countPrice()
}
// увеличение количества товаров
const plusFunction = id => {
    cart[id].number++;
    renderCart();
}
// уменьшение количества товарок
const minusFunction = id => {
    if (cart[id].number <= 0) {
        renderCart(id);
        return true;
    }
    cart[id].number--;
    renderCart();
}

// удаление товаров из коризины
const deleteFunction = id => {
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}
renderCart();

const countPrice = () => {
    let totalPrice = (cart.tovar1.number * cart.tovar1.price) + (cart.tovar2.number * cart.tovar2.price)
    console.log(totalPrice);
}