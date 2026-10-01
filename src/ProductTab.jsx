import Product from './Product.jsx'

function ProductTab() {
    return (
        <>
            <Product title="phone" price={30000} />
            <Product title='laptop' price="120000" />
            <Product title="pencil" />
        </>
    )
}

export default ProductTab;