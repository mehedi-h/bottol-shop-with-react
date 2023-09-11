import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"
import { addToLS, getStoredCart } from "../../../utilities/LocalStorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then (res => res.json())
        .then (data => setBottles(data))
    }, [])

    useEffect(() => {
        console.log('call the use Effect', bottles.length)
        if (bottles.length > 0) {
            const storedCart = getStoredCart()
            // console.log(storedCart, bottles)
            const savedCart = []
            for (const id of storedCart) {
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart)
        }
    }, [bottles])

    const handleAddCart = bottle => {
        console.log(bottle)
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id)
    } 

    return (
        <div>
            <h2>All Avaiable Bottles : {bottles.length}</h2>
            <Cart cart={cart}></Cart>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddCart={handleAddCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;