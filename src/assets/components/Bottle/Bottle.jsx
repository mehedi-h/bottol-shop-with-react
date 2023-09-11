import './Bottle.css'

const Bottle = ({bottle, handleAddCart}) => {

    const {name, img, price} = bottle

    return (
        <div className="bottle">
            <h3>Bottle : {name}</h3>
            <img src={img} alt={name} />
            <p>Price : ${price}</p>
            <button onClick={() => handleAddCart(bottle)}>Add to cart</button>
        </div>
    );
};

export default Bottle;