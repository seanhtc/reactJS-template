import React, { Component } from 'react';
import logo from 'logo.svg';
import Tickers from 'components/Tickers';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <Tickers />
      </div>
    );
  }
}

export default App;
