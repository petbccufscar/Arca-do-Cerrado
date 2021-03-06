import React, { Component } from 'react'
import './Body.css'
import { Images } from '../../Themes'
//import Images from '../Themes/Images'

class Body extends Component {
  handleSubimit (event) {
    alert('Mensagem enviada.')
    event.preventDefault()
  }

  render () {
    return (
      <div class='corpo'>
        <div class='acessos'>
          <div class='acesso_agen'>
            <button
              style={{ backgroundImage: `url(${Images.calendario.default})` }}
              class='bto_Icone'
            ></button>
            <h2 class='titulo_Icone'>Agenda</h2>
            <p class='text_Icone'>
              Visualize os próximos compromissos marcados para visitar o Pomar.
            </p>
            <button class='bto_acesso'>Acesse a agenda</button>
          </div>
          <div class='acesso_mapa'>
            <button
              style={{ backgroundImage: `url(${Images.planeta.default})` }}
              class='bto_Icone'
            ></button>
            <h2 class='titulo_Icone'>Mapa Interativo</h2>
            <p class='text_Icone'>
              Visualize as espécies plantadas no cerrado de São Carlos através
              do Mapa Interativo.
            </p>
            <button class='bto_acesso'>Acesse a agenda</button>
          </div>
          <div class='acesso_esp'>
            <button
              style={{ backgroundImage: `url(${Images.planta.default})` }}
              class='bto_Icone'
            ></button>
            <h2 class='titulo_Icone'>Espécies</h2>
            <p class='text_Icone'>
              Visualize as informações das espécies do Mapa Interativo.
            </p>
            <button class='bto_acesso'>Acesse a agenda</button>
          </div>
        </div>

        <div class='sobre_pomar'>
          <h2 class='titu'>Sobre o Pomar</h2>
          <p class='text_apresen'>
            Se você já conhece o fragmento de Cerrado na Ufscar - ou não… Se
            você já tem alguma experiência com formação de mudas - ou não...
            ender a conviver melhor com a vegetação e os animais e que cada um
            de nós pode fazer nossa parte, será bem-vindo/a a trabalhar conosco!
          </p>
        </div>
        <div class='faca_parte'>
          <h2 class='titu'>Faça Parte</h2>
          <p class='text_faca'>
            Se você já conhece o fragmento de Cerrado na Ufscar - ou não… Se
            você já tem alguma experiência com formação de mudas - ou não...
            Este projeto é para você! Independente de conhecimento ou
            experiência, o que vale é a motivação! Se você imagina que um mundo
            mais cheio de vida para todos depende da melhoria das nossas
            relações com o entorno natural, que as cidades precisam aprender a
            conviver melhor com a vegetação e os animais e que cada um de nós
            pode fazer nossa parte, será bem-vindo/a a trabalhar conosco!
          </p>
          <form class='contato' onSubmit={this.handleSubimit} method='post'>
            <div class='ordenacao'>
              <div class='posi_nome'>
                <input type='text' class='camp_nome' placeholder='Nome' />
              </div>
              <div class='posi_email'>
                <input type='email' class='camp_email' placeholder='E-mail' />
              </div>
            </div>
            <label class='posi_msg'>
              <textarea class='camp_msg' placeholder='Mensagem'></textarea>
            </label>

            <button type='submit' class='bto_msg' value='Enviar sua Mensagem'>
              Enviar sua mensagem
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Body
