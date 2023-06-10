import { useEffect, useState } from "react";
import axios from "axios";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Navbar from "./Components/Navber";
import Photo from "./Components/Photo";

function App() {
  const [isLoading, setIsLoaading] = useState(true)
  const [data , setData] = useState([])
  useEffect(()=>{
    setIsLoaading(true)
    const getData = async () =>{
      const response = await axios.get("https://ybiapi.fresh-app.com/api/demo_profile")
      setData(response.data)
      setIsLoaading(false)
    }
    getData()
  }, [])
  if (isLoading) {
    return "loading"
  }
  

  return (
    <div className="App">
      <Header image={data.images_list[0]} />
      <Content data={data}/>
      <Photo images={data.images_list}/>
      <Navbar />
    </div>
  );
}

export default App;
