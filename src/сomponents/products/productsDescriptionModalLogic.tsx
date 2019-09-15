import React from "react";
// import { saveImg } from "../../redux/products/actions";
import { DescriptionModalState, savePictureProfile } from "../../redux/products/types";
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import { RootState } from "../../redux/rootReducer";
import { home } from "../../redux/home/reducer";
import no_picture from "../../img/no_picture.png"; 
import Login from "../login/Login";

export interface DescriptionModalProps {
    // savePicture:(data: savePictureProfile) => object;
    product: any;
  }
//   const mapStateToProps = (state:RootState) => ({
//     changePhoto: state.products.dataProducts,
//   });
 class ProductsDescriptionModalLogic extends React.Component<DescriptionModalProps, DescriptionModalState> {
   [x: string]: any;
    state: DescriptionModalState = {
        // picture: "", 
        // name: "",
        // discript: "",
        product: "",
        full_discript: "",
      };
      

     handle = (event: any) =>{
        this.setState({ [event.target.name]: event.target.value } as any);
     }
    add = ():any => {
        let full_discript:any = document.querySelector('#new_full_discript');    
        this.props.product.full_discript =  full_discript.value 

            fetch(`http://localhost:3003/products/${this.props.product.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(this.props.product)
          });
    };


//     handlePicture = (e: any) =>{
//             let defaultPhoto = this.no_picturePhoto
//             console.log(defaultPhoto);
            
//             const toBase64 = (file:any) => new Promise((resolve, reject) => {
//                 const reader = new FileReader();
//                 console.log("*** ",file);
//                 reader.readAsDataURL(file);              
//                 reader.onload = () => resolve(reader.result);
//                 reader.onerror = error => reject(error);
              
//             });
//             async function Main(){
//                const input : any = (document.querySelector('#upload_picture'));
//                const file : any = input ? input.files[0] : null;
//                 if(!file){
//                     return defaultPhoto
//                 }
//                 return await toBase64(file)
//             }           
//             Main().then(res =>{
//                   this.setState({picture: res})
//             })
//     }
          
//       saveNewPicture = () =>{
//             this.handlePicture(null);
//       }

    render(){
        console.log("!!!!!!!!!!!!!", this.props.product.id);
        return(
            <div className="homeLogic">
            <textarea 
              id="new_full_discript"
              className="homeLogic-input"
              name="full_discript"
              placeholder="Product description..."
              value={this.state.full_discript}
              onChange={this.handle}
            ></textarea>

            {/* <Button  size="small" className="homeLogic-input">
                <input id="upload_picture" type="file" className="homeLogic-input-upload"/>
            </Button>
            <Button  size="small" component="span" className="homeLogic-input" onClick={() => this.saveNewPicture()}>
                Add picture
            </Button> */}
            <br/>
            <button onClick={() => this.add()} className="homeLogic-button">Add new Description</button>
           </div>
        );
    }
}
export default ProductsDescriptionModalLogic;
// export default connect(
//     mapStateToProps,
//     // { savePicture }
//   )(ProductLogic);