import React from "react";

import axios from "axios";
import Standcard from "./StandCard";

class StandContent extends React.Component {
  constructor(props) {
    super(props)


    this.state = { persons: [], stand: {}, st: '', stdlist: '' }
    this.setStand.bind(this)
  }
  componentDidMount() {
    axios.get("https://jojo-api.herokuapp.com/jojostands").then((response) => {

      const persons = response.data
      const list = persons.map((item, x) => <li onClick={() => this.setStand(x)}>{item.name[0].toUpperCase()+item.name.substring(1)}</li>)
      let number=parseInt(Math.random()*persons.length)
      this.setState({ stand: persons[number], stdlist: list })
      this.setState({ persons });

    })

  }
  setStand(x) {
    this.setState({ st: 'filter' })
    setTimeout(() => {
      this.setState({ st: '' })
    }, 1000)
    let id = x;
    let std_temp = this.state.persons

    return this.setState({ stand: std_temp[id] })
  }
  search(word) {
    const stands = this.state.persons;
    const result = []
    for (let i in stands) {
      if (stands[i].name.includes(word.toLowerCase())) {
        result.push(stands[i])
      }
    }
    const newlist = result.map((item, index) => <li onClick={() => this.setStand(index)}>{item.name[0].toUpperCase()+item.name.substring(1)}</li>)
    return this.setState({ stdlist: newlist })
  }
  render() {


    return <div id="flexbox">
      <aside>
        <div className="standlist">
          <input type="text" name="standsearch" id="search" onChange={(event) => { this.search(event.target.value) }} />
          <ul>
            {this.state.stdlist}

          </ul>

        </div>
      </aside>
      <section id="section">

        <Standcard stand={this.state.stand} class={this.state.st} />
      </section>

    </div>
  }
}

export default StandContent