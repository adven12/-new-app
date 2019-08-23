import React from "react";
import { Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { HeaderState,  HeaderRequest } from "../../redux/header/types";


export interface HeaderProps {
  doLogin: (data:any) => object;
  isLog: boolean,
  data: any,
}

const  HeaderComponent: React.FC = (props:any) => {
  const state: HeaderState = {
    isLog: false,
    data: {
      role: "",
    },
  };

  const { doLogin } = props;

  function logout()  {
    localStorage.clear();
       doLogin({isLog: false});  
       console.log(props.isLyog);
        
    }
    
    
    console.log(state.isLog);
  
    console.log("--",props.data);
    console.log("-",props.isLog);
    
     return (
      <div className="headerComponent">
        {/* {!this.props.isLog ? :}  */}
        {props.isLog  && props.data.role === "admin" ?
          (
                 <header className="headerComponent-header">
                   <Link className="headerComponent-link" to="/home">Users</Link>
                   <Link className="headerComponent-link" to="/home">Products</Link>
                   <Link onClick={() => logout()} className="headerComponent-link headerComponent-a" to="/">Logout</Link>
                 </header>
          ) : console.log("dffdg")
        }
        {props.isLog  && props.data.role === undefined ?
          (
              <header className="headerComponent-header">
                <Link className="headerComponent-link" to="/home">Home</Link>
                <Link onClick={() => logout()} className="headerComponent-link headerComponent-a" to="/">Logout</Link>
              </header>
          ) :  console.log("dffdg")
        }
        {!props.isLog ?
          (
            <header className="headerComponent-header">
              <Link className="headerComponent-link" to="/login">Login</Link>
              <Link className="headerComponent-link" to="/Registration">Registration</Link>
            </header>
          ) : console.log("dffdg")
        }


        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>

    );
}
export default HeaderComponent;
