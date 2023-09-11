const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartLS = cart => {
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id)
    saveCartLS(cart)
}

export {addToLS}

