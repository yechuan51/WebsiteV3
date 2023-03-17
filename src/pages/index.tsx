import CurrentTimeComp from "@/components/navBar/client/utils/currentTime";

export default function Home() {
  return (
    <div className="flex justify-end items-start top-0 right-0">
      <CurrentTimeComp />
    </div>
  );
}
