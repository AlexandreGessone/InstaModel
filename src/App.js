import React from 'react';
import './App.css';
import Post from './components/Post/Post';


class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=1'}
          fotoPost={'https://picsum.photos/200/150?a=2'}
          shareIcon={"iconeShare"}
        />

        <Post
          nomeUsuario={'Alexandre'}
          fotoUsuario={'https://picsum.photos/50/50?a=3'}
          fotoPost={'https://picsum.photos/200/150?a=4'}
        />

        <Post
          nomeUsuario={'Livia'}
          fotoUsuario={'https://picsum.photos/50/50?a=5'}
          fotoPost={'https://picsum.photos/200/150?a=6'}
        />  
      </div>
    );
  }
}

export default App;
