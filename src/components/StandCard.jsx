
import React from 'react'
class Standcard extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return <div id="standcard" className={this.props.class} style={this.props.styled}>
            <div class="bloco">
                <div id="standimage">
                    <img src={this.props.stand.img} alt="imagestand" id="img" />
                </div>
            </div>
            <div class="bloco second">
                <div id="standstats">
                    <img src="" alt="" />
                    <canvas id="status">
                    </canvas>
                </div>
                <div id="standinfo">
                    <p><b>user:</b>  {this.props.stand.user}</p>
                    <p><b>name:</b>  {this.props.stand.name}</p>
                    <p><b>skill:</b>  {this.props.stand.desc}</p>
                </div>
            </div>
        </div>
    }
}
export default Standcard