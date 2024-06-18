import React from 'react'
import Component1 from './Component1';
import Component2 from './Component2';
import Component4 from './Component4';
import Component6 from './Component6';
import Reports from './component5/Reports';
import Discover from './component7/Discover';
import Reshape from './Component3/Reshape';

 const page = () => {
  return (
    <div>
      <Component1/>
        <Component2/>
        <Reshape/>
        <Component4/>
        <Reports/> 
        <Component6/>
        <Discover/>
    </div>
  )
}
export default page;