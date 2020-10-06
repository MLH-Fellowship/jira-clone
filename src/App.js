import React from 'react';
import './App.css';
import Homepage from "./pages/Homepage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Homepage />
    </DndProvider>
  );
}

export default App;
