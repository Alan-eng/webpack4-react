import React from "react";
import { connect } from "react-redux";
import addArcitcle from "../../actions"

const mapDispatchToProps = dispatch => {
    return {
        setAddArcitcle: article => dispatch(addArcitcle(article))
    }
}

class SimpleForm extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            inputText: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ inputText: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.setAddArcitcle(this.state.inputText);
        this.setState({inputText: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="formControl"
                        id="title"
                        value={this.state.inputText}
                        onChange={this.handleChange}
                    />
                    <button type="submit" className="submitButton">
                        SAVE
                    </button>
                </div> 
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(SimpleForm);