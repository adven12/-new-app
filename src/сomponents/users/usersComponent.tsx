import React from "react";
import { UsersState, UsersRequest } from "../../redux/users/types";
// import { dousers } from "./redux/users/actions";
// import HeaderContainer from "../../сontainers/headerContainer"
// import { error } from "../../redux/common/reducer";
// import { Error } from "../common/errorComponent"
import { RootState } from "../../redux/rootReducer";

export interface UsersProps {
  doUsers: (dataUsers: UsersRequest) => object;
  isLog: boolean,
  error: string,
  dataUsers: any,
}

export class UsersComponent extends React.Component<UsersProps, UsersState> {
  state: any = {
    // isLog: false,
    error: "",
    dataUsers: "",
      
  };
  // registration = () => {
  //   console.log(this.state);
    
  //   const { doUsers } = this.props;
  //   doUsers();
  //   this.getState(this.props);
  // };
  load = () => {
    const { doUsers } = this.props;
    this.setState({ dataUsers: null });
  }

  render() {  
    console.log(this.props.dataUsers);
    console.log(this.props.isLog);
    return (
      <div className="usersComponent">
              
          {/* {this.props.isLog ? 
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
          } */}
          <p>dsfcsdvdswv</p>
          <button onClick={() => this.load()} className="loginComponent-button">Login</button>
          </div>
    );
  }
}


