import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const Button = (props: any) => {
  return <div onClick={props.onClick}>Buttoun</div>;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick: () => {
    dispatch({ type: "LOL2" });
  }
});

export default connect(null, mapDispatchToProps)(Button);
