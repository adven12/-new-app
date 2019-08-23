import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "./node_modules/react-router-dom";
import { connect } from 'react-redux';

class Login extends React.Component<any, any> {
textInput:any;
 state:{email:any, password:any} = {
    email: '',
    password: ''
    };

 todos:{id:any}[] = [
 {
   id:1
  },
  {
    id:2
  }
];
 todoItems:any[] = this.todos.map((todo) =>
 <p key={todo.id}>{todo.id}</p>
);


    handleEmailChange = (event: any) =>
    this.setState({email: event.target.value} as any);  

    handlePasswordChange = (event: any) =>
    this.setState({password: event.target.value as any}); 

  render() { 
    console.log(this.props.testStore);
    return (
      <div className="App">
        <header className="App-header">
        <h1>Login</h1>
        <input type="text" placeholder ="Login" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
        <input type="text" placeholder ="password" name="password" value={this.state.password}  onChange={this.handlePasswordChange } ref={(input) => {this.textInput = input}}/>
        <button type="button" onClick={this.handleLogin} >Enter</button>
        {this.todoItems}
        <div className= "Massage">
          {this.props.testStore.map((text:any, index:any) => 
            <p key={index}>{text}</p>
            )}
        </div>
        </header>
      </div>
    );
  }
    handleLogin = () => {
    console.log("EMail: " + this.state.email);
    console.log("Password: " + this.state.password);
    console.log("--- " + this.textInput.value);
  }

  }
  export default connect(
    state => ({
      testStore: state
    }),
    dispatch => ({
      // onAddText: (fde) => {
      //   dispatch({type: 'ADD_TEXT', payload: fde});
      // }
    })
  )(Login);
