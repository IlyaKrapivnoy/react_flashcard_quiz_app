import React, { useState } from 'react'

const Flashcard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false)
    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`} 
            // dinamic classes. if flip is true then the class 'flip' will be AudioDestinationNode, if not then nothing will happen
            onClick={() => setFlip(!flip)}
        >
            <div className="front">
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.options.map(option => {
                        return <div className="flashcard-option">{ option }</div>
                    })}
                </div>
            </div>
            <div className="back">{ flashcard.answer }</div>
            {flip ? flashcard.answer : flashcard.question} 
            {/* if the flip is true we're going return the answer, and if it's false we're going return the question  */}
        </div>
    )
}

export default Flashcard
