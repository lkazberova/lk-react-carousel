import React, { Component } from 'react';

import Carousel from 'react-carousel';
import samples from './samples';
import styles from './App.module.css';

const items = samples.map((item, index) => ({ ...item, id: index }));
export default class App extends Component {
  render() {
    console.log(styles);
    return (
      <div className={styles.container}>
        <div className={styles.child}>
          <Carousel
            items={items}
            blocks={1}
            getKey={item => item.id}
            preset={{ stiffness: 120, damping: 14 }}
            renderItem={item => (
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${item.images[0]})`
                }}
              >
                <header>
                  <h1>
                    {item.id} - {item.title}
                  </h1>
                </header>
              </div>
            )}
          />
        </div>
        <div className={styles.child}>
          <Carousel
            items={items}
            blocks={4}
            getKey={item => item.id}
            preset={{ stiffness: 210, damping: 20 }}
            renderItem={item => (
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${item.images[0]})`
                }}
              />
            )}
          />
        </div>
        <div className={styles.child}>
          <Carousel
            items={items}
            blocks={1}
            getKey={item => item.id}
            preset={{ stiffness: 170, damping: 26 }}
            renderItem={item => (
              <div className={styles.plain}>
                <h1>{item.title}</h1>
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}
