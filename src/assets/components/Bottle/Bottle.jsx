import './Bottle.css'

const Bottle = ({bottle, handleAddCart}) => {

    const {name, img, price} = bottle

    return (
        <div className="bottle">
            <h4>Bottle : {name}</h4>
            <img src={img} alt={name} />
            <p>Price : ${price}</p>
            <button onClick={() => handleAddCart(bottle)} className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default Bottle;