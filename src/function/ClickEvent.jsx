function clickMe() {
    console.log("Buttion clicked")
}


export default function ClickEvent() {
    return (
        <button onClick={clickMe}>Click Me</button>
    )
}