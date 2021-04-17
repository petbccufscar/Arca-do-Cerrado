import React, { Component, Fragment } from 'react'
import Menu from '../Components/Menu/Menu'
import './Sobre.css'

class Sobre extends Component {
  render () {
    return (
      <Fragment>
        <Menu />
        <div class='corpo'>
          <h2 class='titulo'>Sobre</h2>
          <div class='textos'>
            <h2 class='subTitulo'>Apresentação do site</h2>
            <div class='linha-horizontal'></div>
            <p class='conteudo'>
              Este site visa alcançar o maior número de pessoas na divulgação
              dos resultados do trabalho que realizamos na Atividade de Extensão
              A Arca do Cerrado, na Universidade Federal de São Carlos. <br />
              objetivos... Aqui, você vai encontrar um mapa interativo, em
              escala, que representa a localização de cada uma de nossas mudas.
              Para facilitar sua navegação, apresentamos uma imagem ilustrativa
              do mapa local. Ao escolher um dos quadrantes, você será
              direcionado para sua versão ampliada. Ali, se passar o mouse sobre
              um dos pontos, aparecerá uma pequena caixa com o nome da planta.
              Se clicar sobre um ponto, terá acesso a fotos e informações
              básicas da espécie. Essas informações estão disponíveis também na
              seção “espécies” do blog. <br />
              Em uma das seções do blog, “informações”, fornecemos dados
              interessantes sobre espécies presentes no fragmento na Ufscar que
              ainda não conseguimos reproduzir ou cultivar. <br />
              Divulgamos na seção de “notícias” do blog as novidades de
              germinação, plantio, florada, frutificação de nossas espécies etc.
              <br />
              Costumamos visitar o local frequentemente para as atividades e
              você pode saber a data do próximo encontro na agenda. <br />
              Se tiver dúvidas, sugestões ou quiser colaborar conosco, entre em
              contato.
            </p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Sobre
