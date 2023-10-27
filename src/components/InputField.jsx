import { useState } from "react";
import "../styles/inputfield.css"

function InputField() {

    const [url, setUrl] = useState('');
    const [error, setError] = useState(false);

    function handlechange(e) {
        setUrl(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(url);
        if (!url) {
            setError(true);
        } else {
            setError(false);
        }
    }

    return (
        <>
            <div className="input-field-body">
                <div className="input-field">
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            className={ error ? "input-error" : null }
                            placeholder="Shorten a link here..."
                            onChange={handlechange}
                            value={url} >
                        </input>
                        <i className={ error ? "error-msg" : "none" }>Please add a link</i>
                        <button type="submit" className="input-field-btn">Shorten It!</button>
                    </form>
                </div>
            </div>
            <div className="result-list">
                {/* <div className="result-field">
                    <div className="input-text">{shortenLinks.longLink}</div>
                    <div className="result-cont">
                        <div className="input-result">{shortenLinks.shortLink}</div>
                        <button>Copy</button>
                    </div>
                </div> */}
                {/* <div className="result-field">
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
                </div> */}
            </div>
        </>
    )
}

export default InputField