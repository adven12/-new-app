import React from "react";
import { saveImg } from "../../redux/home/actions";
import { HomeModalState,  HomeModalRequest, saveImgProfile } from "../../redux/home/types";
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
// import { doHomeModal } from "../../redux/home/actions";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import avatar from "../../img/avatar.png"; 
import { RootState } from "../../redux/rootReducer";
import { home } from "../../redux/home/reducer";

export interface HomeModalProps {
    // doHomeModal: (data: HomeModalRequest) => object;
    saveImg:(data: saveImgProfile) => object;
    // idUser: any;

  }
  const mapStateToProps = (state:RootState) => ({
    changePhoto: state.home.changePhoto,
    // changePhoto: state.home.changePhoto,
    // idUser: state.home.idUser,  
  });
 class HomeLogic extends React.Component<HomeModalProps, HomeModalState> {
   [x: string]: any;
    state: HomeModalState = {
        email: "",
        name: "",
        changePhoto: "",
        idUser: 0,
      };
    avatarPhoto:any = {avatar}
     handle = (event: any) =>{
      this.setState({ [event.target.name]: event.target.value } as any);

    }
    edit = ():any => {
        // const { doHomeModal } = this.props;
        // doHomeModal({ email: this.state.email, name: this.state.name }); 
        // console.log("8888888888888888", doHomeModal({ email: this.state.email, name: this.state.name }));
        // change inputs from homeComponent
        let editName:any = document.querySelector('#user-name');
        let editEmail:any = document.querySelector('#user-email');
        console.log("1111111 ",editName.value);
        editName.value = this.state.name;
        editEmail.value = this.state.email;
       
        const newSave = {
            name: this.state.name,
            email: this.state.email,
            changePhoto: this.state.changePhoto,
        };
        const local: any = localStorage.getItem('state')
        console.log(local);
        const localParce = JSON.parse(local)
        console.log(localParce.login.data);
        for(var key in localParce.login.data) {
            if(key ==='email'){
              if(newSave.email != ''){
              localParce.login.data[key] = newSave.email
              console.log('What we assign', key, ':', localParce.login.data[key])
              console.log('Modified - login:',localParce) 
              }
            } 
            if(key ==='name'){
              if(newSave.name != ''){
                localParce.login.data[key] = newSave.name
                console.log('What we assign', key, ':', localParce.login.data[key])
                console.log('Modified - login:',localParce) 
              }
            }
            if(key ==='avatar'){
              localParce.login.data[key] = newSave.changePhoto
              console.log('Img', key, ':', localParce.login.data[key])
              console.log('Modified - img:',localParce) 
          }  
        }   
        
            fetch(`http://localhost:3002/users/${localParce.login.data.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(localParce.login.data)
          });
          // upload new data in localStorage            
          localStorage.setItem('state',JSON.stringify(localParce));
          // localStorage.clear();
          // window.location.href = "/login";
          let imgMin:any = document.querySelector('#photoMin');
          imgMin.src = this.state.changePhoto;
    };

    handleImage = (e: any) =>{
            let defaultPhoto = this.avatarPhoto
            let img:any = document.querySelector('#photo');
            // let imgMin:any = document.querySelector('#photoMin');

            const toBase64 = (file:any) => new Promise((resolve, reject) => {
                const reader = new FileReader();
                console.log("*** ",reader);
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
            async function Main(){
               const input : any = (document.querySelector('#upload_img'));
               const file : any = input ? input.files[0] : null;
               
                if(!file){
                    return defaultPhoto
                }
                return await toBase64(file)
            }           
            Main().then(res =>{
  
                this.setState({changePhoto: res})
                img.src = res;
            })
    }
          
      savePhotoProfile = () =>{
            this.handleImage(null);
                    console.log("working2");
                             
                   }

    render(){
        return(
            <div className="homeLogic">
             <input
              id="edit_name"
              className="homeLogic-input"
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handle}
            />
            <input
              id="edit_email"
              className="homeLogic-input"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handle}
            />
             <Button    size="small" className="homeLogic-input">
                <input id="upload_img" type="file"  placeholder="Choose avatar" className="homeLogic-input-upload"/>
             </Button>
              {/* <input type="file" onClick={handleImage} placeholder="Choose avatar" className={classes.button}/> */}
              <Button  size="small" component="span" className="homeLogic-input" onClick={() => this.savePhotoProfile()}>Upload avatar</Button>
            <br/>
            <button onClick={() => this.edit()} className="homeLogic-button">Сhange profile</button>
           </div>
        );
    }
}
export default connect(
    mapStateToProps,
    { saveImg }
  )(HomeLogic);