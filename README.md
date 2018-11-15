# lk-react-carousel

> The lightweight carousel with ondemand rendering

[![Build Status](https://img.shields.io/travis/lkazberova/lk-react-carousel/master.svg)](https://travis-ci.org/lkazberova/lk-react-carousel) [![NPM](https://img.shields.io/npm/v/lk-react-carousel.svg)](https://www.npmjs.com/package/lk-react-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**[Demo](https://lkazberova.github.io/lk-react-carousel/)** | **[Documentation](https://lkazberova.github.io/lk-react-carousel/documentation/)**

## Install

```bash
npm install --save lk-react-carousel
```

## Usage

```jsx
import React, { Component } from 'react'

import Carousel from 'lk-react-carousel'

class Example extends Component {
  render () {
    return (
        <Carousel
          items={[
            "https://picsum.photos/800/500/?image=1063",
            "https://picsum.photos/800/500/?image=1060",
            "https://picsum.photos/800/500/?image=1064",
            "https://picsum.photos/800/500/?image=1051",
            "https://picsum.photos/800/500/?image=1050",
            "https://picsum.photos/800/500/?image=1049",
            "https://picsum.photos/800/500/?image=1047",
            "https://picsum.photos/800/500/?image=1036",
            "https://picsum.photos/800/500/?image=1045",
            "https://picsum.photos/800/500/?image=1044",
            "https://picsum.photos/800/500/?image=1043",
            "https://picsum.photos/800/500/?image=1042",
            "https://picsum.photos/800/500/?image=1041",
            "https://picsum.photos/800/500/?image=1040"
          ]}
          blocks={4}
          getKey={(item) => item}
          renderItem={src => (
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundImage: `url(${src})`
              }}
            />
          )}
        />
    )
  }
}
```

## License

MIT © [lkazberova](https://github.com/lkazberova)
