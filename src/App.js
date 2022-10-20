import { useDispatch, useSelector } from "react-redux";
import { AddValue } from "./redux/action";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.testReducer);

  return (
    <div className="App">
      <h1>Hello {data.id}</h1>
      <h2>{data.title || "Start editing to see some magic happen!"}</h2>
      <button onClick={() => dispatch(AddValue(1))}> Test Add </button>
    </div>
  );
}
