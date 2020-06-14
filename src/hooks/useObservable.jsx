import { useEffect, useState } from "react";

export default function useObservable(stream) {
  const [value, setValue] = useState();
  useEffect(() => {
    let subscription = stream.subscribe(innerValue => {
      setValue(innerValue);
      console.log("salta subscripcion");
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return value;
}

