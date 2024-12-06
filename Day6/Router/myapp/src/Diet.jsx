import React from 'react'
import { useParams } from 'react-router-dom'

function Diet() {
    const { dietName } = useParams();

    const diet = {
        lowcorb : "Low Corb is a good for weight loss",
        highprotein : "High Protein is a good diet for Growth",
        lowfat : "Low Fat is good for Fat Loss"
    }

    const info = diet[dietName];

  return (
    <div>
        <h1>{dietName}</h1>
        <p>{info}</p>
    </div>
  )
}

export default Diet