import React from "react";
import { UsersState } from "../../redux/users/types";
import { RootState } from "../../redux/rootReducer";

import { makeStyles, lighten} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { any } from "prop-types";
import MaterialTable from 'material-table';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export interface UsersProps {
  doUsers: () => object;
  isLog: boolean,
  error: string,
  dataUsers: any,
}

const UsersComponent: React.FC = (props:any) => {
  
   const state: UsersState = {
    // isLog: false,
    error: "",
    dataUsers: "",
  };
  const classes:any = useStyles();

  
  if(props.dataUsers.length <= 0){
   const { doUsers } = props;
  doUsers();
  }
  // for class component 
  // function componentDidMount(){ 
  //   const { doUsers } = props;
  //   doUsers();
  // }

    console.log(props.dataUsers);
    console.log(props.isLog);
    console.log(props.dataUsers[0]);
    return (
      <div className="usersComponent">
        <div className="usersComponent-list">
        <h4 className="usersComponent-list-h4"></h4>
          {props.isLog && props.dataUsers.length > 0 ? 
          (
            // props.dataUsers.map((text:any, index:any) => 
            // <div className="usersComponent-list-user ">
            //   <p className="usersComponent-list-user-id" key={index.id}>Id: {text.id}</p>
            //   <p className="usersComponent-list-user-name" key={index.name}>Name: {text.name}</p>
            //   <p className="usersComponent-list-user-email" key={index.email}>E-mail: {text.email}</p>
            //   <p className="usersComponent-list-user-password" key={index.password}>Password: {text.password}</p>
            //   <p className="usersComponent-list-user-role" key={index.role}>Role: {text.role}</p>
            //   <br  />
            //   </div>
              

      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.dataUsers.map((text:any, index:any) => (
              <TableRow key={index.name}>
                <TableCell >{text.id}</TableCell>
                <TableCell align="right">{text.name}</TableCell>
                <TableCell align="right">{text.email}</TableCell>
                <TableCell align="right">{text.password}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
 
          ) : (console.log("isLog = false"))
          }
        </div>
      </div>
    );
}
export default UsersComponent;



{/* <div className= "Massage"> */}
 {/* {this.props.dataUsers.map((text:any, index:any) => 
   <p key={index.id}>{text.id} {text.name}</p>
   )}
</div> */}
