import React from 'react'
import './brand.css';
import { IMAGE_PATH } from '../../constant/Image_path';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={`${IMAGE_PATH}/google.png`} alt="googleimg" />
      </div>
      <div>
        <img src={`${IMAGE_PATH}/slack.png`} alt="googleimg" />
      </div>
      <div>
        <img src={`${IMAGE_PATH}/atlassian.png`} alt="googleimg" />
      </div>
      <div>
        <img src={`${IMAGE_PATH}/dropbox.png`} alt="googleimg" />
      </div>
      <div>
        <img src={`${IMAGE_PATH}/shopify.png`} alt="googleimg" />
      </div>
    </div>
  )
}

export default Brand