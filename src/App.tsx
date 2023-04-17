import { useEffect, useState } from "react";

const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdviceString(data.slip.advice);
    setAdviceId(data.slip.id);
    console.log(data);
  };

  const [adviceString, setAdviceString] = useState<string>("");
  const [adviceId, setAdviceId] = useState<number>(0);

  return (
    <main className="flex flex-col h-screen overflow-visible justify-center font-Manrope bg-dark-blue">
      <div className="flex-col m-auto bg-dark-grayish-blue w-4/12 rounded-xl h-96 p-10 text-center mobile:w-11/12">
        <h2 className="text-neon-green uppercase tracking-wider text-sm m-auto">
          Advice #{adviceId || "Loading..."}
        </h2>
        <div className="text-3xl text-white h-44 w-10/12 mt-5 text-center m-auto mb-5 desktop:text-2xl">
          {adviceString || "Loading..."}
        </div>
        <img
          src="./images/pattern-divider-desktop.svg"
          alt="divider"
          className="p-2 m-auto"
        />
        <div className="-mb-20">
          <button
            className="bg-neon-green text-dark-blue p-4 rounded-full mt-16"
            onClick={fetchData}
          >
            <img src="./images/icon-dice.svg" className="w-8"></img>
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
