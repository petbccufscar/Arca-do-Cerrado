import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Containers/Home'
import Sobre from '../Containers/Sobre'

export default function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/sobre' exact component={Sobre} />
    </Switch>
  )
}
