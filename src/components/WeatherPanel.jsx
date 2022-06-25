import React from 'react'
import { WEATHER } from '../constants'
import { BsFillCloudSunFill, BsFillSunFill, BsFillCloudRainHeavyFill } from 'react-icons/bs';
import cx from 'classnames'
import s from './WeatherPanel.module.scss' 


export default function WeatherPanel({ currentWeather, setCurrentWeather }) {
  const items = [
    {
      value: WEATHER.CLOUDY,
      name: 'CLOUDY',
      icon: ()=> <BsFillCloudSunFill/>
    },
    {
      value: WEATHER.SUNNY,
      name: 'SUNNY',
      icon: ()=> <BsFillSunFill/>
    },
    {
      value: WEATHER.RAINY,
      name: 'RAINY',
      icon: ()=> <BsFillCloudRainHeavyFill/>
    }
  ]

  const handleClick = (value)=> () => {
    setCurrentWeather(value)
  }
  
  return (
    <div className={s.container}>
      {items.map((item)=>(<button className={cx(s.button, {[s.active]: currentWeather === item.value })} key={item.value} onClick={handleClick(item.value)}> {item.icon()}</button>))}
    </div>
  )
}
