import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ToastProvider} from "lumina-design"

ReactDOM.render(<ToastProvider><App /></ToastProvider>, document.getElementById('root'))
