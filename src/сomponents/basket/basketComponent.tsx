import React from "react";
import { BasketState } from "../../redux/basket/types";
import { RootState } from "../../redux/rootReducer";
import no_picture from "../../img/no_picture.png"; 
import ProductsComponent from "../../сomponents/products/productsComponent";
import { Error } from "../common/errorComponent"

import { makeStyles ,Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Modal from '@material-ui/core/Modal';
import { doHomeModal } from "../../redux/home/actions";
import { MenuItem, CardMedia } from "@material-ui/core";
import productsContainer from "../../сontainers/productsContainer";
import { textAlign } from "@material-ui/system";



const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    container: {
      display: 'flex',
      textAlign: 'center',
      // padding: theme.spacing(2),
    },
    media: {
      paddingTop: '30%', 
      // paddingRight: '10%', 
      width: '90px',
      hight: '40px',
      margin: 'auto',
    },
    button: {
    //  alignContent: 'left',
    //  justifyContent:'left',
    marginTop: '17px',
    },
    sumTotal: {
       textAlign: 'left',
       marginTop: '17px',
      }

  }),
);

export interface BasketProps {
  buyProduct: string,
  addToBasket: string,
  dataArr: any,
}

const  BasketComponent: React.FC<BasketProps> = (props:any) => {
  const state:BasketState = { 
    buyProduct: "",
    addToBasket: "",
  };
  const classes = useStyles();
  const defaultimg = no_picture;
  const newBasketProduct = props.addToBasket.addToBasket;
  let countBooks = 0;
  console.log("product ", props.buyProduct);
  console.log(props.addToBasket.addToBasket);
  console.log(props.dataArr[0]);

  const addBook = (id:any) => {
    countBooks = countBooks+1;
    // console.log(props.buyProduct.id[id]);
    
  };

   

  return (
      <div className="basketComponent">
        {props.addToBasket.addToBasket === undefined ? (
          <div className="empty">
          <h2>Basket is empty</h2>
          </div>
          ) : (
        props.dataArr.map((textArr:any, indexArr:any) => (
        props.buyProduct.map((text:any, index:any) => (
        // <h2>H {text.id}</h2>addToBasket
        textArr.addToBasket === text.id ?(  
        <div className="basketComponent-content" key={index}>
        <Grid container spacing={2}>
        <Grid item  xs={2}>
        <Button className={classes.button}>-</Button>
        </Grid> 
        <Grid item  xs={7}>
        <CardMedia
            className={classes.media}
                    image={text.picture}
                    title="Paella dish"
                    // id={text.id}
                />
        <Typography  component="h6">
        {/* {text.name} */}{text.name}
        </Typography>
        <Typography  component="h6">
        {/* {text.name} */}{text.price}
        </Typography> 
        </Grid>  
        <Grid item  xs={3}>    
        <Button className={classes.button}  onClick={() => addBook(text.id)}>+</Button>
        <Typography  component="h6">
        {/* {addBook()} */}{countBooks}
        </Typography> 
        </Grid>
        {/* </CardContent> */}
        {/* </Card> */}
        </Grid>   
        <Typography  component="h6" className={classes.sumTotal}>
        Sum total: 
        </Typography> 
        <Button>cleanBasket</Button><br />
        <Button>Place your order</Button>
        </div>
        ) : (console.log("Orabotalo"))))

        )))} 
        </div>
    );
}
export default BasketComponent;



