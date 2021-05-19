import {Component} from 'react'
import {instrumentos} from '../assets/data/instrumentos.json';
import Carta from './Carta';


class Productos extends Component{
  constructor(){
    super();
    this.state = {
      instrumentos
    }
  }
  render(){
    const instrumentos = this.state.instrumentos.map((instrumento,i) => {
      return <Carta
      key={instrumento.id}
      id={instrumento.id} titulo={instrumento.instrumento}
      precio={instrumento.precio}
      imagen={instrumento.imagen}
      envio={instrumento.costoEnvio}
      vendidos={instrumento.cantidadVendida}
      />
    })
    return(
      <div className="instruments">{instrumentos}</div>
    )
  }
}

export default Productos;
