import React, { Component, Fragment } from 'react'
import './Menu.css'
import Images from '../../Themes/Images'
import { Redirect } from 'react-router'

class Menu extends Component {
  render () {
    return (
      <Fragment>
        <header className='App-header'>
          <div class='menu' id='menu'>
            <img
              class='logo'
              src={Images.logoArca.default}
              alt='Italian Trulli'
            />
            <div class='botoes'>
              <button
                class='bto'
                id='bto_mapa'
                onClick={() => <Redirect to={`/`} />}
              >
                Início
              </button>
              <button
                class='bto'
                id='bto_mapa'
                onClick={() => <Redirect to={`/sobre`} />}
              >
                Sobre
              </button>
              <button class='bto' id='bto_mapa'>
                Mapa Interativo
              </button>
              <button class='bto' id='bto_blog'>
                Blog
              </button>
              <button class='bto' id='bto_faca_parte'>
                Espécies
              </button>
              <button class='bto' id='bto_sobre'>
                Agenda
              </button>
              <button class='bto' id='bto_faca_parte'>
                Faça Parte
              </button>
            </div>

            <button
              style={{ backgroundImage: `url(${Images.procurar.default})` }}
              class='bto_pesq_adic'
            />
          </div>
        </header>
      </Fragment>
    )
  }
}

export default Menu
