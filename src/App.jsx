import { useState, useEffect } from 'react'
import Coffees from './components/Coffees';
import SectionOne from './components/SectionOne';


export default function App() {
  
  const [coffee, setCoffee] = useState([])

  const initialUrl = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"

  const fetchCoffee = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCoffee(data))
    .catch(error => console.error("Ocurrio el siguiente error" + error ))
  };

  useEffect(() => {
    fetchCoffee(initialUrl);
  }, [])

/*
  <Coffees coffees={coffee}/>
*/

  return (
    <>
      <SectionOne username="N3ptune4197">
        <Coffees coffees={coffee}/>
      </SectionOne>
    </>
  )
}
