import React from 'react'
import Category from './component/Category'
import PopularCourses from './component/PopularCourses'
import Service from './component/Service'



function Home() {
  return (
    <div>
        <>

  {/* Service Start */}
 <Service/>
  {/* Service End */}

  
  {/* Category Start */}
 <Category/>
  {/* Category End */}


  {/* PopularCourses Start */}
  <PopularCourses/>
  {/* PopularCourses End */}
</>

    </div>
  )
}

export default Home