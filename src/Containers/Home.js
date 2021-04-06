import React, { Component, Fragment } from 'react'
import Menu from '../Components/Menu/Menu'
import Carousel from '../Components/Carousel/Carousel'
import Body from '../Components/Corpo/Body'
import Rodape from '../Components/Rodape/Rodape'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <div style={{ margin: -10 }}>
          <Carousel />
          <Menu />
          <Body />
          <Rodape />
        </div>
      </Fragment>
    )
  }
}

export default Home
