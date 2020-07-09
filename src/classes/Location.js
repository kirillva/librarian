export default class Location {
  owner;
  buildings = {};
  constructor({ owner }) {
    this.owner = owner;
  }
  step() {
    console.log("location");
  }
}
