import React, { Component, Fragment } from 'react'
import { Images, Colors } from '../../Themes'
import './Rodape.css'

class Rodape extends Component {
  render () {
    return (
      <div class='footer'>
        <footer>
          <div
            style={{
              backgroundImage: `url(${Images.logoUFSCarTrans.default})`
            }}
            class='logo_ufscar'
          >
            {' '}
            <p>UFSCar</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Rodape
