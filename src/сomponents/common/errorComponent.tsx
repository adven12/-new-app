import React, { Dispatch } from "react";
import { Redirect } from "react-router";

import { connect } from "react-redux";
//import { onErrorOccured } from "@redux/common/actions";
import { AnyAction, bindActionCreators } from "redux";



export interface ErrorProps {
  error?: any;
}

const style = {
  color: "red"
};

class ErrorComponent extends React.Component<ErrorProps> {
  render() {
    console.log(this.props.error);
    
    return <h4 style={style}>{this.props.error.error}</h4>;
  }
}

const mapStateToProps = (state: any) => ({
  error: state.error
});

export const Error = connect(mapStateToProps)(ErrorComponent);