import React, { Component, Fragment } from 'react'
import Menu from '../Components/Menu/Menu'
import Rodape from '../Components/Rodape/Rodape'
import { teste } from './utils'
import './Especies.css'

class Especie extends Component {
  render () {
    return (
      <Fragment>
        <Menu />
        <div class='corpo-especies'>
          <div class='margin-corpo-especies'>
            <div class='textos'>
              <h2 class='subTitulo'>Espécies</h2>
            </div>
          </div>
        </div>
        <Rodape />
      </Fragment>
    )
  }
}

export default Especie
