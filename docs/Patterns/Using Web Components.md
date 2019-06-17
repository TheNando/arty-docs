# Using Web Components

A React component may contain many Web Components within. It will often be necessary to access the methods and properties of those web components to manage their state from within a stateful React component (it's not possible for stateless components)

### Defining strong types
In order to use Web Components in React with Typescript, they must be defined as JSX intrinsic elements. This means then need types to define all the properties to register with JSX. However, JSX only knows about the attributes, while when used within the component, the user may also need to access the methods and/or properties. This means two types will be needed (because JSX will complain, for example, if a web component has a method defined, but it's not passed in as an attribute when used)

Example Web Component Type
```ts
// WCTabset is the intrinsic type for JSX, only including attributes
// WebComponent is a custom type defining HTML Element attributes, like 'class'
interface WCTabset extends WebComponent {
  // All attributes go here in kebab case
  'current-tab'?: number;
}

// WCTabsetElement is for using the web component instance within
// React Component lifecycle hooks and instance methods
interface WCTabsetElement extends HTMLElement {
  // All methods and properties go here
  currentTab: number;
  selectNext: Function;
}
```

### Accessing web component instance
In order for a React component to access the instance of a child web component, it must have access to a reference. JSX recognizes a universal `ref` property that allows for obtaining that.

```ts
class MyReactComponent extends React.Component<MyProps> {
  render() {
    return (<hx-tabset ref={ /* access the ref here */} />)
  }
}
```

There are a number of options to obtain the ref: a string literal which will be added to `this.refs` as a generic `React.ReactInstance` type, via a callback, or using `React.createRef`. The `createRef` method offers the best solution, as it is a generic which will allow us to type it in one place instead of anywhere we use the reference. We can add the ref as a class field and pass the field reference to the `ref` property to assign it.

```ts
class MyReactComponent extends React.Component<MyProps> {
  // Use the Element type to access the methods and properties
  private tabsetRef = React.createRef<WCTabsetElement>();

  render() {
    // Assign the element web component instance to the empty React component instance 
    return (<hx-tabset ref={this.tabsetRef} />)
  }
}
```

This reference will contain a `current` member which yields access to the web component instance directly. It's worth note that this reference will initially be null until the React component mounts (which causes the first render, which assigns the reference), so anytime the web component is referenced, Typescript will insist that it may be `null`. This means in order to use a method on the web component instance, it must either be gated by a null check or non-null assertion, cast to the web component type directly, or defaulted on each use. This can be cumbersome, so a shortcut is recommended.

```ts
class MyReactComponent extends React.Component<MyProps> {
  private tabsetRef = React.createRef<WCTabsetElement>();

  // Create a getter to avoid cumbersome boilerplate
  get tabset() {
    // Use a non-null assertion (!) so TS doesn't complain
    return this.tabsetRef.current!;
  }

  componentDidMount() {
    // Now `tabsetRef` is on the instance of the React component, properly typed, and any
    // of the web component instance methods and properties can be used
    
    // It has all the properties of HTMLElement
    // Note that any registered listeners will need to call `setState` to update component
    this.tabset.addEventListener(...);
    
    // It has the methods and properties of the custom Web Component type
    this.tabset.selectNext();
  }
}
```

One final note: ideally, non-null assertion usage should be avoided. However, this is the cleanest implementation. It is assured that none of the instance methods can be executed until the component has mounted at which point the reference will definitely exist.
