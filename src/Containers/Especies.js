import React, { Component, Fragment } from 'react'
import Menu from '../Components/Menu/Menu'
import Rodape from '../Components/Rodape/Rodape'
import { teste } from './utils'
import { withRouter } from 'react-router'
import './Especies.css'

class Especies extends Component {
  render () {
    return (
      <Fragment>
        <Menu />
        <div class='corpo-especies'>
          <div class='margin-corpo-especies'>
            <div class='textos'>
              <h2 class='subTitulo'>Espécies</h2>
              <div class='linha-horizontal'></div>
              <div class='card-flex'>
                {teste.map(item => (
                  <div class='card'>
                    <img class='image' src={item.imagem} />
                    <div class='conteudo-card'>
                      <div class='titulo-card'>{item.nome}</div>
                      <div class='texto-card'>{item.texto}</div>
                      <div class='ler-mais'>
                        <div class='texto-data-card'>Postado dia 12/04</div>
                        <button
                          class='label-ler-mais'
                          onClick={() =>
                            this.props.history.push(`/especies/${item.id}`)
                          }
                        >
                          Ler mais
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Rodape />
      </Fragment>
    )
  }
}

export default withRouter(Especies)
