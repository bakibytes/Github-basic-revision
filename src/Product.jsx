import './Product.css';

function Product({ title, price = 1 }) {
    let styles = {
        backgroundColor: price>30000?"pink":"lightblue",
        color: "black",
    }
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <p>{price}</p>
            {price > 30000 ? <p>Discount of 5%</p> : null}
        </div>
    )
}
export default Product;