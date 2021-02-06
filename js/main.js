const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
getISS()
// Récupérer les données d'un API - Création d'un fonction assychrone
// Utlisation de fetch

async function getISS() {
  const response = await fetch(api_url)
  const data = await response.json()
  // console.log(data.latitude)
  // console.log(data.longitude)
  //+ Destructurer :
  const { latitude, longitude, velocity } = data

  //? Injecter les coordnnées dans la span
  document.getElementById('lat').innerHTML = (latitude)
  document.getElementById('lon').innerHTML = (longitude)
  document.getElementById('vel').innerHTML = (velocity)

  console.log(longitude)
  console.log(latitude)
  console.log(data)
}