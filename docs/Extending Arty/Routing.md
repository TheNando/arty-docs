# Routing

Add the React Router libraries to your project.

```
yarn add react-router-dom @types/react-router-dom
```

Wrap App component in a Router component (ex. `<BrowserRouter>`). You can find information about React Router's available Router components [here](https://reacttraining.com/react-router/web/api/Router).

```jsx
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="stage">...</div>
      </BrowserRouter>
    );
  }
}
```

Add some `<Route>` components to your app. When the url path matches with one of the available Route paths, that component is rendered. You might also nest these Routes within a `<Switch>` component to ensure that only one is ever rendered. Routes may only exist within a Router component. Route can also include one or more wildcard params that get passed to the component's props. These are identified as `:param` within the path string.

Routes for this documentation application

```jsx
<BrowserRouter>
  <div id="stage">
    <Nav />
    <Route exact path="/:category/:page" component={Page} />
    <Route exact path="/:category" component={Page} />
  </div>
</BrowserRouter>
```

TODO: <Link>
TODO: withRouter, RouteComponentProps
TODO: detecting route change within a component
