import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowcase from './categoryShowcase'
import Register from '../components/Register'

const Home=()=> {
  return (
    <div>
      <Banner></Banner>
      <HomeCategory></HomeCategory>
      <CategoryShowcase></CategoryShowcase>
      <Register></Register>
    </div>
  )
}

export default Home