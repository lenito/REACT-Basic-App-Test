import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

const store = createStore(reducers)

//renderiza na div 'app' do index.html
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))

