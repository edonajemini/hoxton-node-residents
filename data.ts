type House = {
    id: number,
    residentId: number,
    adress: string,
    type:string
  }

type Resident = {
    id:number,
    name:string,
    age:number,
    gender:string
}
  
export const DataHouses: House[] =[
    {
        id:1,
        residentId: 1,
        adress:"8787 Central Street Scarsdale, NY 10583",
        type:"Apartment"  
    },
    {
        id:2,
        residentId: 1,
        adress:"7802 Prince Street Canfield, OH 44406",
        type:"Condo"  
    },
    {
        id:3,
        residentId: 2,
        adress:"15 Leeton Ridge Lane Mentor, OH 44060",
        type:"Townhouse"  
    },
    {
        id:4,
        residentId: 3,
        adress:"73 State St. Anchorage, AK 99504",
        type:"Villa"  
    }
]

export const dataResident: Resident[] = [
    {
      id: 1,
      name:"Sloane Pineda",
      age: 33,
      gender:"Male"
    },
    {
        id: 2,
        name:"Anabella Sullivan",
        age: 28,
        gender:"Male"
    },
    {
        id: 3,
        name:"Bryson Hunt",
        age: 23,
        gender:"Male" 
    }
  ]
  
