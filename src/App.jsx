import Pooh from "./components/Pooh";
import Noodee from "./components/Noodee";
import Boon from "./components/Boon";
import Bright from "./components/Bright";
import Muping from "./components/Muping";

const App = () => {
  return (
    <section className=" h-screen w-full p-10">
      <h1 className=" absolute top-47 shadow-10xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-extrabold text-[#303030]">MEMBER'S GROUP OUR GROUP</h1>
      <div className="grid grid-cols-5 place-content-center w-full h-full gap-10">
        <Boon />
        <Muping />
        <Pooh />
        <Noodee />
        <Bright />
      </div>
    </section>
  );
};

export default App;
