import React from 'react'

export default function Ip_fetch() {

const fatch = function(){
    fetch("https://geo.ipify.org/api/v2/country?apiKey=at_YKthhIqNX73qPRItk70P895EZsQi3").then(
        (response) => {response.json()}
    )
    console.log(fatch())
}


  return (
    <div>ip_fetch</div>
  )
}
