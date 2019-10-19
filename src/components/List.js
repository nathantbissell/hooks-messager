import React from 'react'
import useFetch from './hooks'

export default function List() {
  const API_URL = 'http://localhost:5000/tweets'
  const tweetDeck = useFetch(API_URL, [])

  return (
    <div className='Tweets'>
      <h3>Tweets</h3>
      {tweetDeck.map(tweet => {
        const { id, name, created, content } = tweet
        return (
          <li key={id}>
            <h5>@{name}</h5>
            <p>
              <i>"{content}"</i>
            </p>
            <small>{created}</small>
          </li>
        )
      })}
    </div>
  )
}
