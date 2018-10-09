import React from "react";
import { connect } from "react-redux";
import { setKeyword } from "../../actions"
import { getKeyword } from "../../selectors"

const mapDispatchToProps = dispatch => {
    return {
        setKeyword: keyword => dispatch(setKeyword(keyword))
    }
}

const mapStateToProps = (state) => {
    return {
        keyword: getKeyword
    }
}

class FilterByKeywordContainer extends React.Component {
    constructor (props) {
        super(props);
        
        // this.state = {
        //     inputText: ""
        // };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.setKeyword(event.target.value)
        // this.setState({ inputText: event.target.value })
    }

    render() {
        return (
            <form>
                <div className="formGroup">
                    <label htmlFor="title">Keyword Here:</label>
                    <input
                        type="text"
                        className="formControl"
                        id="title"
                        value={this.props.keyword}
                        onChange={this.handleChange}
                    />
                </div> 
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(FilterByKeywordContainer);