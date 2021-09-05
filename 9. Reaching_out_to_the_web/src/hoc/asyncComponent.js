import React, {Component} from 'react'
import { render } from 'react-dom'

const asyncComponent = (importComponent) => {
    return class extends Component{
        state = {
            component: null
        }
    }
    render(){
        const C = this.state.component;
        return C ? <C {...}>
    }
}