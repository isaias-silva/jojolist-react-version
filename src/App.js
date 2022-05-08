import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StandContent from "./components/StandContent";
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
render(){
  return <div className="conteudo">
  <Header/>
  <StandContent/>
<Footer/>
  </div>
}
}
export default App