import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const welcome = (name)=> {
 console.log(name);
  return (
    
<div>
<p className='img'>Welcome {name}</p>
</div>
  )
}
export default welcome;