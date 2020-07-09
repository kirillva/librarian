import uuid from "uuid/v4";

export default class Person {
  prestige = 0;
  piety = 0;
  money = 0;
  id;
  constructor() {
    this.id = uuid();
  }
}
