import React, { useState } from 'react'
import "./PokemonCard.css"
import pokeball from "../images/pokeball.png"

function PokemonCard({id, name, image, type, weight, height, stats, statsName}) {
  const [isShow, setIsShow] = useState(false);

 
  return (
    <div className='container'>
      {isShow && (
      <div className= "show">
        <div className='stat-container-title'>
          <img src={image} alt={name} className="image-title" />
          <p style={{ width: " 180px", color: "black"}}>No. {id}</p>
          <p>{name}</p>
          <img src={pokeball} alt="pokeball" className='pokeball-title' />
        </div>
        <img src={image} alt={name}/>
        <div style={{display: "flex", width: "100%"}}>
          <div style={{background: "#dbdbd9", textAlign: "center"}} className='stats-left'>
            <p>Type</p>
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div style={{background:"#ffffff"}} className="stats-right">
            <p>{type}</p>
            <p>{height} cm</p>
            <p>{weight} lbs</p>
          </div>
        </div>
        <div className='base-stats'>
          <div>
            {statsName.map((stats) => (
              <p className='stats'>{stats}</p>
            ))}
          </div>
          <div>
            {stats.map((stats) => (
              <p className='stats'>{stats}</p>
            ))}
          </div>
        </div>
      </div>
  )}
      <div className='right' 
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      >
        <img src={image} alt={name} style={{maxHeight:"50px", marginRight:"10px", width:"50px"}}/>
        <p style={{width:"270px"}}>No. {id}</p>
        <img src={pokeball} alt="pokeball" style ={{marginLeft:"auto", width:"40px" }}/>
      </div>
    </div>
  )
}

export default PokemonCard