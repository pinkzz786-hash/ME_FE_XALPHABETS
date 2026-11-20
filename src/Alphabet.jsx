
import { useState } from 'react';
import './Alphabet.css';

function Alphabet() {
    const [text, setText] = useState('');

    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const handleClick = (letter) => {
        setText((prevText) => prevText + letter);
    };

    const handleBackspace = () => {
        setText((prevText) => prevText.slice(0, -1));
    };

    return (
        <div className="output">
            <h1>Alphabet Buttons</h1>

            <p>Click letters(or use the keyboard) to build words!</p>

            <input
                className="search"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Your text will appear here..."
            />

            <div className="backspace">
                <button onClick={handleBackspace}>
                    Backspace
                </button>
            </div>

            <div className="alphabetcontainer">
                {alphabets.map((letter) => (
                    <button
                        className="key"
                        key={letter}
                        onClick={() => handleClick(letter)}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Alphabet;
