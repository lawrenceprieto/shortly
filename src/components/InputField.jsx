import { useState } from "react";
import "../styles/inputfield.css"

function InputField() {

    const [url, setUrl] = useState('');

    function handlechange(e) {
        setUrl(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(url);
        if (!url) {
            alert('enter a url');
        }
    }

    return (
        <>
            <div className="input-field-body">
                <div className="input-field">
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="link" 
                            placeholder="Shorten a link here..."
                            onChange={handlechange}
                            value={url} >
                        </input>
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