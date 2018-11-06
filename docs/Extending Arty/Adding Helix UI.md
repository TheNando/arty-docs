# Adding Helix UI

For more info, visit the Helix [getting started](https://rackerlabs.github.io/helix-ui/guides/getting-started/) section

## 1) Installing HelixUI

Install the HelixUI library from within your cloned repo.

```
yarn add helix-ui
```

It is also advised to install Web Component polyfils to ensure cross-browser compatibility.

```
yarn add @webcomponents/webcomponentsjs
```

## 2) Add library references

Typically, when using a component library, you would add links to the style sheets and scripts within the index.html page's `<head>` section or at the end of the `<body>`. Unfortunately, NPM/Yarn install these libraries into a folder called `node_modules` that is off limits to the index.html.

Typical vendor library inclusion

```html
  <!-- Helix Css -->
  <link rel="stylesheet" href="../node_modules/helix-ui/dist/styles/helix-ui.min.css" />

  <!-- Helix - Converts ES5 custom element constructor functions to ES6 classes -->
  <script src="../node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"></script>

  <!-- Helix - loader appends polyfills, if needed -->
  <script src="../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
```

But, since under-the-hood, Create-react-app (or more specifically, React-scripts) uses a Web Pack configuration that transpiles module imports for all JavaScript/TypeScript files, we can import Node modules from anywhere in our JS/TS files. So to include Helix UI, add these lines to `src/index.tsx`

```ts
// Helix Css
import "helix-ui/dist/styles/helix-ui.min.css";

// Converts ES5 custom element constructor functions to ES6 classes -->
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

// loader appends polyfills, if needed -->
import "@webcomponents/webcomponentsjs/webcomponents-loader.js";

// Helix UI client library
import "helix-ui/dist/scripts/helix-ui";
```

As an added benefit, all these files will be bundled by Web Pack The CSS will be injected directly into the index.html.

## 3) Add markup

The final step to implementing Helix UI in Arty is understanding Heliux's Layout system, more specifically, what markup is required to identify that elements should be rendered with Helix's style rules. Observe the example below for adding a simple nav bar or check out [Helix's documentation](https://rackerlabs.github.io/helix-ui/components/layouts/#layout-anatomy) for more information.

### Layout class

For this example, we will create a layout based on Helix's Vertical template. We'll need to add a class and id to the `<body>` tag in `public/index.html`

```html
<body class="hxVertical" id="top">
  ...
</body>
```

### Add/Update Helix Injection id

By default, the public index includes a React injection point in the following element

```html
<body class="hxVertical" id="top">
    <!-- React injected below, identifed by the id "root" -->
    <div id="root">
        <!-- Anything placed here will be replaced by React -->
    </div>
</body>
```

Helix also looks for an injection point, but for the id "app". Rather than nesting another div in our React app, we can just use the Helix id "app" and change the string that React looks for.

In `src/index.tsx`, change

```ts
ReactDOM.render(<App />, document.getElementById("root"));
```

to

```ts
ReactDOM.render(<App />, document.getElementById("app"));
```

### Add a Helix Web Component

Now everything should be set and we should be able to display a Helix Web Component. Let's add a side Nav component. At this point, all our markup can be added within React components, so we shouldn't need to modify the public index file any futher.

Replace the contents of `src/App.tsx` with the following to render a Helix Nav component

```jsx
class App extends Component {
  render() {
    return (
      <div id="stage">
        <nav id="nav" className="hxNav">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </nav>
      </div>
    );
  }
}
```

That's it! You can now render Helix Web Components within React. This is just the beginning. To make full of Helix Web Components, you'll also need to learn how to wire Helix component events to React components [TODO: Add link]().
