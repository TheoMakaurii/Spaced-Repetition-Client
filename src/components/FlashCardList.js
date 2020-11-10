import React from 'react'
import FlashCards from './FlashCard/FlashCards'

export default function FlashCardList({flashcards}) {
    return (
        <div className='cardGrid'>
            {flashcards.map(flashcard =>{
                return <FlashCards flashcard ={flashcard} key = {flashcard.id} />
            })}
        </div>
    )
}
