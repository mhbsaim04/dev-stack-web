Project Name: Development Stack Builder Website

Description: This is a Dev Stack React plus Vite project and fully responsive web application. It designed to help developers discover, compare, and build customized technology stacks for software projects.

Technology that used: 
1) React.js
2) Tailwind CSS, DaisyUI
3) Vite (build tool)
4) JSON (for technology data)
5) JavaScript (ES6+)

Features:
1) Responsive sticky navbar with mobile hamburger menu
2) Add / remove / remove-all stack functionality
3) Loading state while JSON is fetched


React questions and answers:

1. What is JSX, and why is it used in React?
Ans:

JSX stands for JavaScript XML. It allows us to write HTML like code inside JavaScript or TypeScript.

Example:
const element = <h1>Hello World</h1>;

2. What is the difference between props and state?
Props
Ans:

Props are data passed from a parent component to a child component.
<CountryCard name="Bangladesh" />

On the other hand,

State is data that belongs to a component and can change over time.
const [visited, setVisited] = useState(false);

In short, Props are used to pass data between components, while state is used to store and manage data that can change.

3. What does the useState hook do, and where did you use it in this project?
Ans:

useState allows a React component to store and manage changing data.
Example:
const [visited, setVisited] = useState(false);

In my project, i used useState in three places in this project.

1) Mobile menu: Navbar
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  }

2) Technology filter: Technologies
function Technologies({
  technologies,
  loading,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  const [filter, setFilter] = useState('All')
  }

3) Technology data, stack, and loading: App

export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)
}



4. What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: 

useEffect is used to perform side effects in a React component.
When the component was loaded, i need used it to load the JSON data.

5. Why does every item in a .map() list need a unique key prop?
Ans:

When we use .map() to create multiple React elements:

countries.map(country => (
  <CountryCard
    key={country.id}
    name={country.name}
  />
))

React needs a unique key to identify each item.

It helps React understand:

Which item was added?
Which item was removed?
Which item changed?


6. What is conditional rendering? Show one place you used it.
Ans:

Conditional rendering means showing different UI depending on a condition.

one place that i used it:

{stack.length === 0 ? (
  <div className="stack-empty">
    <span>Your stack is empty.</span>
  </div>
) : (
  <div className="stack-list">
    {stack.map((item) => (
      <div className="stack-item" key={item.id}>
        ...
      </div>
    ))}
  </div>
)}


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I passed the data from parent to child through props. A child can send information back to the parent by receiving a callback function as a prop and calling it.

The child doesn't directly change the parent's state. Instead, the parent gives the child a function.