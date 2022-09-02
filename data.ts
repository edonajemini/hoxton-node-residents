type House = {
    id: number,
    residentsId?:[number,number]|[number],
    adress: string,
    type:string
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
        residentsId: [1],
        adress:"8787 Central Street Scarsdale, NY 10583",
        type:"Apartment"  
    },
    {
        id:2,
        residentsId: [4,6],
        adress:"7802 Prince Street Canfield, OH 44406",
        type:"Condo"  
    },
    {
        id:3,
        residentsId: [2,5],
        adress:"15 Leeton Ridge Lane Mentor, OH 44060",
        type:"Townhouse"  
    },
    {
        id:4,
        residentsId: [3],
        adress:"73 State St. Anchorage, AK 99504",
        type:"Villa"  
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
        houseId:3,
        name:"Anabella Sullivan",
        age: 28,
        gender:"Male"
    },
    {
        id: 3,
        houseId:4,
        name:"Bryson Hunt",
        age: 23,
        gender:"Male" 
    },
    {
        id: 4,
        houseId:2,
        name:"Abdiel Huff",
        age: 43,
        gender:"Male" 
    },
    {
        id: 5,
        houseId:3,
        name:"Yasmine Farley",
        age: 32,
        gender:"Female" 
    },
    {
        id: 6,
        houseId:2,
        name:"Leia Parker",
        age: 8,
        gender:"Female" 
    },
  ]
  
