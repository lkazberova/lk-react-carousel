Carousel example with one visible item
```js
<div style={{ height: 300 }}>
  <Carousel
    items={[
      "https://picsum.photos/1000/500/?image=1063",
      "https://picsum.photos/1000/500/?image=1060",
      "https://picsum.photos/1000/500/?image=1064",
      "https://picsum.photos/1000/500/?image=1051",
      "https://picsum.photos/1000/500/?image=1050",
      "https://picsum.photos/1000/500/?image=1049",
      "https://picsum.photos/1000/500/?image=1047"
    ]}
    blocks={1}
    getKey={(item, index) => index}
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
</div>
```
Carousel example with four visible items
```js
<div style={{ height: 300 }}>
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
    getKey={(item, index) => index}
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
</div>
