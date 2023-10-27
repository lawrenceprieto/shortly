import { useState } from "react";
import "../styles/inputfield.css"
import axios from 'axios';

function InputField() {

    const [url, setUrl] = useState('');
    const [error, setError] = useState(false);
    const [urlHistory, setUrlHistory] = useState([]);
    const [activeIndex, setActiveIndex] = useState('');
    
    function handlechange(e) {
        setUrl(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const urlRegex = /^(ftp|https?):\/\/[^ "]+$/;
        const isUrlValid = urlRegex.test(url);

        if (!url) {
            setError(true);
            localStorage.clear();
        } else if (!isUrlValid) {
            setError(false);
            alert(`Invalid URL format!! try https://${url}`);
            setUrl('');
        } else {
            setError(false);
            async function getShorten() {

                const accessToken = 'ff8fb38b04e62a8229fed86216b99b4e1726a70b'; // Replace with your actual access token
                const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
                const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;
    
                try {
                    const response = await axios.post(
                        apiUrl,
                        { long_url: formattedUrl },
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                                'Content-Type': 'application/json',
                            },
                        }
                    );
            
                    const shortenedUrl = response.data.link;
                    const historyItem = {
                        originalUrl: url,
                        shortUrl: shortenedUrl,
                    };

                    const updatedHistory = [historyItem, ...urlHistory];
                    setUrlHistory(updatedHistory);

                } catch (error) {
                    alert(error);
                }
            }
            getShorten();
            setUrl('');
        }
    }

    function handleCopyButton(url , index) {
        navigator.clipboard.writeText(url.shortUrl);
        setActiveIndex(index);
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
                {
                    urlHistory.map((url, index) => (
                        <div className="result-field" key={index}>
                            <div className="input-text">{url.originalUrl}</div>
                            <div className="result-cont">
                                <div className="input-result">{url.shortUrl}</div>
                                <button onClick={() => handleCopyButton(url , index)} 
                                    className={index === activeIndex ? "copied" : null }
                                > {index === activeIndex ? "Copied!" : "Copy"} </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default InputField