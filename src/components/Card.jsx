import React, {  useEffect, useRef, useState } from 'react'
import cx from 'classnames';
import s from './Card.module.scss'
import moment from 'moment';

import { WEATHER } from '../constants';
import WeatherPanel from './WeatherPanel';

export default function Card() {
  const time = moment().format('dddd DD MMMM');
  const rain = useRef()
  const svg = useRef()
  const [currentWeather, setCurrentWeather] = useState(WEATHER.SUNNY)

  useEffect(()=> {
    if(!rain.current) return
    for(const item of rain.current.children) {
      setRandomAnimationTime(item)


      item.onanimationend = ()=> {
        if(currentWeather !== WEATHER.RAINY) return 
        setRandomAnimationTime(item)
        restartAnimation(item)
        setOpacity(item.children[0])
      }
    }
  }, [currentWeather])

  const setRandomAnimationTime = (item) => {
    item.style.animationDuration = `${Math.random() + 1}s`
  }

  const restartAnimation = (item) => {
    item.classList.remove(s.rain);
    setTimeout(()=>{
      item.classList.add(s.rain);
    },50);
  }

  const setOpacity = (item) => {
    item.style.opacity = Math.max(item.getAttribute('y') / 50, 0.5);
  }


  return (
    <div className={s.wrapper}>
      <WeatherPanel 
        currentWeather={currentWeather}  
        setCurrentWeather={setCurrentWeather}  
      />
      <div className={s.card}>
          <div className={s.content}>
            <div className={s.temperature}>20</div>
            <div className={s.data}>
              <div className={s.date}> {time}</div>
              <div className={s.status}> Rain</div>
            </div>
          </div>
          <svg ref={svg}
            className={
              cx(s.svg, {
                  [s.cloudy]: currentWeather === WEATHER.CLOUDY,
                  [s.sunny]: currentWeather === WEATHER.SUNNY,
                  [s.rainy]: currentWeather === WEATHER.RAINY,
                })}
            width={373}
            height={600}
            >
              <g className={s.clouds}>
                <path className={s.cloud1} d="M600 0H0V168.467C100 225.178 200 225.178 300 168.467C400 225.178 500 225.178 600 168.467C700 225.178 800 225.178 900 168.467C1000 225.178 1100 225.178 1200 168.467V0H600Z" fill="black"/>
                <path className={s.cloud2} d="M600 0H0V145.312C100 194.229 200 194.229 300 145.312C400 194.229 500 194.229 600 145.312C700 194.229 800 194.229 900 145.312C1000 194.229 1100 194.229 1200 145.312V0H600Z" fill="#ADADAD"/>

              </g>
              <g className={s.sun}>
                <svg width="600" x={-300} y={-300}  height="600" viewBox="0 0 501 500" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <circle cx={250} cy={250} r="75"/>
                  <g className={s.rays}>
                    <path d="M427.277 426.777C450.102 403.952 468.533 376.734 481.195 346.5L297.064 269.478C294.488 275.564 290.74 281.033 286.104 285.604L427.277 426.777Z" fill="url(#paint0_radial_16_16)"/>
                    <path d="M269.168 296.597L343.5 482.13C314.753 493.658 283.367 500 250.5 500V299.998C250.666 299.999 250.833 300 251 300C257.409 300 263.537 298.794 269.168 296.597Z" fill="url(#paint1_radial_16_16)"/>
                    <path d="M301 250H500.5C500.5 215.794 493.63 183.193 481.195 153.5L297.064 230.522C299.598 236.508 301 243.09 301 250Z" fill="url(#paint2_radial_16_16)"/>
                    <path d="M286.104 214.396L427.277 73.2233C403.574 49.521 375.135 30.556 343.5 17.8702L269.168 203.403C275.557 205.896 281.306 209.664 286.104 214.396Z" fill="url(#paint3_radial_16_16)"/>
                    <path d="M231.97 203.749C237.691 201.393 243.944 200.067 250.5 200.002V0C217.633 0 186.247 6.34246 157.5 17.8702L231.97 203.749Z" fill="url(#paint4_radial_16_16)"/>
                    <path d="M204.787 269.122C202.347 263.231 201 256.773 201 250H0.5C0.5 284.206 7.36973 316.807 19.8048 346.5L204.787 269.122Z" fill="url(#paint5_radial_16_16)"/>
                    <path d="M215.396 214.896L73.7233 73.2233C50.8984 96.0482 32.4666 123.266 19.8048 153.5L204.787 230.878C207.275 224.871 210.901 219.454 215.396 214.896Z" fill="url(#paint6_radial_16_16)"/>
                    <path d="M231.97 296.251L157.5 482.13C125.865 469.444 97.4256 450.479 73.7233 426.777L215.396 285.104C220.078 289.854 225.705 293.67 231.97 296.251Z" fill="url(#paint7_radial_16_16)"/>
                  </g>
                  

                  <defs>
                  <radialGradient id="paint0_radial_16_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250.5 250) rotate(90) scale(250)">
                  <stop stopColor="#FFF500"/>
                  <stop offset="0.965303" stopColor="#FFF500" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="paint1_radial_16_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250.5 250) rotate(90) scale(250)">
                  <stop stopColor="#FFF500"/>
                  <stop offset="0.965303" stopColor="#FFF500" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="paint2_radial_16_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250.5 250) rotate(90) scale(250)">
                  <stop stopColor="#FFF500"/>
                  <stop offset="0.965303" stopColor="#FFF500" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="paint3_radial_16_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250.5 250) rotate(90) scale(250)">
                  <stop stopColor="#FFF500"/>
                  <stop offset="0.965303" stopColor="#FFF500" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="paint4_radial_16_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250.5 250) rotate(90) scale(250)">
                  <stop stopColor="#FFF500"/>
                  <stop offset="0.965303" stopColor="#FFF500" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="paint5_radial_16_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250.5 250) rotate(90) scale(250)">
                  <stop stopColor="#FFF500"/>
                  <stop offset="0.965303" stopColor="#FFF500" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="paint6_radial_16_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250.5 250) rotate(90) scale(250)">
                  <stop stopColor="#FFF500"/>
                  <stop offset="0.965303" stopColor="#FFF500" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="paint7_radial_16_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250.5 250) rotate(90) scale(250)">
                  <stop stopColor="#FFF500"/>
                  <stop offset="0.965303" stopColor="#FFF500" stopOpacity="0"/>
                  </radialGradient>
                  </defs>
                </svg>
              </g>
              {currentWeather === WEATHER.RAINY && <g ref={rain}>
                { [0,1,2,3,4,5,6,7,8]
                  .map((item)=> (
                    <g
                    className={s.rain}
                    key={item}
                    >
                    <rect
                      width="4"
                      height="23"
                      rx="1"
                      x={item*50}
                      y={(Math.random()*50)/1}
                      fill="url(#paint0_linear_19_17)"
                    />
                    </g>
                    ))}
                <defs>
                <linearGradient id="paint0_linear_19_17" x1="2" y1="23" x2="2" y2="1.88326e-09" gradientUnits="userSpaceOnUse">
                <stop offset="0.276042" stopColor="#3C5BCC"/>
                <stop offset="0.927083" stopColor="#D9D9D9" stopOpacity="0"/>
                </linearGradient>
                </defs>

              </g>}
            <g className={s.clouds}>
              <path id="closestCloud" className={s.cloud3} d="M600 0H0V104C81 165.5 216 163.5 297.5 104C377.5 161.5 522 172 600 104C681 165.5 816 163.5 897.5 104C977.5 161.5 1122 172 1200 104V0H600Z"/>
            </g>
          </svg>
      </div>
    </div>
  )
}
