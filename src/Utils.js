import React from "react";

export const isPromise = (v) => {
  return v && typeof v.then === "function";
};

export const useAsyncError = () => {
  const [_, setError] = React.useState();
  return React.useCallback(
    (e) => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
};
