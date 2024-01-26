import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    handleClick = (e) => {
        this.setState({ input: this.state.input + e.target.name });
    };

    calculate = () => {
        try {
            this.setState({
                input: eval(this.state.input).toString()
            });
        } catch (error) {
            this.setState({ input: "Error" });
        }
    };

    clear = () => {
        this.setState({ input: '' });
    };

    render() {
        return (
            <div className="calculator">
                <form>
                    <input type="text" value={this.state.input} readOnly />
                </form>
                <div className="keypad">
                    <button onClick={this.clear} id="clear">Clear</button>
                    <button name="+" onClick={this.handleClick}>+</button>
                    <button name="-" onClick={this.handleClick}>-</button>
                    <button name="*" onClick={this.handleClick}>&times;</button>
                    <button name="/" onClick={this.handleClick}>&divide;</button>
                    <button name="7" onClick={this.handleClick}>7</button>
                    <button name="8" onClick={this.handleClick}>8</button>
                    <button name="9" onClick={this.handleClick}>9</button>
                    <button name="4" onClick={this.handleClick}>4</button>
                    <button name="5" onClick={this.handleClick}>5</button>
                    <button name="6" onClick={this.handleClick}>6</button>
                    <button name="1" onClick={this.handleClick}>1</button>
                    <button name="2" onClick={this.handleClick}>2</button>
                    <button name="3" onClick={this.handleClick}>3</button>
                    <button name="0" onClick={this.handleClick}>0</button>
                    <button name="." onClick={this.handleClick}>.</button>
                    <button onClick={this.calculate} id="result">=</button>
                </div>
            </div>
        );
    }
}

export default Calculator;
