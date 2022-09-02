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

app.get('/houses', (req, res)=>{
    let displayedhouses = houses.map(house =>{
        let listofresidents = residents.filter(resident => resident.houseId === house.id)
        return{...house, listofresidents}
    })
    res.send(displayedhouses )
  })

app.get('/residents', (req, res)=>{
    let displayedresidents = residents.map(resident =>{
        let house = houses.find(house => house.id === resident.houseId)
        return{...resident, house}
    })
    res.send(displayedresidents )
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

