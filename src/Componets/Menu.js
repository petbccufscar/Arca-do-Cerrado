import React, { Component, Fragment } from 'react'
import './Menu.css'
import Images from '../Themes/Images'

class Menu extends Component {
  render () {
    return (
      <Fragment>
        <text>Tela inicial</text>
        <header className='App-header'>
          <div class='menu'>
            <div class='botoes'>
              <button class='bto'>Mapa</button>
              <button class='bto'>Blog</button>
              <button class='bto'>Faça Parte</button>
              <button class='bto'>Sobre</button>
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

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </Fragment>
    )
  }
}

export default Menu
