import React from 'react'
import Container from './Container'
import Music from '../assets/music.png'

const Banner = () => {
  return (
    <div className='pt-[120px]'>
        <Container>
            <img src={Music} alt="" className='w-full'/>
        </Container>
    </div>
  )
}

export default Banner