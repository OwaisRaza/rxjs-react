import "./App.css";
import { from } from "rxjs";
import CustomObservable from "./components/custom-observable";
import CancellingObservable from "./components/cancelling-observable";

function App() {
  const promise = [
    {
      name: "jon",
    },
    {
      name: "Doe",
    },
    {
      name: "kz",
    },
    {
      name: "ovais",
    },
  ];
  const promiseObservable$ = from(promise);

  promiseObservable$._subscribe({
    next: (data) => console.log(data),
    error: (error) => console.log(error),
    complete: () => console.log("Done "),
  });

  return (
    <div className="App">
      RXJS App
      <CustomObservable />
      <CancellingObservable />
    </div>
  );
}

export default App;
