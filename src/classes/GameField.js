// import worker, { PIETY } from "workers/worker.js";
// import workerize from "workerize";
import Person from "./Person";
import Factor from "./Factor";
import Location from "./Location";

export default class GameField {
  persons = [];
  factors = [];
  locations = [];
  generate(len) {
    for (let index = 0; index < len; index++) {
      this.persons.push(new Person());
    }
    for (let index = 0; index < len; index++) {
      this.factors.push(new Factor(this.persons[index]));
    }
    for (let index = 0; index < len; index++) {
      this.locations.push(new Location({ owner: this.persons[index] }));
    }
  }

  async step() {
    // let w = workerize(worker);
    for (let index = 0; index < this.factors.length; index++) {
      const factor = this.factors[index];
      // factor.person = await w.call(PIETY, [factor.person]);
    }
  }
}
