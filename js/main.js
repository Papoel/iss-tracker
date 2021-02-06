/*
* async encapsule le résultat de la fonction
* dans une promesse
* async permet l'utilisation du mot clef
* await dans le corps de la fonction
* Le mot clef await, placé devant une promesse
* permet de mettre en pause l'exécution du code :

* await bloque l'exécution du code tant
* que la promesse n'est pas terminée
* await fonctionne avec les promesses
* mais pas avec les callbacks
* await ne peut être utilisé que
* dans une fonction asynchrone
*/

/*
 #1 Récupérer les données d'un API -
 #2 Création d'un fonction assychrone
 #3 Utlisation de fetch
 #4 Destructuring pour récupérer dans une variable les données qui m'interesse
 #5 Géolocaliser et placer un repere sur une map
*/
//?1 :

// --------------- PARTIE MAP --------------------

// - Création de la map et tuiles
const mymap = L.map('issMap').setView([0, 0], 1)
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, { attribution })
tiles.addTo(mymap)

//- Prametrer l'icone et la personaliser
  const issIcon = L.icon({
    iconUrl: '../images/International_Space_Station.svg',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
   });

const marker = L.marker([0, 0],{icon: issIcon}).addTo(mymap)

// --------------- PARTIE API --------------------
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

getISS()

//?2 :
async function getISS() {
  const response = await fetch(api_url)
  const data = await response.json()

  //+ Destructurer :
  const {
    latitude,
    longitude,
  } = data

  // L.marker([latitude, longitude]).addTo(mymap)
  marker.setLatLng([latitude, longitude])

  //? Injecter les coordnnées dans la span
  document.getElementById('lat').innerHTML = (latitude)
  document.getElementById('lon').innerHTML = (longitude)

}