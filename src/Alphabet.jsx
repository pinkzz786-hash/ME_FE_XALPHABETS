import { useState } from 'react';

import styles from './Alphabet.module.css'
function Alphabet(){
    const[text,setText]= useState("");
    const alphabets ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const handleClick=(letter)=>{
        setText(prevText=>prevText+letter);
    }
    return(
        <div className={styles.output}>
            <h1>Alphabet Buttons</h1>
            <p>Click letters(or use the keyboard) to build words!</p>
            <input className={styles.search} type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Your text will appear here..."/>
            <div className={styles.backspace}><button >Backspace</button></div>
         <div className={styles.alphabetcontainer}>
            {alphabets.map((letter)=>(
                <button onClick={()=>handleClick(letter)} key={letter}>{letter}</button>
                ))}
         </div>

            </div>
    )
}
export default Alphabet;