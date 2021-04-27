import React from 'react'
import '../App.css';
import GetInfo from './GetInfo'
import ImageCard from './ImageCard'

import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const {useEffect, useState} = React

function DisplayTeam() {
  const initialTeamData = {

  }
  const [teamData, setTeamData] = useState(initialTeamData)
  const [teamDescription, setTeamDescription] = useState([])
  const [stadiumDescription, setStadiumDescription] = useState([])

  function paginate(text) {
    const splitText = text.split('. ')
    return splitText
  }

  useEffect(() => {
    async function GetTeamInfo() {
      const data = await GetInfo()
      console.log(data)
      setTeamData(data)
      setTeamDescription(paginate(data.strDescriptionEN))
      setStadiumDescription(paginate(data.strStadiumDescription))
          
    }
    GetTeamInfo()
  }, [])

  

  return (
    <>
      <Container>
        <Row >
          <img className='banner' src={teamData.strTeamBanner} alt='banner' />
        </Row>
        <Row >
          <CardDeck className='displayDeck'>
            <ImageCard img_path={teamData.strTeamBadge} splitText={teamDescription} header={teamData.strAlternate}/>
            <ImageCard img_path={teamData.strStadiumThumb} splitText={stadiumDescription} header={teamData.strStadium}/>
          </CardDeck>
        </Row>
        {/* FIXME: Add footer for links */}
        {/* <Row >
          <div className='bottom'>
            <img id='logo' alt='logo' src={teamData.strTeamLogo} />
            <span><a href={teamData.strWebsite} className='link' >Website</a></span>
            <span><a href={teamData.strFacebook} className='link' >Facebook</a></span>
            <span><a href={teamData.strInstagram} className='link' >Instagram</a></span>
            <span><a href={teamData.strTwitter} className='link' >Twitter</a></span>
          </div>
        </Row> */}
      </Container>
    </>
  )
}

export default DisplayTeam;