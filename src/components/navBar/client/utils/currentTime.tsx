import { useEffect, useState } from "react";

export default function CurrentTimeComp() {
  function getCurrentDateTime() {
    // Return the current date and time as a string.
    return new Date().toLocaleString();
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-sm mt-4">Rendered on: {getCurrentDateTime()}</h1>
    </div>
  );
}
