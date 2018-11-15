import React, { Component } from 'react';

import Carousel from 'lk-react-carousel';
import styles from './App.module.css';
import { fetchImages } from './api/images';
import * as helper from './helpers/numbers';
import samples from './api/samples';

export default class App extends Component {
  componentDidMount() {
    // in the bigger app we should use redux/saga for this side effects
    fetchImages().then(data => {
      this.setState({
        items: data.map((item, i) => ({
          ...item,
          image: item.images[helper.getRandomInt(0, item.images.length - 1)]
        }))
      });
    });
  }
  state = {
    items: []
  };

  render() {
    const { items } = this.state;
    console.log('app items', items.length);
    return (
      <div className={styles.container}>
        <div className={styles.child}>
          <Carousel
            items={items}
            blocks={1}
            getKey={item => item.title}
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
            getKey={item => item.title}
            onNext={this.changeImages}
            preset={{ stiffness: 210, damping: 20 }}
            renderItem={item => (
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              />
            )}
          />
        </div>
        <div className={styles.child}>
          <Carousel
            items={items}
            blocks={1}
            getKey={item => item.title}
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
  changeImages = index => {
    this.setState({
      items: this.state.items.map((item, i) => ({
        ...item,
        image:
          i < index - 4 // change image for invisible items
            ? item.images[helper.getRandomInt(0, item.images.length - 1)]
            : item.image
      }))
    });
  };
}
