import {Component} from 'react';
import { Redirect } from "react-router-dom";
import camion from '../assets/img/camion.png'


class Carta extends Component{
  constructor(){
    super();
    this.state = {
      redirect:null
    }
  }
  render(){
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    function envio(envio){
      if (envio === "G") {
        return (
          <p className="gratis"><img alt="camion" src={camion} ></img>Envio gratis a todo el pais</p>)
        }else{
          return (
            <p className="pago">Costo de Envio Interior de Argentina: ${envio}</p>)
          }
        }
        return(
          <article className="carta mt-5 mb-5">
          <div className="cartaimg">
          <img src={require(`../assets/img/${this.props.imagen.toLowerCase()}`).default} className="imgInstument" alt="Imagen instrumento"
          onClick={(e)=>this.setState({redirect:"/detalleinstrumento/"+this.props.id})}></img>
          </div>
          <div className="cartainfo">
          <h5>{this.props.titulo}</h5>
          <h4>${this.props.precio}</h4>
          {envio(this.props.envio)}
          <p>{this.props.vendidos} Vendidos</p>
          </div>
          </article>
        )
      }
    }

    export default Carta;
