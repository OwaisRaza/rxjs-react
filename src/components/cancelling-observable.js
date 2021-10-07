import { interval } from "rxjs";

function CancellingObservable() {
  const observable = interval(1000);

  const subscription = observable.subscribe((x) => {
    console.log(x);
  });

  setTimeout(() => {
    subscription.unsubscribe();
  }, 8000);

  return (
    <>
      <div>Cancel Observable</div>
    </>
  );
}

export default CancellingObservable;
