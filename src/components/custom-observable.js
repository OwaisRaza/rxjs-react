import { Observable } from "rxjs";

function CustomObservable() {
  const customObservable = new Observable((observer) => {
    for (let i = 0; i < 5; i++) {
      if (i === 4) {
        observer.error("Unknown error. i value is 4 ");
      }
      observer.next(i);
    }
    observer.complete();
  });

  let observer = {
    next: (data) => console.log("custom Observable", data),
    error: (error) => console.log(error),
    complete: () => console.log("complete all data"),
  };

  customObservable.subscribe(observer);

  // another way's to call subscribe
  customObservable.subscribe({
    next: (data) => console.log("custom Observable 2", data),
    error: (error) => console.log(error),
    complete: () => console.log("complete all data 2"),
  });

  customObservable.subscribe(
    (data) => console.log("Observable 3", data),
    (error) => console.log("Observable 3", error),
    () => console.log("Observable 3 complete")
  );

  return <div>Custom Observable</div>;
}

export default CustomObservable;
