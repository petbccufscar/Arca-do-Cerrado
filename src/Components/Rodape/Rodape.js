import React, { Component, Fragment } from 'react'
import { Images, Colors } from '../../Themes'
import './Rodape.css'

class Rodape extends Component {
  render () {
    return (
      <div class='footer'>
        <div
          style={{
            backgroundImage: `url(${Images.logoUFSCarTrans.default})`
          }}
          class='logo_ufscar'
        ></div>
        <div class='contato_rodape'>
          <div class='titulo-contato'>Contato:</div>
          <div class='text-contato'>pomardocerrado@gmail.com</div>
        </div>
      </div>
    )
  }
}

export default Rodape
