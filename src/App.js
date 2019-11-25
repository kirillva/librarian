import React from "react";
import { SelectField, Panel, BaseField } from "components";

function App() {
  return (
    <Panel>
      <SelectField
        options={[
          { id: 1, value: "first" },
          { id: 2, value: "second" }
        ]}
      />
      <BaseField />
    </Panel>
  );
}

export default App;
