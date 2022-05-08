import React from "react";

import axios from "axios";
import Standcard from "./StandCard";

class StandContent extends React.Component {
  constructor(props) {
    super(props)


    this.state = { persons: [], stand: {},st:'' }
    this.setStand.bind(this)
  }
  componentDidMount() {
    axios.get("https://jojo-api.herokuapp.com/jojostands").then((response) => {

      const persons = response.data
      this.setState({ stand: persons[1] })
      this.setState({ persons });

    })

  }
  setStand(x) {
    this.setState({st:'filter'})
    setTimeout(()=>{  this.setState({st:''})
  },1000)
    let id=x;
    let std_temp=this.state.persons
  
    return this.setState({stand:std_temp[id]})
  }
  render() {


    return <div id="flexbox">
      <aside>
        <div className="standlist">

          <ul>
            {this.state.persons.map((person, x) => <li onClick={() => this.setStand(x)}>{person.name}</li>)}

          </ul>

        </div>
      </aside>
      <section id="section">
      
        <Standcard stand={this.state.stand} class={this.state.st}/>
      </section>

    </div>
  }
}

export default StandContent