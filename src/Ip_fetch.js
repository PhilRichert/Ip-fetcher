import  { useEffect, useState } from 'react'
import {Map, Marker} from 'pigeon-maps'



export default function Ip_fetch() {

    let[ipAdress, setIpAdress] = useState("")
    let[longitude, setLongitude] = useState(0)
    let[latitude, setLatitude] = useState(0)
    let[countryid, setCountryId] = useState("")
    let[countryinfo, setCountryInfo] = useState()
    let[flag, setFlag] = useState()

  useEffect(() => {

        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_UNSPLASH_KEY}`)
        .then((resp) =>
            resp.json()
        ).then((data) => {setIpAdress(data.ip)
            setLongitude(data.location.lng)
            setLatitude(data.location.lat)
            setCountryId(data.location.country)
            console.log(data)});

        fetch(`https://restcountries.com/v3.1/all`).then((resp) => resp.json())  
        .then((dataa) => {setCountryInfo(dataa)       
        })
        console.log(countryinfo)
  
      
        
       
}, [])



  return (
   
    <div>
        <p> Your Ip Adress is: {ipAdress}</p>
        <Map height={300} center={[latitude,longitude]} defaultZoom={11}>
                <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
        countryinfo.map(e => )
       <img src={flag}></img>
    </div>
  )
}
