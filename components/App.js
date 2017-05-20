import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Home from "../routes/home";
import Profile from "../routes/profile";
import WorkoutPlan from "./workoutPlan";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      workout: {}
    };
  }

  selectWorkoutType = type => {
    const selected = {
      selected: true,
      workoutType: type
    };
    const newState = Object.assign(this.state.workout, selected);
    this.setState({ workout: newState });
  };

  render({}, state) {
    return (
      <div id="app">
        <Header />
        <Router>
            <Home workout={this.state.workout} selectWorkoutType={this.selectWorkoutType} path="/" />
        </Router>
         {this.state.workout.selected && <StartButton /> }
      </div>
    );
  }
}

const StartButton = () => <button>START!</button>