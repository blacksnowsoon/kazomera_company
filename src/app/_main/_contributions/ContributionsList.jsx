import './contributionsStyle.css';
import React from 'react'
import Contribution from './Contribution';

export default function ContributionsList() {
  return (
    <div className='cont__articles container'>
      {
        ["مساهمة", 'مساهمة 2'].map((e, i) => (
          <Contribution key={i} heading={e} />
        ))
      }
    </div>
  )
}
