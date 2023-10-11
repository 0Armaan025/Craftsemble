import { useEffect, useCallback } from "react";
import { register, Hanko } from "@teamhanko/hanko-elements";
import { useMemo } from "react";

const hankoApi = 'https://ae043347-1b5a-4254-a847-ca19a03a2dd3.hanko.io';

export default function HankoAuth() {

  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = () => {
    // do nothing
    console.log('hi')
  };

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        console.log("done")
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
      console.log(error);
    });
  }, []);

  return <hanko-auth />;
}
