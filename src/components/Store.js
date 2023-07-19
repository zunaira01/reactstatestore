import {useState} from "react"
import Product from "./Product";

function Store(){
    // add a productList, and a function to add products using state
const [productList, setProductList]=useState([
    {name: "Gucci", price: 3000, id: 1},
    {name: "Kate Spade", price: 200, id: 2},
    {name: "MK", price: 100, id: 3},
]);

// 1. function to add new products using the ADD product button
// const addProduct=(newProduct)=>{
//     setProductList([...productList, newProduct]);
// }

// Add products to product list using handleInputChange, and handleAddProduct button
const [newProduct, setNewProduct]=useState({
    name: "",
    price: "",
    id: ""
});
// handleChange
const handleInputChange=(event)=>{
    setNewProduct({
...newProduct, [event.target.name]: event.target.value
    });
};
    // handleAddProduct
    const handleAddProduct =()=>{
        if (newProduct.name && newProduct.price) {
            setProductList([...productList, {...newProduct}
            ]);
            setNewProduct({name: "", price:""});
        }
    };

    return (
        <div>
            <h1>My Bag Store</h1>
           {/* 1. <button onClick={() =>
            addProduct({name:"Red Bottoms", price: 500, id: 4})
            }> */}
                {/* Add New Product
            </button> */}

            <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}/>

            <input
            type="text"
            name="price"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={handleInputChange}/>
           
           <button onClick={handleAddProduct}>
            Add New Product
            </button>

            {productList.map((product)=> (
                <Product
                name={product.name}
                price={product.price}
                id={product.id}
                // image={}
                />
            ))}
        </div>
    );
}
export default Store;