import React, { Component, Fragment } from 'react'
import Menu from '../Components/Menu/Menu'
import Rodape from '../Components/Rodape/Rodape'
import { teste } from './utils'
import { getNavigationData, scrollTop } from '../Lib/Navigation'
import './Especies.css'
import { Images } from '../Themes'

class Especie extends Component {
  constructor (props) {
    super(props)

    const { id } = getNavigationData(this.props)

    this.state = {
      id
    }
  }

  render () {
    const especie = teste[this.state.id]
    return (
      <Fragment>
        <Menu />
        <div class='flex'>
          <div class='corpo-especies'>
            <div class='margin-corpo-especies'>
              <div class='textos'>
                <div class='titulo-container'>
                  <h2 class='subTitulo'>{especie.nome}</h2>
                  <button type='submit' class='bto_mapa'>
                    Visualizar planta no mapa
                  </button>
                </div>
                <div class='intro'>{especie.intro}</div>
                <img class='image-especie' src={especie.imagem} />
                <div class='texto'>{especie.texto}</div>
                <div class='up-container'>
                  <button
                    type='submit'
                    class='bto_up'
                    onClick={() => scrollTop()}
                  >
                    <img class='image-up' src={Images.up.default} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class='rodape-flex'>
            <Rodape />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Especie
