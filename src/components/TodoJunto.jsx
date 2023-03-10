import React, {Component} from "react";

class TodoJunto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        };
    }

    incrementar = () => {
        this.setState({ age: this.state.age + 1 });
    }

    render () {
        const {firstName, lastName, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.incrementar}>Bithday Button For {firstName} {lastName} </button>
            </div>
        )
    }
}

export default TodoJunto;