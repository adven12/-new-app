import React from "react";
import { ProductsState, ProductsRequest } from "../../redux/products/types";
import ProductLogic from "./productsComponentModalLogic";
import ProductsComponentModal from "../products/productsComponentModal"
import ProductsDescription from "../products/productsDescription"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Modal, Grid, TextField } from "@material-ui/core";
import { DebounceInput } from 'react-debounce-input';
import { Redirect, Router, Route } from "react-router";
import { Link, LinkProps } from "react-router-dom";


const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref as any} {...props} />
));


export interface ProductsProps {
  doProducts: () => object;
  doProductsToBasket: (data: ProductsRequest) => object;
  doProductsUpdate: (data: ProductsRequest,allBooks:any) => object;
  isLog: boolean,
  dataProducts: string,
  data: [],
}

class ProductComponent extends React.Component<any, any> {
  state: ProductsState = {
    addToBasket: "",
    dataProducts: "",
    book: "",
    dataArr: [],
    search: "",
    redirectDescription: 0,
    numberBooks: 1,
    countBooks: 0,
  };


  handleBuy = (book:any) => {

        const { doProductsToBasket } = this.props;

        doProductsToBasket(book);


  }
  handleDel = (id: any) => { 
    // this.props.dataProducts.forEach((item: any, index: any) => {
    //   // if (item.id === id) {
    //   //   this.props.dataProducts.splice(item, 1)
    //   // }
    //   // console.log("{item.id", item.id);   
    //   fetch(`http://localhost:3003/products/${item.id}`, {
    //     method: "DELETE",
    //     headers: { "Content-Type": "application/json", "Accept": "application/json" },
    //   })  
    //     .then(res => res.json());
    // });
    const { doProductsUpdate } = this.props;
    doProductsUpdate(id, this.props.dataProducts );
    console.log(this.props.dataProducts);
  }




  render() {
     
    if (this.props.dataProducts.length <= 0 ) {
      const { doProducts } = this.props;
      doProducts(); 
    }

    return (
      <div className="productsComponent">
        <div className="productsComponent-list ">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DebounceInput
                minLength={2}
                debounceTimeout={300}
                onChange={event => this.setState({ search: event.target.value })} />
              {/* {this.props.dataProducts.map((text:any, index:any) => (
        text.name == this.state.search ? (  
        ):(null)
        ))} */}
              <p>Value: {this.state.search}</p>
            </Grid>
          </Grid>
          {this.props.isLog && this.props.dataProducts.length > 0 ?
            (
              this.props.dataProducts.map((text: any, index: any) => (
                text.name.includes(this.state.search) ? (
                  <div className="productsComponent-books" key={index}>
                    <Card className="productsComponent-books-card" >
                      <CardContent>
                        <CardMedia
                          className="productsComponent-books-card-media"
                          image={text.picture}
                          title="Paella dish"
                          id={text.id}
                          component={AdapterLink} to={{
                            pathname: `/description/${text.id}`,
                            state: {
                              id: text.id,
                              name: text.name,
                              picture: text.picture,
                              full_discript: text.full_discript,
                              discript: text.discript,
                            }
                          }}
                        // onClick={() => this.bookDescription(text.id)}
                        />
                        <Typography component="h6">
                          {text.name}
                        </Typography>
                        <Typography color="textSecondary">
                          {text.price}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {text.discript}
                          <br />
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {this.props.data.role === "admin" ?
                          (
                            <div>
                              <Button size="small" onClick={() => this.handleDel(text.id)}>Del</Button>
                            </div>
                          ) : <Button size="small" onClick={() => this.handleBuy(text)} id={text.id}>Buy</Button>
                        }</CardActions>
                    </Card>
                  </div>
                ) : (null)
              )
              )
            ) : (null)
          }
          <br />
          {this.props.data.role === "admin" ?
            (
              <ProductsComponentModal />
            ) : (null)
          }
        </div>
      </div>
    );
  }
}
export default ProductComponent;

