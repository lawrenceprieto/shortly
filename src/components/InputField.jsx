import "../styles/inputfield.css"

function InputField() {
    return (
        <>
            <div className="input-field-body">
                <div className="input-field">
                    <label htmlFor="link">Shorten It!</label>
                    <input type="text" id="link" 
                        placeholder="Shorten a link here...">
                    </input>
                </div>
            </div>
            <div className="result-list">
                <div className="result-field">
                    <div className="input-text">https://www.frontendmentor.io</div>
                    <div className="result-cont">
                        <div className="input-result">https://rel.ink/k4lKyk</div>
                        <button>Copy</button>
                    </div>
                </div>
                <div className="result-field">
                    <div className="input-text">https://www.frontendmentor.io</div>
                    <div className="result-cont">
                        <div className="input-result">https://rel.ink/k4lKyk</div>
                        <button>Copy</button>
                    </div>
                </div>
                <div className="result-field">
                    <div className="input-text">https://www.frontendmentor.io</div>
                    <div className="result-cont">
                        <div className="input-result">https://rel.ink/k4lKyk</div>
                        <button>Copy</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputField