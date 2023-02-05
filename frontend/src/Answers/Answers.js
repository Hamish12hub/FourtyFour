import React, { useState, useEffect, useRef } from 'react';
import './Answers.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import Albania from '../photos/flags/Albania.png';import Andorra from '../photos/flags/Andorra.png'
import Armenia from '../photos/flags/Armenia.png';import Austria from '../photos/flags/Austria.png'
import Belarus from '../photos/flags/Belarus.png';import Belgium from '../photos/flags/Belgium.png'
import Bosnia_and_Herzegovina from '../photos/flags/BosniaAndHerzegovina.png';import Bulgaria from '../photos/flags/Bulgaria.png'
import Croatia from '../photos/flags/Croatia.png';import Cyprus from '../photos/flags/Cyprus.png'
import Czechia from '../photos/flags/Czechia.png';import Denmark from '../photos/flags/Denmark.png'
import Estonia from '../photos/flags/Estonia.png';import Finland from '../photos/flags/Finland.png'
import France from '../photos/flags/French.png';import Georgia from '../photos/flags/Georgia.png'
import Germany from '../photos/flags/German.png';import Greece from '../photos/flags/Greece.png'
import Hungary from '../photos/flags/Hungary.png';import Iceland from '../photos/flags/Iceland.png'
import Ireland from '../photos/flags/Ireland.png';import Italy from '../photos/flags/Italian.png'
import Kosovo from '../photos/flags/Kosovo.png';import Latvia from '../photos/flags/Latvia.png'
import Liechtenstein from '../photos/flags/Liechtenstein.png';import Lithuania from '../photos/flags/Lithuania.png';
import Luxembourg from '../photos/flags/Luxembourg.png';import Malta from '../photos/flags/Malta.png';
import Moldova from '../photos/flags/Moldova.png';import Monaco from '../photos/flags/Monaco.png';
import Montenegro from '../photos/flags/Montenegro.png';import Netherlands from '../photos/flags/Netherlands.png';
import North_Macedonia from '../photos/flags/NorthMacedonia.png';import Norway from '../photos/flags/Norway.png'
import Poland from '../photos/flags/Poland.png';import Portugal from '../photos/flags/Portugal.png'
import Romania from '../photos/flags/Romania.png';import Russia from '../photos/flags/Russia.png';
import San_Marino from '../photos/flags/SanMarino.png';import Serbia from '../photos/flags/Serbia.png';
import Slovakia from '../photos/flags/Slovakia.png';import Slovenia from '../photos/flags/Slovenia.png';
import Spain from '../photos/flags/Spain.png';import Sweden from '../photos/flags/Sweden.png'
import Switzerland from '../photos/flags/Switzerland.png';import Turkey from '../photos/flags/Turkey.png';
import Ukraine from '../photos/flags/Ukraine.png';import United_Kingdom from '../photos/flags/UnitedKingdom.png';
import Vatican_City from '../photos/flags/VaticanCity.png';

const countries = [
  { name: 'Albania', capital: 'Tirana', flag: Albania },
  { name: 'Andorra', capital: 'Andorra la Vella', flag: Andorra },
  { name: 'Armenia', capital: 'Yerevan', flag: Armenia },
  { name: 'Austria', capital: 'Vienna', flag: Austria },
  { name: 'Belarus', capital: 'Minsk', flag: Belarus },
  { name: 'Belgium', capital: 'Brussels', flag: Belgium },
  { name: 'Bosnia and Herzegovina', capital: 'Sarajevo', flag: Bosnia_and_Herzegovina },
  { name: 'Bulgaria', capital: 'Sofia', flag: Bulgaria },
  { name: 'Croatia', capital: 'Zagreb', flag: Croatia },
  { name: 'Cyprus', capital: 'Nicosia', flag: Cyprus },
  { name: 'Czech Republic', capital: 'Prague', flag: Czechia },
  { name: 'Denmark', capital: 'Copenhagen', flag: Denmark },
  { name: 'Estonia', capital: 'Tallinn', flag: Estonia },
  { name: 'Finland', capital: 'Helsinki', flag: Finland },
  { name: 'France', capital: 'Paris', flag: France },
  { name: 'Georgia', capital: 'Tbilisi', flag: Georgia },
  { name: 'Germany', capital: 'Berlin', flag: Germany },
  { name: 'Greece', capital: 'Athens', flag: Greece },
  { name: 'Hungary', capital: 'Budapest', flag: Hungary },
  { name: 'Iceland', capital: 'Reykjavik', flag: Iceland },
  { name: 'Ireland', capital: 'Dublin', flag: Ireland },
  { name: 'Italy', capital: 'Rome', flag: Italy },
  { name: 'Kosovo', capital: 'Pristina', flag: Kosovo },
  { name: 'Latvia', capital: 'Riga', flag: Latvia },
  { name: 'Liechtenstein', capital: 'Vaduz', flag: Liechtenstein },
  { name: 'Lithuania', capital: 'Vilnius', flag: Lithuania },
  { name: 'Luxembourg', capital: 'Luxembourg City', flag: Luxembourg },
  { name: 'Malta', capital: 'Valletta', flag: Malta },
  { name: 'Moldova', capital: 'Chisinau', flag: Moldova },
  { name: 'Monaco', capital: 'Monaco', flag: Monaco },
  { name: 'Montenegro', capital: 'Podgorica', flag: Montenegro },
  { name: 'Netherlands', capital: 'Amsterdam', flag: Netherlands },
  { name: 'North Macedonia', capital: 'Skopje', flag: North_Macedonia },
  { name: 'Norway', capital: 'Oslo', flag: Norway },
  { name: 'Poland', capital: 'Warsaw', flag: Poland },
  { name: 'Portugal', capital: 'Lisbon', flag: Portugal },
  { name: 'Romania', capital: 'Bucharest', flag: Romania },
  { name: 'Russia', capital: 'Moscow', flag: Russia },
  { name: 'San Marino', capital: 'San Marino', flag: San_Marino },
  { name: 'Serbia', capital: 'Belgrade', flag: Serbia },
  { name: 'Slovakia', capital: 'Bratislava', flag: Slovakia },
  { name: 'Slovenia', capital: 'Ljubljana', flag: Slovenia },
  { name: 'Spain', capital: 'Madrid', flag: Spain },
  { name: 'Sweden', capital: 'Stockholm', flag: Sweden },
  { name: 'Switzerland', capital: 'Bern', flag: Switzerland },
  { name: 'Tuerkey', capital: 'Ankara', flag: Turkey},
  { name: 'Ukraine', capital: 'Kiev', flag: Ukraine },
  { name: 'United Kingdom', capital: 'London', flag: United_Kingdom },
  { name: 'Vatican City', capital: 'Vatican City', flag: Vatican_City },
];


function Answers() {

  const returnHome = () =>{
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace("/Answers", "");
    window.history.pushState({}, "", newUrl);
    window.location.reload(false);
  }

  return (
    <div className="CACAoutsideFront">
      <div className="CACAmainBox">


<div className='CACArightbox'>
        <div className='CACAbottomBox'>

          <div className='CACATopBox'>
            <div><button className='CACATopBoxArrow' onClick={returnHome}><AiOutlineArrowLeft /></button></div>
            <div><h3>Countrys and Capitals for europe</h3></div>
          </div>

          <div className='CACATopMiddle'>
            <div className='CACATopMiddleDiv' >Country</div>
            <div className='CACATopMiddleDiv' >Capital</div>
            <div className='CACATopMiddleDiv' >Flag</div>
          </div>


          <div className='CACATable'>
    <table className='CACATableInside'>
      <tbody className='CACATableInsideBody'>
        {countries.map((country, index) => (
          <tr key={index}>
            <td className="CACAtable-cell">{country.name}</td>
            <td className="CACAtable-cell">{country.capital}</td>
            <td className="CACAtable-cell">
              <img className="CACATableFlag" src={country.flag}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>





  
        </div>
        </div>
      </div>  
    </div>
  )
}

export default Answers
