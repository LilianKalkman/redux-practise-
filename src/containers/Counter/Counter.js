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
                <button onClick={this.props.showresult}>Show Result</button>
                <ul>
                  {this.props.results.map(result =>
                  (<li
                    key={result.id}
                    onClick={this.props.deleteresult}>{result.value}</li>))}
                  <li>result: {Object.keys(this.props.results).join(' , ')}</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    results: state.results
  };
};
// zorgt dat je toegang hebt tot de state via props

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT'}),
    add: () => dispatch({type: 'ADD', value: 5}),
    subtract: () => dispatch({type: 'SUBTRACT', value: 5}),
    showresult: () => dispatch({type: 'SHOW_RESULT'}),
    deleteresult: () => dispatch({type: 'DELETE_RESULT'})
  }
}
// zorgt dat je toegang hebt tot de actions via props

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
