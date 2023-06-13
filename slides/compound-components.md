---
title: Compound Components
---

# Compound Components
## Kevin Nguyen

<!--
test
-->

---

### Understanding Compound Components
<hr/>

### Definition

Design pattern in React where a parent component wraps multiple child components, 
allowing the parent to control the behavior and rendering of the child components.

**Goal** - Reusable and flexible components.

<div style="height: 4em"></div>


### Why Compound Components?

- Encourages composition over configuration
- Provides a clean and intuitive API for the consumers of the component
- Allows for flexible customization while maintaining consistency

---

### Anatomy of Compound Components
<hr/>

## _Parent Component_

- In compound components, we have a parent component that acts as a container for the child components. 
- Parent component manages the state and provides the necessary context for the child components to interact.

<hr/>

> Parents know how to manage state and context.

<hr/>

---

### Anatomy of Compound Components
<hr/>

## _Child Components_

- Individual components that are wrapped by the parent component. 
- Props passed down from parent component.
- Render based on parent's state or context.

<hr/>

> Child components only know how to render, but not why to render

<hr/>

---

### Anatomy of Compound Components
<hr/>

> Children only concerned with presentation
>
> Parents only concerned with managing context

These components end up tightly coupled to each other, while still allowing
freedom in customization

---

### Example: Disclosure Component

<v-clicks>
<div>
<details>
  <summary>
    Have you seen one of these before?
  </summary>
  It's a summary html element!
</details>
<hr/>
</div>

```html
<details>
  <summary>
    Have you seen one of these before?
  </summary>
  It's a summary html element!
</details>
```
</v-clicks>

---

### Naive approach

```jsx {|2,4,8|5,6,9|} {lines: true}
const Disclosure = ({label, children}) => {
  const [open, setOpen] = useState(false);
  return <div>
    <button onClick={() => setOpen(!open)}> 
      {isOpen ? <FaAngleDown /> : <FaAngleRight />}
      {label} 
    </button>
    <div hidden={!open}>
       {children} 
    </div>
  </div>
}

<Disclosure label="click me!">
  My contents
</Disclosure>
```

<v-clicks>

- What if I don't want to render an icon?
- What if I need access to onChange?
- What if I need to forward a ref?
- ...
- Keep adding more and more props??
</v-clicks>

---

### Separate the concerns

```jsx {|1-14|16-34|35-47|49-60} {lines: true, maxHeight: '100%'}
const DisclosureContext = React.createContext()
export function Disclosure({ children, onChange, defaultOpen = false, ...props }) {
  const [open, setOpen] = React.useState(defaultOpen)

  const context = {
    open,
    onSelect: () => {
      setOpen(!open)
      onChange && onChange(!open)
    },
  }

  return <DisclosureContext.Provider children={children} value={context} />
}

export const DisclosureButton = React.forwardRef(
  ({ children, onClick, ...props }, forwardedRef) => {
    const { open, onSelect } = React.useContext(DisclosureContext)

    return (
      <button
        {...props}
        onClick={() => {
          onSelect();
          onClick && onClick(); 
        }}
        ref={forwardedRef}
      >
        {children}
      </button>
    )
  }
)

export const DisclosurePanel = React.forwardRef(({ children, ...props }, forwardedRef) => {
  const { open } = React.useContext(DisclosureContext)

  return (
    <div
      {...props}
      hidden={!open}
      ref={forwardedRef}
    >
      {children}
    </div>
  )
})

function App() {
  const [count, setCount] = React.useState(false)
  const logClick = () => {
    console.log("Clicked!")
  }
  return (
    <Disclosure onChange={(open) => {setCount(count+1)}}>
      <DisclosureButton onClick={logClick}> Click me! ({count} times)</DisclosureButton>
      <DisclosurePanel>Panel Info</DisclosurePanel>
    </Disclosure>
  )
}
```

- Offering more flexibility in rendering
  - Specific contents, ordering of panel + button, passing classes to specific markup.
- Access to forward refs
- Choice of icons behavior and layout.

---

### Example: Tabs Component

Let's take a look at a practical example of compound components using a Tabs component.

```jsx {|2|9,10,17|2,9,10,17|23-} {lines: true, maxHeight: '100%'}
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="tab-header">
        {children.map((child, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {children[activeTab]}
      </div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <>{children}</>;
};

const App = () => {
  return (
    <Tabs>
      <Tab label="Tab 1">
        <p>Content for Tab 1</p>
      </Tab>
      <Tab label="Tab 2">
        <p>Content for Tab 2</p>
      </Tab>
      <Tab label="Tab 3">
        <p>Content for Tab 3</p>
      </Tab>
    </Tabs>
  );
};
```

<!-- 
  - Parent component: Tabs
  - Child component: Tab
    - Notice how child component does not have any knowledge of when or how to render itself.
    - If we need to change how tabs are displayed as a whole
  
  - App: We can organize the tabs however we want. Tabs handles all logic for selection + rendering logic
-->

---



```jsx {monaco}
const Tab = ({ children }) => {
  return <>{children}</>;
};

const App = () => {
  return (
    <Tabs>
      <Tab label="Tab 1">
        <p>Content for Tab 1</p>
      </Tab>
      <Tab label="Tab 2">
        <p>Content for Tab 2</p>
      </Tab>
      <Tab label="Tab 3">
        <p>Content for Tab 3</p>
      </Tab>
    </Tabs>
  );
};
```

---

# How is this different from prop-drilling??

- Prop drilling can be *deep*, involving multiple intermediate components between source and destination.
    - Compound components aim to encapsulate related state, and decouple component logic and rendering.
- Prop drilling leads to a situation where intermediate components receive props that they don't use

- Compound components ideally stay shallow

---

# Sandbox!

<img src="/cc-parent-child.png"/>

---
