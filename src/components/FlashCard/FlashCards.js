import React, {useState} from 'react'
import './FlashCards.css'

export default function FlashCards({flashcard}) {
    const [flip, setFlip] = useState(false)
    return (
        <div 
        className={`card ${flip ? 'flip' : ''}`}
        onClick={()=> setFlip(!flip)}
        >
            <div className= 'front'>
                {flashcard.original}
            </div>
            <div className='back'>
                {flip ? flashcard.translation : flashcard.original}
            </div>
        
       
        </div>
    )
}
