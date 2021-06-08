import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Containers/Home'
import Sobre from '../Containers/Sobre'
import Especies from '../Containers/Especies'
import Especie from '../Containers/Especie'

export default function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/sobre' exact component={Sobre} />
      <Route path='/especies/:id' exact component={Especie} />
      <Route path='/especies' exact component={Especies} />
    </Switch>
  )
}
