function Activity({ username, textColor }) {
    let style = {
        color: textColor,
    }
    return (
        <>
            <h2 style={style}>Hello {username}</h2>
        </>
    )
}

export default Activity;