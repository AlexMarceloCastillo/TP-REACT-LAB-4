import {Component} from 'react'
import camion from '../assets/img/camion.png'
//Bootstrap
import Button from 'react-bootstrap/Button';
//Datos
import {instrumentos} from '../assets/data/instrumentos.json';


class DetalleInstrumento extends Component{
  constructor(){
    super();
    this.state = {
      instrumentos
    }
  }
  render(){
    const id = this.props.match.params.id;
    var instrumentoElegido = instrumentos.filter(instrumento => instrumento.id == this.props.match.params.id );
    function envio(envio){
      if (envio === "G") {
        return (
          <p className="gratis"><img alt="camion" src={camion} ></img>Envio Gratis</p>)
        }else{
          return (
            <p className="pago">Costo de Envio Interior de Argentina: ${envio}</p>)
          }
        }
        return(
          <div className="detailInstrument">
          <div className="imgDescript float-left">
          <img src={require(`../assets/img/${instrumentoElegido[0].imagen}`).default}></img>
          <p>Descripcion:</p>
          <p>{instrumentoElegido[0].descripcion}</p>
          </div>
          <div className="propInstrument float-right">
          <p>{instrumentoElegido[0].cantidadVendida} vendidos</p>
          <h4>{instrumentoElegido[0].instrumento}</h4>
          <h2>${instrumentoElegido[0].precio}</h2>
          <p>Marca: {instrumentoElegido[0].marca}
          <br></br>
          Modelo: {instrumentoElegido[0].modelo}
          </p>
          <p>Costo Envio:</p>
          {envio(instrumentoElegido[0].costoEnvio)}
          <Button className="btnbuy mt-5" variant="outline-primary" size="sm">Agregar al Carrito</Button>
          </div>
          </div>
        )
      }
    }

    export default DetalleInstrumento;
