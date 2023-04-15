import React from 'react';

class ClassState extends React.Component {

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    inc() {
        this.setState({
            count: this.state.count + 1
        })
    }
    dec() {
        this.setState({
            count: this.state.count - 1
        })
    }
    reset() {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <>
                <div>{this.state.count}</div>
                <div>
                    <button onClick={this.inc.bind(this)}>Increment</button>
                    <button onClick={this.dec.bind(this)}>Decrement</button>
                    <button onClick={this.reset.bind(this)}>Reset</button>
                </div>
            </>
        )
    }
}

export default ClassState;