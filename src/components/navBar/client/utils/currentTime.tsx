"use client";

import { useEffect, useState } from "react";

export default function CurrentTimeComp() {
  const [timeStr, setTimeStr] = useState(getCurrentDateTime());

  function getCurrentDateTime() {
    // Return the current date and time as a string.
    return new Date().toLocaleString();
  }

  // Update the current time every 5 seconds.
  useEffect(() => {
    setTimeStr(getCurrentDateTime());
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-sm mt-4">Rendered on: {timeStr}</h1>
    </div>
  );
}
