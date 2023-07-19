function Product(props) {
    return(
        <div>
        <h3>{props.name}</h3>
            <p>Price: {props.price}</p>
            <p>Image:{props.image}</p>
        </div>
    );
};

export default Product; 