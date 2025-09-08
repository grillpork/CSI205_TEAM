import Pooh from "./components/pooh";
import Noodee from "./components/noodee";
import Boon from "./components/Boon";
import Bright from "./components/bright";
import Muping from "./components/Muping";

const App = () => {
  return (
    <section className=" h-screen w-full">
      <h1 className=" absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-black">Member's group our group</h1>
      <div className="grid grid-cols-5 place-content-center w-full h-full p-4">
        <Muping />
        <Boon />
        <Pooh />
        <Noodee />
        <Bright />
      </div>
    </section>
  );
};

export default App;
