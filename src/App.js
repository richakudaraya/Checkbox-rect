import React from "react";
import Checkbox from "./components/Checkbox";
import "./App.css";

function App() {
  const [question, setQuestion] = React.useState({
    label: "testing",
    check: false
  });

  const handleQuestionChange = (check) => {
    setQuestion({ ...question, check: check });
  };

  return (
    <div>
      <header className="App-header">
        <Checkbox
          label={question.label}
          check={question.check}
          onCheck={handleQuestionChange}
        />
      </header>
    </div>
  );
}

export default App;
