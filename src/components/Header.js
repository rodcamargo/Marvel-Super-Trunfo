import React from 'react';
import logo from './logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="header-page">
        <div>
          <img alt="logo do jogo" src={ logo } width="300" />
        </div>
        <div>
          {/* <h1 className="title-page">VINGADORES</h1>
          <h2 className="subtitle-page">SUPER TRUNFO</h2> */}
        </div>
      </header>
    );
  }
}

export default Header;
