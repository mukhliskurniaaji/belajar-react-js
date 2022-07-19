import React from 'react';
import {createRoot} from 'react-dom/client';

function CounterDisplay({count}) {
    return <p>{count}</p>;
}

function IncraseButton({increase}) {
    return(
        <div>
            <button onClick={increase}>+ increase</button>
        </div>
    )
}

function ResetButton({ reset }) {
    return (
      <div>
        <button onClick={reset}>reset</button>
      </div>
    );
  }


class CounterApp extends React.Component {
    constructor(props)  {
        super(props);

        // inisialisasi data pada state :
        this.state = {
            count : 0
        };

        // binding event handler
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    onIncreaseEventHandler(){
        this.setState((previousState)=>{
            return {
                count: previousState.count + 1
            }
        })
    }

    onResetEventHandler(){
        this.setState ({
            count : 0
        })
    }

    render() {
        return (
          <div>
            <div>
                <button onClick={this.onIncreaseEventHandler}>Increase</button>
            </div>

            <p>{this.state.count}</p>
            
            <div>
                <button onClick={this.onResetEventHandler}>reset</button>
            </div>
          </div>
        );
      }
}

const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />)