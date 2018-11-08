# Routing

## Adding dependencies to your project

By default, Arty does not include any libraries to manage routing. But you can easily add React Router, one of the most popular routing libraries for React. First, add the library and types to your project.

```
yarn add react-router-dom @types/react-router-dom
```

## Wrapping your component(s) with a Router

You must wrap the components that you want to respond to routing event within a Router component. There are numerous Router components available in React Router. In this example, we'll use `<BrowserRouter>`. You can find information about available Router components [here](https://reacttraining.com/react-router/web/api/Router). You will typically want to wrap your entire application with the router, though other configurations are possible.

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

## Adding Routes

The routing system works by conditionally rendering components based on the current URL. Add `<Route>` components to your app with URL path patterns and a reference to the component that will render when that path is active. You can optionally nest these Routes within a `<Switch>` component to ensure that only one is ever rendered. Routes may only exist within a Router component. A Route can also include one or more wildcard params that get passed to the component as props. These are identified as `:param` within the path string. You may also provide a render method or child elements instead of a component. See [Route](https://reacttraining.com/react-router/web/api/Route/route-render-methods) for more info.

Routes for this documents app

```jsx
<BrowserRouter>
  <div id="stage">
    <Nav />
    <Route exact path="/:category/:page" component={Page} />
    <Route exact path="/:category" component={Page} />
  </div>
</BrowserRouter>
```

## Links

While there is an API you can use to programmatically change the current route, the most common method to activate different routes is via a `<Link>` component. This will render a standard `<a>` tag element that, when clicked, will chang the app route based on the supplied properties. Alternatively, there is a `<NavLink>` component available that will add a configurable class to the `<a>` tag if it matches the current route. See [Link](https://reacttraining.com/react-router/web/api/Link) or [NavLink](https://reacttraining.com/react-router/web/api/NavLink) for more info.

```
  <Nav>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/stuff">Stuff</Link>
  </Nav>
```

## TODO: Providing a component with route params via `withRouter`

Document `witchRouter` and typing with `RouteComponentProps`.

## TODO: detecting route change within a component

Document edge cases with route changes

- Component only re-renders on route change, so if you commponent's content depends on the route information, it may be accessed in `componentWillUpdate` initially, but route changes will only be available via `componentDidUpdate`.
