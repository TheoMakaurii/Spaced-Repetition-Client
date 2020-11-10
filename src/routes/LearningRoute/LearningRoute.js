import React, { useState } from 'react'
import FlashCardsList from '../../components/FlashCardList'


export default function LearningRoute(props){
  // const[flashcards, setFlashCards] = useState(SAMPLE)
  const flashcards = props.flashcards
  console.log("Here", props.flashcards)
  return (
    <section className='cardStack'>
      <FlashCardsList flashcards = {flashcards}/>
    </section>
  );

}

let SAMPLE= [
{
  id:1,
  question: 'Konnichiwa',
  answer: 'Hello'
},
{
  id:2,
  question: 'Uchi',
  answer: 'House'
}
]

