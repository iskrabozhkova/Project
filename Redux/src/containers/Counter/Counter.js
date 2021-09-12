import React, { Component } from 'react';
import * as actionTypes from '../../store/actions'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux'

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 10" clicked={() => this.props.addCounter()}  />
                <CounterControl label="Subtract 10" clicked={() => this.props.substractCounter()}  />
                <hr/>
                    <button onClick={() => this.props.onResult(this.props.ctr)}>Result</button>
                        <ul>
                            {this.props.storedResults.map(res => (
                                <li key={res.id} onClick={() => this.props.onDelete(res.id)}>{res.value}</li>
                            ))}
                        </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        addCounter: () => dispatch({type: actionTypes.ADD, value: 10}),
        substractCounter: () => dispatch({type: actionTypes.SUBSTRACT, value: 10}),
        onResult: (result) => dispatch({type: actionTypes.RESULT, result: result}),
        onDelete: () => dispatch({type: actionTypes.DELETE})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);