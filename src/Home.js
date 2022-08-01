import React from 'react'
import Category from './component/Category'
import HeroSection from './component/HeroSection'
import PopularCourses from './component/PopularCourses'
import Service from './component/Service'
import Testimonial from './component/Testimonial'

function Home() {
  return (
    <div>
        <>
<HeroSection/>
  {/* Service Start */}
 <Service/>
  {/* Service End */}

  
  {/* Category Start */}
 <Category/>
  {/* Category End */}


  {/* PopularCourses Start */}
  <PopularCourses/>
  {/* PopularCourses End */}

  
  {/* Testimonial Start */}
<Testimonial/>
  {/* Testimonial End */}
</>

    </div>
  )
}

export default Home