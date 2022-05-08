import axios from "axios"

const get= function(){
    
   axios.get("https://jojo-api.herokuapp.com/jojostands").then((data)=>{return data.data})
}
  export default get;