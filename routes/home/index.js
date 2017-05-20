import { h, Component } from "preact";
import style from "./style.css";
import WorkoutCard from "../../components/workoutCards/index.js";

export default class Home extends Component {
  render() {
    const workoutTypes = ["beginner", "intermediate", "advanced"];
    const workoutCards = workoutTypes.map((item, index) => {
      return (
        <WorkoutCard
          key={index}
          workoutType={item}
          onClick={this.props.selectWorkoutType}
        />
      );
    });

    return (
      <div class="container">
        <div class="row">
          <section class={style.home}>
            <text>
              ALL MANKIND IS DIVIDED INTO THREE CLASSES - THOSE THAT ARE IMMOVABLE, THOSE THAT ARE MOVABLE, AND THOSE THAT MOVE.
            </text>
            <h1>Get Started</h1>
            <p>Choose a workout below to start a 12 week program.</p>
            {workoutCards}
          </section>
        </div>
      </div>
    );
  }
}
