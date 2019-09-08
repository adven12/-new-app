import React from "react";
import { Link, Redirect } from "react-router-dom";
import {LogoutState,  LogoutRequest } from "../../redux/logout/types";
import { doLogin } from "../../redux/login/sagasLogin";
import avatar from "../../img/avatar.png"; 
import basket from "../../img/basket.png";
import BasketContainer from "../../сontainers/basketContainer"

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import basketContainer from "../../сontainers/basketContainer";
import { createStyles, makeStyles, Theme, Modal } from "@material-ui/core";

export interface HeaderProps {
  doLogin: () => object;
  isLog: boolean,
  data: any,
}
const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    location: {
      display: 'flex',
      margin:"110px auto",
      position: 'absolute',
      maxWidth: 'auto',
      // maxHeight: 'auto',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 4, 1),
    },
  }),
);

const  HeaderComponent: React.FC = (props:any) => {
  // const state: LogoutState = {
  //   isLog: false,
  //   data: {
  //     role: "",
  //   },
  // };
  const classes = useStyles();
  let defoltPhoto = props.data.avatar;
  if(defoltPhoto === '' || defoltPhoto === undefined){
    defoltPhoto = avatar
  }
   function logout()  {
    // const { doLogin } = props;
    localStorage.clear();
    window.location.href = "/";
      //  doLogout({isLog: false});  
    }
    console.log(props.isLog );
    
  if(props.isLog  && props.data.role === undefined){
    doLogin();
  }  
 
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // function handleClose() {
  //   setAnchorEl(null);
  // }
  const [open, setOpen] = React.useState(false);
  function handleOpen (event:any){
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

    return (
      <div className="headerComponent">
        {/* {!this.props.isLog ? :}  */}
        {props.isLog  && props.data.role === "admin" ?
          (
                 <header className="headerComponent-header">
                   <Link className="headerComponent-link" to="/users">Users</Link>
                   <Link className="headerComponent-link" to="/products">Products</Link>
                   <Link onClick={() => logout()} className="headerComponent-link headerComponent-a" to="/">Logout</Link>
                 </header>
          ) : console.log("dffdg") 
        }
        {props.isLog  && props.data.role === undefined ?
          (
              <header className="headerComponent-header">
                <img src={defoltPhoto} alt="avatar" id="photoMin" className="headerComponent-img"/>
                <img src={basket} alt="basket" id="basket" className="headerComponent-img" aria-controls="simple-menu" aria-haspopup="true" onClick={(e: any) => handleOpen(e)}/>
                <Modal className={classes.location}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                  >
                  <div  className={classes.paper}>
                  <h3 id="simple-modal-title">Basket</h3>
                  <div id="simple-modal-description">
                    <BasketContainer />
                  </div>

                  </div>
                  </Modal>

                <Link className="headerComponent-link" to="/home">Home</Link>
                <Link className="headerComponent-link" to="/products">Products</Link>
                <Link onClick={() => logout()} className="headerComponent-link headerComponent-a" to="/">Logout</Link>
              </header>
          ) :  console.log("dffdg")
        }
        {(!props.isLog)  ?
          (
            <header className="headerComponent-header">
              <Link className="headerComponent-link" to="/login">Login</Link>
              <Link className="headerComponent-link" to="/Registration">Registration</Link>
            </header>
          ) : console.log("dffdg")
        }

    </div>

    );
}
export default HeaderComponent;
