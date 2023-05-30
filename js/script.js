const fetchData = async () => {
    let data = {}
    const res = await fetch("./data.json")
    const d = await res.json()
    return data = d 
}



fetchData().then(data =>  data.forEach(element => {
  console.log(element.category)  
  console.log(element.score)  
  console.log(element.icon)  
}))

const calculateResults = () => {
    
}