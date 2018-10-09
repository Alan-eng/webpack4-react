import React from "react";
import ListItem from "../../components/listItem";
import { connect } from "react-redux";
import { getFilteredArticles } from "../../selectors"

const mapStateToProps = (state) => {
    return {
        filteredArticles: getFilteredArticles(state)
    }
}

const List = (props) => {
    return props.filteredArticles.map((article, index) => <ListItem key={index}>{article}</ListItem>); // containers should render only components, not <div> or any other native browser elements, for the purposes to switch to react Native (in that case all we need is to change only React components)
};

export default connect(mapStateToProps)(List);