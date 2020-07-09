import React /*, { useEffect }*/ from "react";
import { SelectField, Panel, BaseField } from "components";
// import GameField from "classes/GameField";
import { connect } from "react-redux";
import _ from "lodash";
// import worker from "workers/worker.js";
// import workerize from "workerize";

const App = ({ persons, locations, ownedLocations }) => {
  // useEffect(() => {
  //   var mainField = new GameField();
  //   mainField.generate(10);

  //   (async () => {
  //     await mainField.step();
  //     debugger;
  //     console.log(mainField.persons);
  //   })();
  // }, []);
  const personKeys = _.keyBy(persons, "id");
  const locationKeys = _.keyBy(locations, "id");
  const ownerData = ownedLocations.map((item) => ({
    ...item,
    person: personKeys[item.person],
    location: locationKeys[item.location],
  }));

  // console.log(ownerData);
  return (
    <Panel>
      <SelectField
        options={[
          { id: 1, value: "1" },
          { id: 2, value: "2" },
          { id: 3, value: "3" },
          { id: 4, value: "4" },
          { id: 5, value: "5" },
          { id: 6, value: "6" },
          { id: 6, value: "6" },
          { id: 6, value: "6" },
          { id: 6, value: "6" },
          { id: 6, value: "6" },
          { id: 6, value: "6" },
          { id: 6, value: "6" },
        ]}
      />
      <BaseField />
    </Panel>
  );
};

const mapStateToProps = (state) => ({
  persons: state.persons,
  locations: state.locations,
  ownedLocations: state.ownedLocations,
});

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// });

export default connect(mapStateToProps, null)(App);
