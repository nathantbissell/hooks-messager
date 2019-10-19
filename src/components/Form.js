import React, { useState } from 'react'

export default function Form() {
  const API_URL = 'http://localhost:5000/tweets'
  const [tweetText, setTweetText] = useState('')
  const [nameText, setNameText] = useState('')

  const sendTweet = event => {
    event.preventDefault()
    // console.log('button pressed!')
    const tweet = {
      name: nameText,
      content: tweetText
    }
    console.log(tweet)
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(tweet),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(restoreForms())
  }

  const updateTweetText = event => {
    setTweetText(event.target.value)
  }

  const updateNameText = event => {
    setNameText(event.target.value)
  }

  const restoreForms = () => {
    setTweetText('')
    setNameText('')
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='form-group col-6'>
          <label>Name</label>
          <input
            className='name-input form-control'
            placeholder='Name'
            value={nameText}
            onChange={updateNameText}
          />
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='form-group col-6'>
          <label>Content</label>
          <textarea
            className='form-control form-control-lg content-input'
            placeholder='Say Something ...'
            rows='4'
            value={tweetText}
            onChange={updateTweetText}
          />
        </div>
      </div>
      <button className='btn btn-dark' onClick={sendTweet}>
        Tweet
      </button>
    </div>
  )
}
