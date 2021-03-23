import React, { Component, Fragment } from 'react'
import './Menu.css'
import Images from '../../Themes/Images'

class Menu extends Component {
  teste = () => {
    document.getElementById('menu').style.backgroundColor = 'white' // ou a cor que quiser
    document.getElementById('bto_mapa').style.color = 'black' // ou a cor que quiser
    document.getElementById('bto_blog').style.color = 'black' // ou a cor que quiser
    document.getElementById('bto_faca_parte').style.color = 'black' // ou a cor que quiser
    document.getElementById('bto_sobre').style.color = 'black' // ou a cor que quiser
    document.getElementById('menu').style.boxShadow = '8px 8px 12px grey'
  }
  render () {
    return (
      <Fragment>
        <header className='App-header'>
          {(window.onscroll = this.teste)}
          <div class='menu' id='menu'>
            <div class='botoes'>
              <button class='bto' id='bto_mapa'>
                Mapa
              </button>
              <button class='bto' id='bto_blog'>
                Blog
              </button>
              <button class='bto' id='bto_faca_parte'>
                Faça Parte
              </button>
              <button class='bto' id='bto_sobre'>
                Sobre
              </button>
            </div>

            <form class='pesquisa'>
              <input
                class='pesq_campo'
                type='search'
                name='Busca'
                placeholder='Busca'
              />

              <button
                style={{ backgroundImage: `url(${Images.procurar.default})` }}
                class='bto_pesq_adic'
              />
            </form>
          </div>
        </header>
      </Fragment>
    )
  }
}

export default Menu
