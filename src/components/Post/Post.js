import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSalvarPreto from "../../img/salvar-preto.png"
import iconeSalvarVermelho from "../../img/salvar-vermelho.png"
import { IconeSalvarPreto } from '../IconeSalvarPreto/IconeSalvarPreto'
import iconeShare from "../../img/ShareIconBlack.png";
import SecaoCompartilhar from './SecaoCompartilhar/SecaoCompartilhar'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhar: false
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  onClickCurtida = () => {
     let novasCurtidas
     if(this.state.curtido){
       novasCurtidas = this.state.curtido - 1
     } else {
       novasCurtidas = this.state.curtido + 1
     }

     this.setState({
       curtido: !this.state.curtido,
       numeroCurtidas: novasCurtidas
     })
  }

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida
    let iconeSalvar
    

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.salvo){
      iconeSalvar = iconeSalvarVermelho
    } else {
      iconeSalvar = iconeSalvarPreto
    }

    let componenteComentario

    if(this.state.comentando) {

      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhar) {
      
      componenteCompartilhar = <SecaoCompartilhar/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        <img alt={"Ícone Compartilhar"} onClick={this.onClickCompartilhar} className={"iconeShare"} width="25" height="25" src={iconeShare}/>
        <p>{componenteCompartilhar}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSalvarPreto
        salvar={iconeSalvar}
        onClickSalvarIcone ={this.onClickSalvar}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post