import Header from "./components/Header";
import Banner from "./components/Home/Banner";
import SolutionStep from "./components/SolutionStep";

export default function Home() {
  return (
    <>
      {" "}
      <div className="container mx-auto p-6 lg:px-8">
        <Banner />
        <SolutionStep />
      </div>{" "}
    </>
  );
}
