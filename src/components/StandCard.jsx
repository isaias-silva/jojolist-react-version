
import React from 'react'
import loading from '../img/Loading.png'
import power from '../img/power.png'
class Standcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        }
    draw(canvas,ctx) {
      
        let p = this.props.stand.potential.split(",").map((x) => { return parseInt(x) })
        let pr = this.props.stand.precision.split(",").map((x) => { return parseInt(x) })
        let dur = this.props.stand.durability.split(",").map((x) => { return parseInt(x) })
        let rag = this.props.stand.range.split(",").map((x) => { return parseInt(x) })
        let vel = this.props.stand.speed.split(",").map((x) => { return parseInt(x) })
        let power = this.props.stand.power.split(",").map((x) => { return parseInt(x) })
    
        
        ctx.fillStyle = this.props.stand.color
        //potencial
        ctx.clearRect(0,0,300,300) 
        ctx.beginPath()
        ctx.lineTo(p[0], p[1]);

        ctx.lineTo(pr[0], pr[1]);
        //precision

        ctx.lineTo(dur[0], dur[1]);
        //durabilidade

        ctx.lineTo(rag[0], rag[1]);
        //range

        ctx.lineTo(vel[0], vel[1]);
        //velocidade

        ctx.lineTo(power[0], power[1]);
        //poder

        ctx.lineTo(p[0], p[1]);

        ctx.fill();
        ctx.closePath();
        ctx.stroke();
            
        
    }
   componentDidUpdate(){
  
    const canvas = this.refs.status;
    const ctx = canvas.getContext('2d')
   
        this.draw(canvas,ctx)
   }
    render() {
        let imageurl
        imageurl=this.props.stand.img
        if(imageurl===undefined){
            imageurl=loading
        }
        return <div id="standcard" className={this.props.class} style={this.props.styled}>
            <div class="bloco">
                <div id="standimage">
                    <img src={imageurl} alt="imagestand" id="img" />
                </div>
            </div>
            <div class="bloco second">
                <div id="standstats">
                    <img src={power} alt="" />
                    <canvas ref="status" id="status">
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