import samples from './samples';

export const fetchImages = () => {
  //mockup api call
  return new Promise((resolve, reject) => {
    setTimeout(resolve(samples), 1000);
  });
};
