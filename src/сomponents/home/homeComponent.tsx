import React from "react";
import { HomeState } from "../../redux/home/types";
import { Product } from "../../types/product";
//import { doInit } from "@redux/home/actions";
import HeaderContainer from "../../сontainers/headerContainer"
import { error } from "../../redux/common/reducer";
import { Error } from "../common/errorComponent"
import { RootState } from "../../redux/rootReducer";

export interface HomeProps {
  token: any,
  isLog: boolean,
  error: string,
  data: any,
  test: string,
}

export class HomeComponent extends React.Component<HomeProps, HomeState> {
  state: any = {
    token: '',
    isLog: false,
    error: "",
    data: "",
    test: "",
      
  };

  render() {
    return (
      <div className="homeComponent">
              
          {this.props.isLog ? 
          (
          <div className="homeComponent-users">
          <h3 className="homeComponent-users-name">User {this.props.data.name}</h3>
          <p className="homeComponent-users-data">E-mail: {this.props.data.email}</p>
          <p className="homeComponent-users-data">Password: {this.props.data.password}</p>
          </div>
          ) :
          (
          <div className="empty">

          </div>
          )
          }
          </div>
    );
  }
}


