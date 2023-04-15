import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <div>
      <Describe>
        <div>
        <div className='about'>
         <h3>About</h3>
         <p>Project X hospital is a privately owned medical facility, that offers medical
            services to the general public where it is situated. With up to date equipment the efficieny 
            of our service is highly regarded, with a good reputation and track record we aim to maintain 
            potency and our relevance to people solving their medical needs. In other to aid accessibility
             globally we estalished branches at strategic points in the city. Each medical facility we own 
            gives the same adequate service to the patients. We run a bi-monthly free out reach to the less 
            priviledged people in the society, giving free immunization to children, free blood pressure test 
            to the elderly and free routine drugs to the everyone.
         </p>
        </div>
        </div>
      </Describe>
    </div>
  )
}

export default About
const Describe =styled.div`
background-color: red;
.about{
  margin-top: 70px;
}
p{
  font-size: 20px;
  line-spacing: 70px;
}

`