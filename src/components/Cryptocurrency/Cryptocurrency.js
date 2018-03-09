import React, { Component } from 'react';
import styles from './Cryptocurrency.css';

class Cryptocurrency extends Component {

    render() {
        var {
            id,
            name,
            symbol,
            price_usd,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
        } = this.props.data;
        return (
            <li className={styles.cryptocurrency} id={id}>
                <p className={styles['cryptocurrency-name']}>{name} ({symbol})</p>
                <h1>${ (+price_usd).toFixed(2) }</h1>
                <p>{percent_change_1h}% 1hr</p>
                <p>{percent_change_24h}% 24hrs</p>
                <p>{percent_change_7d}% 7days</p>
            </li>
        );
    }
}

export default Cryptocurrency;