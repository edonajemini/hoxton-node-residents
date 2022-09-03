type House = {
    id: number,
    adress: string,
    type:string,
    capacity?:number,
    residentid?:[number, number] | number
  }

type Resident = {
    id:number,
    houseId:number,
    name:string,
    age:number,
    gender:string
}
  
export const DataHouses: House[] =[
    {
        id:1,
        adress:"8787 Central Street Scarsdale, NY 10583",
        type:"Apartment",
        residentid:1,
        capacity:3
    },
    {
        id:2,
        adress:"7802 Prince Street Canfield, OH 44406",
        type:"Condo",
        residentid:[2,3],
        capacity:2
    },
    {
        id:3,
        adress:"15 Leeton Ridge Lane Mentor, OH 44060",
        type:"Townhouse",
        residentid:[4,6],
        capacity:1
    },
    {
        id:4,
        adress:"73 State St. Anchorage, AK 99504",
        type:"Villa",
        residentid:5,
        capacity:5
    },
    {
        id:5,
        adress:"73 State St. Anchorage, AK 99504",
        type:"Villa",
        residentid:3,
        capacity:5
    }
]

export const dataResident: Resident[] = [
    {
      id: 1,
      houseId:1,
      name:"Sloane Pineda",
      age: 33,
      gender:"Male"
    },
    {
        id: 2,
        houseId:2,
        name:"Anabella Sullivan",
        age: 28,
        gender:"Male"
    },
    {
        id: 3,
        houseId:5,
        name:"Bryson Hunt",
        age: 23,
        gender:"Male" 
    },
    {
        id: 4,
        houseId:3,
        name:"Abdiel Huff",
        age: 43,
        gender:"Male" 
    },
    {
        id: 5,
        houseId:4,
        name:"Yasmine Farley",
        age: 32,
        gender:"Female" 
    },
    {
        id: 6,
        houseId:3,
        name:"Leia Parker",
        age: 8,
        gender:"Female" 
    },
  ]
  
