## React Hooks!
* Code more readable.
* React state hook we will working with useState().
  - Example using class:
  ```javascript
  import React, { Component } from 'react';
import './styles.css';

class Counter extends Component {
	state = {
		count: this.props.initialValue,
	};

	setCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<h2>This is a counter using a class</h2>
				<h1>{this.state.count}</h1>

				<button onClick={this.setCount}>Click to Increment</button>
			</div>
		);
	}
}

export default Counter;
```
  - Example with react hooks, can rewrite this component and remove a lot of stuff and making it easier to understand:
  ```javascript
  import React, { useState } from 'react';

  function CounterWithHooks(props) {
	const [count, setCount] = useState(props.initialValue);

	return (
		<div>
			<h2>This is a counter using hooks</h2>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Click to Increment</button>
		</div>
	);
}

export default CounterWithHooks;
```

## React state syntax
* useState syntax: const [count, setCount] = useState();
* useState function gives 2 things:
  - a variable to hold the state value, and called count, a function to change the value called setCount (we can change the name whatever we want).
  ```javascript
  const [myCount, setCount] = useState(0);
  ```
  - And we can use them throughout the code like nornal variables/functions:
  ```javascript
  function CounterWithHooks() {
	const [count, setCount] = useState();

	return (
		<div>
			<h2>This is a counter using hooks</h2>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Click to Increment</button>
		</div>
	);
}
```
  - useState hooks we are declaring/destruturing 2 things:
    * counter: a value which will hold our state value.
    * setCounter: a function which will change our counter variable.