import "./App.css";
import { from } from "rxjs";

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

  return <div className="App"></div>;
}

export default App;
