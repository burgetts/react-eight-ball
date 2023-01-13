import React, {useState} from 'react';
import './EightBall.css'
import choose from './helpers'

const EightBall = ({answers}) => {
    const [phrase, setPhrase] = useState('Think of a question')
    const [backgroundColor, setBackgroundColor] = useState('black')
    function shakeEightBall () {
        const choice = choose(answers)
        setPhrase(choice.msg)
        setBackgroundColor(choice.color)
    }
    return (
        <div className = "EightBall">
            <span className="EightBall-container" style={{backgroundColor}} onClick= {shakeEightBall}> 
                <p className="EightBall-phrase"> <b> {phrase} </b> </p>
            </span>
        </div>
    )
}

export default EightBall;