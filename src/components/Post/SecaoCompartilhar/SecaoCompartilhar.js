import React from 'react'
import iconeInsta from "../../../img/Insta.png"
import iconeFacebook from "../../../img/Facebook.png"
import iconeWhats from "../../../img/Whatspp.png"
import "./SecaoCompartilhar.css"

class SecaoCompartilhar extends React.Component {

    state = {
        instagram: false,
        facebook: false,
        whats: false,
        texto: ""
    }

    onChangeTexto = (event) => {
        this.setState({texto: event.target.value})

    }

    onClickInsta = () => {
        this.setState({
            instagram: !this.state.instagram
        })
    }

    onClickFace = () => {
        this.setState({
            facebook: !this.state.facebook
        })
    }

    onClickWhats = () => {
        this.setState({
            whats: !this.state.whats
        })
    }

    render() {

        if(this.state.instagram){
            let mensagem = this.state.texto
            let string = "A mensagem " + mensagem + " foi compartilhada no Instagram"
            alert(string)  
            this.setState({instagram: false, texto: ""})
     
        } if(this.state.facebook) {
            let mensagem = this.state.texto
            let string = "A mensagem " + mensagem + " foi compartilhada no Facebook"
            alert(string)
            this.setState({facebook: false, texto: ""})
        
        } if(this.state.whats) {
            let mensagem = this.state.texto
            let string = "A mensagem " + mensagem + " foi compartilhada no WhatsApp"
            alert(string)
            this.setState({whats: false, texto: ""})
        }

        

      return (
        <div className={'compartilhar-container'}>
            <div className={"rede-container"}>
               <img alt={"Ícone Instagram"} onClick={this.onClickInsta} className={"insta"} width="50" height="25" src={iconeInsta} />
               <img alt={"Ícone Facebook"} onClick={this.onClickFace} className={"face"} width="30" height="30" src={iconeFacebook} />
               <img alt={"Ícone WhatsApp"} onClick={this.onClickWhats} className={"whats"} width="30" height="30" src={iconeWhats} />
               <input onChange={this.onChangeTexto} value={this.state.texto} placeholder={"Digite sua mensagem"} className={"input"}/>
            </div>
        </div>
      );
    }
  }
  
  export default SecaoCompartilhar;
  