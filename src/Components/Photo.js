import React from 'react'

export default function Photo({images}) {
  return (
    <div className='photo_wrapper'>
        <div className='tabs'>
            <span className='photo'> photos</span>
            <span className='like'>likes</span>
        </div>
        <div className='photo_container'>
            {
              images.map(e=>{
                return  <img src={e} alt='sd'/>
              })
            }
        </div>
    </div>
  )
}
