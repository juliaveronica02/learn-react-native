import React, {Component} from "react"
// import Container1 from "./components/container1"
// import WrongMutate from "./components/wrongMutateState"
// import CorrectMutate from "./components/correctMutateState"
 import UpdateState from "./components/updatingState"

class App extends Component {
  render() {
    return(
      <div className="App">
        React-Hooks-Class
        {/* <Container1 />
        <WrongMutate />
        <CorrectMutate /> */}
        <UpdateState />
      </div>
    )
  }
}

export default App;