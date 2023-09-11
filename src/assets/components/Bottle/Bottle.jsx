import './Bottle.css'

const Bottle = ({bottle}) => {

    const {name, img, price} = bottle

    return (
        <div className="bottle">
            <h3>Bottle : {name}</h3>
            <img src={img} alt={name} />
            <p>Price : ${price}</p>
            <button>Add to cart</button>
        </div>
    );
};

export default Bottle;