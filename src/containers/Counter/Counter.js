import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.increment} />
                <CounterControl label="Decrement" clicked={this.props.decrement}  />
                <CounterControl label="Add 5" clicked={this.props.add}  />
                <CounterControl label="Subtract 5" clicked={this.props.subtract}  />
                <br />
                <button onClick={() => this.props.showresult(this.props.counter)}>Show Result</button>
                <ul>
                  {this.props.results.map(result =>
                  (<li
                    key={result.id}
                    onClick={() => this.props.deleteresult(result.id)}>{result.value}</li>))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    counter: state.ctr.counter,
    results: state.res.results
  };
};
// zorgt dat je toegang hebt tot de state via props

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT'}),
    add: () => dispatch({type: 'ADD', value: 5}),
    subtract: () => dispatch({type: 'SUBTRACT', value: 5}),
    showresult: (result) => dispatch({type: 'SHOW_RESULT', result: result}),
    deleteresult: (id) => dispatch({type: 'DELETE_RESULT', id: id})
  }
}
// zorgt dat je toegang hebt tot de actions via props

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
