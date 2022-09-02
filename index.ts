import express from "express"
import cors from "cors"
import { DataHouses, dataResident } from './data'

let houses = DataHouses
let residents = dataResident

const app = express()
app.use(cors())
app.use(express.json())
const port = 4000

app.get('/', (req, res) => {
    res.send(`
        <a href="/houses">Houses</a>
        <a href="/residents">Residents</a>
    `)
  })

// Get all the houses with people who lives in them
app.get('/houses', (req, res)=>{
    let displayedhouses = houses.map(house =>{
        let listofresidents = residents.filter(resident => resident.houseId === house.id)
        return{...house, listofresidents}
    })
    res.send(displayedhouses )
  })

//Get all the residents and the houses they live in
app.get('/residents', (req, res)=>{
    let displayedresidents = residents.map(resident =>{
        let house = houses.find(house => house.id === resident.houseId)
        return{...resident, house}
    })
    res.send(displayedresidents )
  })

//Get the houses with people who lives in them by ID
app.get ('/houses/:id', (req, res) => {
  const id = Number(req.params.id)
  let match = {
  "houses" : houses.find(house => house.id === id),
  "housesresidents" :residents.filter(resident => resident.houseId === id)
  }
  if (match) {
    res.send(match)
  }
  else {
      res.status(404).send({ error: `House doesn't exist!` })
  }
}
)
// Getting the residents and their houses by ID
// app.get ('/residents/:id', (req, res) => {
//   const id = Number(req.params.id)
//   let match = {
//   "resdients" : residents.find(resident => resident.id === id),
//   "theirhouses" :houses.filter(house => house.residentsId === id )
//   }
//   if (match) {
//     res.send(match)
//   }
//   else {
//       res.status(404).send({ error: `House doesn't exist!` })
//   }
// }
// )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

