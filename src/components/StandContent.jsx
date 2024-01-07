import React from "react";

import axios from "axios";
import Standcard from "./StandCard";
import arrow from "../img/Loading.png";
class StandContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { persons: [], stand: {}, st: "", stdlist: "", err: null };
    this.setStand.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/stands/get")
      .then((response) => {
        const persons = response.data;
        const list = persons.map((item, x) => (
          <li
            onClick={() => {
              return this.setStand(x);
            }}
          >
            {item.name[0].toUpperCase() + item.name.substring(1)}
          </li>
        ));
        let number = parseInt(Math.random() * persons.length);
        this.setState({ stand: persons[number], stdlist: list });
        this.setState({ persons });
      })
      .catch((err) => {
        this.setState({ err: "init a jojoapi in localhost!" });
      });
  }
  setStand(x) {
    this.setState({ st: "filter" });
    setTimeout(() => {
      this.setState({ st: "" });
    }, 1000);
    let id = x;
    let std_temp = this.state.persons;

    return this.setState({ stand: std_temp[id] });
  }
  search(word) {
    const stands = this.state.persons;
    const result = [];
    for (let i in stands) {
      if (stands[i].name.includes(word.toLowerCase())) {
        stands[i].maskindex = i;
        result.push(stands[i]);
      }
    }
    const newlist = result.map((item, index) => (
      <li
        onClick={() => {
          return this.setStand(item.maskindex);
        }}
      >
        {item.name[0].toUpperCase() + item.name.substring(1)}
      </li>
    ));
    return this.setState({ stdlist: newlist });
  }
  render() {
    if (this.state.stand.name === undefined) {
      return (
        <>
          {this.state.err ? (
            <section className="warking">
                 <p>{this.state.err}</p>
            </section>
         
          ) : (
            <div className="load">
              <img class="load" src={arrow} alt="" />
            </div>
          )}
        </>
      );
    }
    return (
      <div id="flexbox">
        <aside>
          <div className="standlist">
            <input
              type="text"
              name="standsearch"
              id="search"
              onChange={(event) => {
                this.search(event.target.value);
              }}
            />
            <ul>{this.state.stdlist}</ul>
          </div>
        </aside>
        <section id="section">
          <Standcard stand={this.state.stand} class={this.state.st} />
        </section>
      </div>
    );
  }
}

export default StandContent;
