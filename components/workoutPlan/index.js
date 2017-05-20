import { h, Component } from "preact";
import style from "./style.css";
import * as plans from "./plans.js";

class WorkoutPlan extends Component {
  constructor() {
    super();
    this.state = {
      workoutPlanPreview: {}
    };
  }

  componentDidMount() {
    this.setState({ workoutPlanPreview: plans[this.props.type] });
  }

  render() {
    const { week1 } = this.state.workoutPlanPreview;

    return (
      <div class="container">
        <div class="row">
          {week1 &&
            <article class={style.workoutPlan}>
              <h1>Workout Plan</h1>
              <h2>{this.props.type}</h2>
              <h3>Week One</h3>
              <div class="col-xs-12 col-md-4">
                <div class={style.card}>
                  <header>Day One - {week1.day1.title} </header>
                </div>
              </div>
              <div class="col-xs-12 col-md-4">
                <div class={style.card}>
                  <header>Day Two - {week1.day2.title} </header>
                </div>
              </div>
              <div class="col-xs-12 col-md-4">
                <div class={style.card}>
                  <header>Day Three - {week1.day3.title} </header>
                </div>
              </div>

            </article>}
          <button>START!</button>
        </div>
      </div>
    );
  }
}

export default WorkoutPlan;
