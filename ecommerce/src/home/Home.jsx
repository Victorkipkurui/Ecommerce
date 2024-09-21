import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowcase from './categoryShowcase'
import Register from '../components/Register'
import Location from './Location'
import AboutUs from './AboutUs'

const Home=()=> {
  return (
    <div>
      <Banner></Banner>
      <HomeCategory></HomeCategory>
      <CategoryShowcase></CategoryShowcase>
      <Register></Register>
      <Location></Location>
      <AboutUs></AboutUs>
    </div>
  )
}

export default Home