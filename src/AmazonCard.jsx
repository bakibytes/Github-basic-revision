import './AmazonCard.css'
export default function AmazonCard({ title, features, price, imageDetails, newPrice }) {
    let featureList = features.map((feature) => {
        return <li>{feature}</li>
    })
    return (
        <div className="AmazonCard">
            <h4>{title}</h4>
            <img src={imageDetails.src} alt={imageDetails.alt} />
            <p className='featureList'>{featureList}</p>
            <div className='price'>
                <li className='oldPrice'>{price} </li>
                <li className='newPrice'> {newPrice} </li>
            </div>
        </div>
    )
}