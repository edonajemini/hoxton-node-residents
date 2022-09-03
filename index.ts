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
    <h1>Recorces:</h1>
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

// Post houses
app.post('/houses', (req, res) => {
  let errors: string[] = []
 
  if(typeof req.body.residentsId !=='number') {
      errors.push('Add a proper resident Id')
  }
  if(typeof req.body.adress !=='string') {
      errors.push('Add a proper adress')
  }
  if(typeof req.body.type !=='string') {
      errors.push('Add a proper type')
  }
  if(typeof req.body.capacity !=='number') {
    errors.push('Add a proper number of people that can live in the house')
}


  if( errors.length === 0)  {
      const newhouse = {
          id: houses[houses.length - 1].id + 1,
          residentsId:req.body.residentsId,
          adress: req.body.adress,
          type: req.body.type,
          capacity: req.body.capacity
      }
  
      houses.push(newhouse)
      res.send(newhouse)
  }
  else {
      res.status(400).send({ errors: errors })
    }
})

// Post residents
app.post('/residents', (req, res) => {
  
  let errors: string[] = []
  
  if(typeof req.body.houseId !=='number') {
      errors.push('Add a proper house Id')
  }
  if(typeof req.body.name !=='string') {
      errors.push('Add a proper name')
  }
  if(typeof req.body.age !=='number') {
      errors.push('Add a proper age')
  }
  if(typeof req.body.gender !=='string') {
    errors.push('Add a proper gender')
  }

    if( errors.length === 0)  {
      const newresident = {
          id: residents[residents.length - 1].id + 1,
          houseId:req.body.houseId,
          name: req.body.name,
          age: req.body.age,
          gender: req.body.gende
      }
  
      residents.push(newresident)
      res.send(newresident)
  }
  else  {
      res.status(400).send({ errors: errors })
    }
  }

)

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
//Dont forget to ask how to fix thisss!!! (How to equal a list of arrays with an ID?)

app.get ('/residents/:id', (req, res) => {
  const id = Number(req.params.id)
  let match = {
  "residents" : residents.find(resident => resident.id === id),
  "theirhouses" :houses.filter(house => house.residentid === id)
  }
  if (match) {
    res.send(match)
  }
  else {
      res.status(404).send({ error: `Resident doesn't exist!` })
  }
}
)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

