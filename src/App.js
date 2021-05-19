import React,{Component} from 'react'


//Rutas
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Componentes;
import Home from './components/Home';
import Productos from './components/Productos';
import Direccion from './components/Direccion';
import DetalleInstrumento from './components/DetalleInstrumento';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
      <Route exact path="/home"  component={Home}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route path="/productos" component={Productos}></Route>
      <Route path="/direccion" component={Direccion}></Route>
      <Route path="/detalleinstrumento/:id" component={DetalleInstrumento}></Route>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
