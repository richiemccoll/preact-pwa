import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Home from "../routes/home";
import Profile from "../routes/profile";
import WorkoutPlan from "./workoutPlan";
import BottomNav from "./bottomNav";
import { LoadingIndicator } from "./loadingIndicator";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      workout: {},
      loading: true
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
          {this.state.loading
            ? <LoadingIndicator />
            : <Home
                workout={this.state.workout}
                selectWorkoutType={this.selectWorkoutType}
                path="/"
              />}
        </Router>
        <BottomNav />
      </div>
    );
  }
}


