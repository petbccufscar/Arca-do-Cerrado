import React, { Component, Fragment } from 'react'
import './Menu.css'
import Images from '../../Themes/Images'
import { withRouter } from 'react-router'
import { menuItems } from './utils'

class Menu extends Component {
  constructor (props) {
    super(props)

    const current = props.history.location.pathname

    this.state = { current }
  }

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
              {menuItems.map(item =>
                this.state.current === `${item.pathname}` ? (
                  <button
                    class='bto_active'
                    onClick={() => this.props.history.push(item.pathname)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    class='bto'
                    onClick={() => this.props.history.push(item.pathname)}
                  >
                    {item.label}
                  </button>
                )
              )}
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

export default withRouter(Menu)
