import React from "react";
import ListItem from "../../components/listItem"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

const List = (props) => {
    return props.articles.map((article, index) => <ListItem key={index}>{article}</ListItem>); // containers should render only components, not <div> or any other native browser elements, for the purposes to switch to react Native (in that case all we need is to change only React components)
};

export default connect(mapStateToProps)(List);