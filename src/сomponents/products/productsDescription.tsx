import React from 'react';
import { HomeState, HomeModalRequest } from "../../redux/home/types";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import  HomeLogic  from './homeLogic';
import { Button, Link, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { doHomeModal } from '../../redux/home/actions';
import ProductsComponent from "../products/productsComponent";
import ProductsDescriptionModalLogic from './productsDescriptionModalLogic';


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
      margin: "110px auto",
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

const ProductsDescription: React.FC<any> = (props) => {
  console.log(props.location.state.id);
  console.log(props.location.state.name);
  console.log(props.location.state.picture);
  console.log(props.location.state.full_discript);
  console.log(props.location.state.discript);
  console.log(props.location.state);

  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="productsDescription">
      <Card className="productsComponent-books-card" >
      <CardContent>
      <CardMedia
          className="productsComponent-books-card-media"
          image={props.location.state.picture}
          title="Paella dish"
          id={props.location.state.id}
        />
         <Typography component="h6">
          {props.location.state.name}
         </Typography>
        <div>
         {props.location.state.full_discript != undefined ?
         (<Typography component="h6">{props.location.state.full_discript}</Typography>
          ):(<Typography component="h6">{props.location.state.discript}</Typography>)}
        </div>
        </CardContent>
      </Card>
      <div>
        <br/>
         {props.location.state.full_discript != undefined ?
         (<Button size="small" onClick={handleOpen}>Сhange Description</Button>
          ):(null)}
        <Modal className={classes.location}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
        <div  className={classes.paper}>
        <h3 id="simple-modal-title">Enter a new description</h3>
        <div id="simple-modal-description">
          <ProductsDescriptionModalLogic product={props.location.state}/>
        </div>

        </div>
        </Modal>
      </div>
    </div>
  );
}
export default ProductsDescription;