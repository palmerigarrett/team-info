import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination'

const {useState, useEffect} = React

function ImageCard(props) {
  const {img_path, splitText, header} = props
  const [currSplitTextIndex, setCurrSplitTextIndex] = useState(0)

  const handleNext = (e) => {
    e.preventDefault()
    const currIndex = currSplitTextIndex
    setCurrSplitTextIndex(currIndex+1)
  }

  const handlePrev = (e) => {
    e.preventDefault()
    const currIndex = currSplitTextIndex
    setCurrSplitTextIndex(currIndex-1)
  }

  return (
    <>
    <Card className='displayCard'>
      <Card.Img className='cardImage' variant='top' src={img_path} />
      <Card.Header id='header'>
        About: <b>{header}</b>
        </Card.Header>
      <Card.Body className='cardBody'>
        <Card.Text>
          <span>
          {splitText[currSplitTextIndex]}
          </span>
          <span>
            {
              currSplitTextIndex === splitText.length - 1
            ?
              ''
            :
              '.'
            }
          </span>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Pagination style={{display: 'flex'}}>
        {
          currSplitTextIndex !== 0
        ? 
          <Button className='pageButton' onClick={handlePrev}>
            <Pagination.Prev className='pagination' />
          </Button>
        :
          <>
          </>
        }
        {
          currSplitTextIndex !== splitText.length - 1
          ?
            <Button className='pageButton' onClick={handleNext}>
              <Pagination.Next className='pagination' />
            </Button>
          :
            <>
            </>
        }
        </Pagination>
      </Card.Footer>
    </Card>
    </>
  )
}

export default ImageCard;