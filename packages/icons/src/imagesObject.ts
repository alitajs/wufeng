import images from './images';

const imagesObj = {};

images.forEach((image) => {
  imagesObj[
    image
  ] = `https://cdn.jsdelivr.net/gh/ionic-team/ionic-docs@latest/static/icons/component-${image}-icon.png`;
});

export default imagesObj;
