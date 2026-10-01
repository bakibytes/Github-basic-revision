import AmazonCard from "./AmazonCard";
import './AmazonList.css'
export default function AmazonCardList() {
    return (
        <div className="AmazonList">
            <AmazonCard newPrice={999} title={"Logitech MX Master 3S"} features={["8000 DPI", "5 Programmable Buttons"]} price={8999} imageDetails={{ src: "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/259521_0_cfrb7g.png", alt: "Mojuse Photo" }} />
            <AmazonCard newPrice={1200} title={"Apple Pencil (2nd Gen)"} features={["Intutive Touch Surface", "Designed for iPad Pro"]} price={9199} imageDetails={{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalVZq50T4SYGN-1K9Vdi7XNNUR0VJ8PMvyRVqu5APmw&s=10", alt: "Apple Pencil" }} />
            <AmazonCard newPrice={1500} title={"Zebronics Zeb-Transformer"} features={["Intutive Touch Surface", "Designed for iPad Pro"]} price={899} imageDetails={{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxm9bTzmCekheAcam9X4bOtDS2fPrNLy0NKsP-JqqHhQ&s=10", alt: "Keyboard" }} />
            <AmazonCard newPrice={99} title={"Portronics Toad 23 "} features={["Wireless Mouse 2.5GHz", "Optical Orientation"]} price={278} imageDetails={{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuFKn3gpHsNk-0-uYW1vMaOWX_2v4DMZxbx6iKNUUmQ&s=10", alt: 'Mosue Photo' }} />
        </div>
    )
}