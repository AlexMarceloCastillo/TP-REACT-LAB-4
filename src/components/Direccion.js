import {Component} from 'react'


class Direccion extends Component{
  render(){
    return(
      <div className="divmap">
      <iframe key="map" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.4482396834796!2d-68.84046638495566!3d-32.88631517616633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091ed2dd83f7%3A0xf41c7ab7e3522157!2sAv.%20San%20Mart%C3%ADn%20%26%20Av.%20Las%20Heras%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1588292422652!5m2!1ses!2sar"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    )
  }
}

export default Direccion;
