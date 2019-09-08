import React from "react";
import { ProductsState, ProductsRequest } from "../../redux/products/types";
import { RootState } from "../../redux/rootReducer";
import product_2 from "../../img/product_2.jpg"; 
import product_1 from "../../img/product_1.jpg"; 
import ProductLogic from "../products/productsLogic";

import { makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Modal } from "@material-ui/core";
import { textAlign } from "@material-ui/system";
import { any } from "prop-types";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 100,
    maxWidth: 230,
    margin: '0 auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  discript: {
    textAlign: 'left',
  },
  button: {
    margin: '0 auto',
  },
  location: {
    display: 'flex',
    margin:"110px auto",
    position: 'absolute',
    maxWidth: 270,
    maxHeight: 300,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 4, 1),
  },
}));

export interface ProductsProps {
  doProducts: () => object;
  doProductsToBasket: (data:ProductsRequest) => object;
  isLog: boolean,
  dataProducts: string,
  data: [],
} 

const ProductsComponent: React.FC = (props:any) => {
  const state: ProductsState = {
    dataProducts: "",
    addToBasket: "",
    data: "",
    dataArr: [],
  };
  // debugger 
  const classes:any = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  if(props.dataProducts.length <= 0){
   const { doProducts } = props;
  doProducts();
  }
  console.log(product_1);
  
  // const addNewProduct = () => {
  //  console.log("working");
  // }
  const handleBuy = (id:any) => {
    state.addToBasket = id;
    const { doProductsToBasket } = props;
    doProductsToBasket({addToBasket: state.addToBasket});
    
  }
  const handleDel = (id:any) => {
    props.dataProducts.forEach((item:any,index:any) => {
     if(item.id === id){
      props.dataProducts.splice(index, 1)
      }
      fetch(`http://localhost:3003/products/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "Accept": "application/json"},
      })
      .then(res => res.json());
    });    
  }

    console.log(props.dataProducts);
    console.log(props.isLog);
    console.log(props.role);
    console.log(product_2);
    console.log(props.data);
    console.log(state.addToBasket);
    
    
    return (
      <div className="productsComponent">
          <div className="productsComponent-list">
        {/* <h4 className="usersComponent-list-h4"></h4> */}
        {props.isLog && props.dataProducts.length > 0 ? 
          (
                props.dataProducts.map((text:any, index:any) => (
                  <div className="productsComponent-books" key={index}>
                    <Card className={classes.card} >
                   <CardContent>
                  <CardMedia
                    className={classes.media}
                    image={text.picture}
                    title="Paella dish"
                    id={text.id}
                />
                  <Typography  component="h6">
                    {text.name}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                  {text.price}
                  </Typography>
                  <Typography variant="body2" component="p" className={classes.discript}>
                  {text.discript}
                    <br />
                  </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small" className={classes.button} onClick={() => handleBuy(text.id)} id={text.id}>Buy</Button>
                  {props.data.role === "admin" ? 
                  (
                  <Button size="small" className={classes.button} onClick={() => handleDel(text.id)}>Del</Button>
                  ) : console.log("dffdg") 
                  }
                </CardActions>
                  </Card>
                  </div>
                   )
                   )
                   ) : (console.log("isLog = false"))
                  }
                  <br />
                  {props.data.role === "admin" ? 
                  (
                  <Button size="small" className={classes.button} onClick={handleOpen}>Add new product</Button>
                  ) : console.log("dffdg") 
                  }
                  <Modal className={classes.location}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                  >
                  <div  className={classes.paper}>
                  <h3 id="simple-modal-title">New product</h3>
                  <div id="simple-modal-description">
                    <ProductLogic />
                  </div>

                  </div>
                  </Modal>
      </div>
      </div>
    );
}
export default ProductsComponent;



{/* <div className= "Massage"> */}
 {/* {this.props.dataUsers.map((text:any, index:any) => 
   <p key={index.id}>{text.id} {text.name}</p>
   )}
</div> */}
