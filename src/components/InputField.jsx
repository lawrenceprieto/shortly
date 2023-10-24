import "../styles/inputfield.css"

function InputField() {
    return (
        <>
            <div className="input-field">
                <label htmlFor="link">Shorten It!</label>
                <input type="text" id="link"></input>
            </div>
        </>
    )
}

export default InputField