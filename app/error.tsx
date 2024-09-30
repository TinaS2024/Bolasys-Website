"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Irgendetwas ging schief!</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Versuche die Seite noch einmal zu laden.
      </button>
    </div>
  );
}
