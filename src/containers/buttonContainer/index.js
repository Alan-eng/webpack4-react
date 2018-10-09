import React from "react";
import style from './index.css';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return state
}

const ButtonRed = (props) => {
    return <button className={style.buttonRed}>{props.articles[0]}ButtonRed</button>;
  };

export default connect(mapStateToProps)(ButtonRed);