import * as React from "react";
import { LoginState,  LoginRequest } from "../../redux/login/types";
import '../../rootStyle.css'
import { Redirect } from 'react-router-dom'
import { Error } from "../common/errorComponent"
 
export interface LoginProps {
  doLogin: (data: LoginRequest) => object;
  isLog: boolean
  email: string
  password: string
}

export class LoginComponent extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    email: "",
    password: "",
    isLog: false,
    error: '',
    data:[],
    test:"",
  };
  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any);

  login = () => {
    const { doLogin } = this.props;
    console.log('this.state.email = ', this.state.email);
    
    doLogin({ email: this.state.email, password: this.state.password });
  };

  render() {
    if (this.props.isLog) {
      return <Redirect to="/users" />;
    }
    return (
        <div className="loginComponent">
         <Error/>
        
          <div className="loginComponent-h4">
            <h4>Enter your e-mail and password  </h4>
          </div>
          <div>
            <input
              className="loginComponent-input"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handle}
            />
          </div>
          <div>
            <input
              className="loginComponent-input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handle}
            />
          </div>
          <div>
            <button onClick={() => this.login()} className="loginComponent-button">Login</button>
          </div>
        </div>
    );
  }
}
