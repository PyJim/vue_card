[![npm](https://img.shields.io/npm/v/vue-animated-card?style=flat-square)](https://www.npmjs.com/package/vue-animated-card)
[![npm](https://img.shields.io/npm/dw/vue-animated-card?style=flat-square)](https://www.npmjs.com/package/vue-animated-card)
[![GitHub](https://img.shields.io/github/license/pyjim/vue-card-documentation?style=flat-square)](https://github.com/PyJim/vue-card-documentation/blob/main/LICENSE)

# Vue Animated Card

Vue Animated Card is a powerful and visually stunning Vue component that brings your cards to life with captivating animation. Whether you're building a portfolio, a blog, or an e-commerce platform, this component will effortlessly elevate the visual appeal of your cards, leaving a lasting impression on your users.

## Features
**Sleek Animations**: Add a touch of elegance to your cards with a wide range of cool and smooth animations.

**Customizable**: Tailor the animations to suit your design aesthetic and create a unique user experience.

**Easy Integration**: Seamlessly integrate Vue Card Animator into your Vue.js applications with just a few lines of code.

**Responsive Design**: The component is fully responsive, ensuring your cards look great on any device or screen size.

**Lightweight**: With minimal dependencies and efficient code, Vue Card Animator keeps your application fast and nimble.


# Starter Guide

Install `vue-animated-card` 
using npm:
```bash
npm install vue-animated-card
```
using yarn:
```bash
yarn add vue-animated-card
```

## Usage

Import the component into your view file and register is globally

```js
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app
    .component("vue-animated-card", vueCard)
    .mount("#app");
```
or import it locally into your vue component

```js
import vueCard from "vue-animated-card";
```
and add to your components in the script tag
```js
<script>
  
  import vueCard from './components/vueCard.vue'
  export default {
    name: 'App',

    components: {
      vueCard,
    },
</script>
```
Add the component to the vue template
```vue
<vueCard 
    :name=name 
    :text=description 
    :image=image
    :linktext=linktxt
/>
```

# Props

| Name       | Type       | Default   | Description |
|------------|------------|-----------|-------------|
|    name    |  `String`  |     -     | String that represents the name or title of the card item. It is used to display the name prominently on the card, providing a clear and concise identifier for the item.            |
|    text    |  `String`  |     -     | String that provides a description or additional information about the card. It allows you to include a brief summary, details, or any relevant text content associated with the card. This prop is useful for providing context or elaborating on the purpose or features of the card item.            |
|  txtColor  |  `String`  |   `#333`  | Determines the color of the `text` displayed within the card.            |
|  linktext  |  `String`  |     -     | String that represents the text displayed by either a `button` or an anchor (`a`) tag within the card.             |
|    image   |  `String`  |     -     | The source (`src`) of the image displayed on the card. It allows you to specify the URL or file path of the image to be shown.            |
|    link    |  `String`  |     -     | The `href` (hyperlink reference) of the anchor (`a`) tag within the card. It allows you to specify the destination URL or path that the anchor tag should navigate to when clicked.             |
|  mainColor |  `String`  |   `#000`  | Used to define the color of the `text`, `buttons`, or links within the card.|
|   bgColor  |  `String`  |   `#fff`  | Color of the main card body|
|  isButton  |  `Boolean` |  `false`  | A boolean value that determines whether the card should contain a `button` or a link (`a`). When set to true, a button element will be displayed within the card. When set to false, an anchor tag will be used instead. This prop provides flexibility in choosing the appropriate interactive element based on your specific use case, allowing you to seamlessly integrate buttons or links within the card component.            |
|   action   | `Function` |     -     | Function that is called when the card contains a button and the button is clicked.|


# Things to note

1. Component sizes cannot be edited directly.

To scale the size, put the component in a `div` tag and set the `transform` property to `scale(value)`. `value` is by how much it should be scaled.

*Example:*

```vue
<div style="transform: scale(0.5);">
  <vueCard 
    :name=name
    :text=description
    :image=image
    :link=link
    :linktext=linktxt
    :isButton="true"
    :action=action
  />
</div>
```
This scales the card to half its default dimensions (`width: 350px` and `height: 300px`).


2. Colors can only be modified by using the props: (`bgColor`, `mainColor` and `txtColor`)

3. When specifying the `image` prop, if a **PATH** is specified, be sure to wrap it in the `require` property so it can be bound properly to the `src` of the `img` tag.

*Example:*

```vue
<vueCard 
  :name=name
  :text=description
  :image=image
/>

<script>
  
  import vueCard from './components/vueCard.vue'
  export default {
    name: 'App',

    components: {
      vueCard,
    },
    data(){
      return {
        name: 'Jimmy',
        description: 'Lorem ipsum dolor sit, amet!',
        image: require('./assets/images/img.jpg'),
      }
    },
    
  }
</script>
```
See the [Vue Animated Card](https://pyjim.github.io/vue-card-documentation/) package for more information.