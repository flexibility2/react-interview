import "./App.css";
import { ForwardRefDemo } from "./component/ForwardRefDemo";
import { MemoDemo } from "./component/MemoDemo";
import { RefDemo } from "./component/RefDemo";

function App() {
  return (
    <>
      <h1>APP</h1>
      <RefDemo></RefDemo>
      <ForwardRefDemo></ForwardRefDemo>
      <MemoDemo></MemoDemo>
    </>
  );
}

export default App;
