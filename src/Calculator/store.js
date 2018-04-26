import { observable } from "mobx";

/*
  MobX in create-react-app without Decorators
*/

const CalculatorStore = observable({
  // observable properties
  _name: "Calculator Store",

  // get: to read class variables
  get name() {
    return this._name;
  },

  // action: (are anything that modify the state)
  setName(name) {
    this._name = name;
  }
});

export default CalculatorStore;