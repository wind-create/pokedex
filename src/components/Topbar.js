import React from 'react'
import "./Topbar.css";
import pokeball from "../images/pokeball.png";
import pokeballcolor from "../images/pokeballcolor.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


function Topbar() {
  return (
    <div className='title'>
        <div className='title_left'>
            <p>Pokédex</p>
            <div className='caught-seen'>
                <div className='caught'>
                    <img src={pokeballcolor} alt="pokeball" style={{width: "30px", marginRight:"10px"}}/>
                    <p>438</p>
                </div>
                <div className='seen'>
                    <img src={pokeball} alt="pokeball" style={{width: "30px", marginRight: "10px"}} />
                    <p>649</p>
                </div>
            </div>
        </div>
        <p style={{color: "white"}}>A <FontAwesomeIcon icon={solid('arrow-right-long')} />  Z</p>
    </div>
  )
}

export default Topbar