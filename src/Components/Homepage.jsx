import React from 'react'
import TripPlanner from './TripPlanner'
import Try from './Try'
import FeaturesSection from './FeaturesSection'
import PromoSection from './PromoSection'


const Homepage = () => {
  return (
    <div>
         <TripPlanner/> 
        <Try/>
    <FeaturesSection/>
    <PromoSection/> 
    </div>
  )
}

export default Homepage