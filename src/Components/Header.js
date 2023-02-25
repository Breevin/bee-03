import React from "react";
import '../Styles/header.css';
import Modal from "react-modal";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from 'react-facebook-login';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      backgroundColor: 'pink',
      padding:'40px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:'20px',
      border: '4px solid brown',
    }
};



class Header extends React.Component{
    constructor(){
        super();
            this.state ={
                backgroundColor:'',
                bckclr:'',
                display: 'none',
                loginModalIsOpen: false,
            }
    }
    responseGoogle = (response) => {
        console.log(response);
    }
    responseFacebook = (responses) => {
        console.log(responses)
    }
    componentDidMount(){
        const path = this.props.history.location.pathname;
        this.setAttributes(path);
    }
    

    setAttributes =(path) =>{
        let bg;
        let bc;
        if(path === '/'){
            bg = 'transparent';
            bc='transparent'
        }
        else if(path === '/filter'){
            bg = 'rgb(101, 4, 4)'
            bc='peachpuff'
        }
        else{
            bg = 'rgb(11, 24, 99)';
            bc='peachpuff'
        }
        this.setState({backgroundColor : bg, bckclr: bc});
    }
    handleLogin = () =>{
        this.setState({loginModalIsOpen:true},this.setState({display:'none'}))
    }
    handleCancel=()=>{
        this.setState({loginModalIsOpen:false})
    }
    showMenu=()=>{
        this.setState({display:'block'})
    }
    hideMenu=()=>{
        this.setState({display:'none'})
    }
    
    
   render(){
        const {backgroundColor, bckclr,loginModalIsOpen,display} = this.state;
        return(
                <div>
        <div className="nav_bar" style={{backgroundColor: backgroundColor}}>
        <div className="logo1" style={{backgroundColor:bckclr}}>
                <h1 className="nam1">Z</h1>
            </div>
            <button className="svg" type="button" onClick={this.showMenu}></button>
            <div className="btn" >
                <button id="btn1" onClick={this.handleLogin}>Login</button>
                <button id= "btn2">Create an account</button>
            </div>
            <div className="btnx" style={{display:display}}>
                <button id="btn1" onClick={this.handleLogin}>Login</button>
                <button id= "btn2">Create an account</button>
                <button id= "btn2" onClick={this.hideMenu}>Close</button>
            </div>
        </div>
        <Modal
            isOpen={loginModalIsOpen}
            style={customStyles}
            >
            <div>
                 <h2>Login</h2>
                <div className="nav_bar1" style={{backgroundColor: backgroundColor}}>
                <div className="logo2" style={{backgroundColor:bckclr}}>
                <h1 className="nam1">Z</h1>
                </div>
                </div>
                <input id="modinpt" type="text" placeholder="Email"></input>
                <br/><p></p>
                <input id="modinpt" type="text" placeholder="Password"></input>
                <p></p>
                <div>
                    <button id="modbtn-login">Login</button>
                    <button id="modbtn-can" onClick={this.handleCancel}>Cancel</button>
                </div>
            </div>
            <p style={{color:"gray"}}>-------or continue with-------</p>
                    <GoogleLogin
                        clientId="238921426271-tshk8eni56t57hp3ceuq4nj8a66onnha.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        loginModalIsOpen
                    />
                    <p></p>
                    <FacebookLogin
        appId="6033880659991371"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
        </Modal>
        </div>
        )
    }
}


export default Header;