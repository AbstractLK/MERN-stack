import React from 'react';
import {useParams} from "react-router-dom";

const About = () => {
  const {name} = useParams();
  return (
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>{name} About us</h1>
  )
}

export default About;