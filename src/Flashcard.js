import React, { useState } from 'react'

const Flashcard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false)
    return (
        <div onClick={() => setFlip(!flip)}>
            {flip ? flashcard.answer : flashcard.question} 
            {/* if the flip is true we're going return the answer, and if it's false we're going return the question  */}
        </div>
    )
}

export default Flashcard
