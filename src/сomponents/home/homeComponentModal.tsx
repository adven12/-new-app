// import React from "react";
// import { LoginState,  LoginRequest } from "../../redux/login/types";
// import Modal from '@material-ui/core/Modal';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


// export interface LoginProps {
//     isLog: boolean
//     email: string
//     password: string
//     data: any
//   }
// export class HomeComponentModal extends React.Component<LoginProps, LoginState> {
//     state: LoginState = {
//         email: "",
//         password: "",
//         isLog: false,
//         error: '',
//         data:[],
//         test:"",
//       };
//     handleClose = () => {
//         // setOpen(false);
//     };
//     render(){
//         return(
//             <div className="div">
//                 <h4>Enter a new name or email</h4>
//                 {/* <Modal
//                     aria-labelledby="simple-modal-title"
//                     aria-describedby="simple-modal-description"
//                     open={open}
//                     onClose={handleClose}
//                 >
//                     <div style={modalStyle} className={classes.paper}>
//                     <h2 id="simple-modal-title">Text in a modal</h2>
//                     <p id="simple-modal-description">
//                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                     </p>
//                     <SimpleModal />
//                     </div>
//                 </Modal> */}

//             </div>
//         );
//     }
// }
import React from 'react';
import { HomeState, HomeModalRequest } from "../../redux/home/types";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import  HomeLogic  from './homeLogic';
import { Button } from '@material-ui/core';
import { doHomeModal } from '../../redux/home/actions';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      // position: 'absolute',
      // maxWidth: 270,
      // maxHeight: 270,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 4, 1),
      // margin: theme.spacing(30, 98),
      // display: 'flex',
      // margin: 'auto',
      // justifyContent='center',
    },
    location: {
      display: 'flex',
      margin:"110px auto",
      position: 'absolute',
      maxWidth: 270,
      maxHeight: 270,
    },
    button: {
        margin: theme.spacing(1),
      },
  }),
);
export interface HomeProps {

  }

const HomeComponentModal: React.FC<HomeProps> = () => {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} size='medium' component="span" className={classes.button}>Editing profile</Button>
      <Modal className={classes.location}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div  className={classes.paper}>
          <h3 id="simple-modal-title">Enter new name or email</h3>
          <div id="simple-modal-description">
            <HomeLogic />
          </div>

        </div>
      </Modal>
    </div>
  );
}
export default HomeComponentModal;