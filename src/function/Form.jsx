function submitForm(event) {
    event.preventDefault(); 
    console.log("Form was submitted")
    console.log(event)
}
export default function From() {
    return (
        <form action="">
            <input type="text" placeholder="Enter username" id="username" />
            <button onClick={submitForm}>Submit</button>
        </form>
    )
}