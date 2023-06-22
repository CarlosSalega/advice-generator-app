import { useEffect, useState } from "react";

interface adviceData {
  slip: {
    advice: string;
  };
}

function App(): JSX.Element {
  const [advice, setAdvice] = useState<string>("");
  const [randomId, setRandomId] = useState<number>(1);

  const fetchData = async (id: number) => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
      const data: adviceData = await response.json();
      if (response.ok && data && data.slip && data.slip.advice) {
        setAdvice(data.slip.advice);
      } else {
        setAdvice("...");
      }
    } catch (error) {
      console.error("An error has occurred", error);
    }
  };

  useEffect(() => {
    fetchData(randomId);
  }, [randomId]);

  const handleClick = () => {
    let newRandomId = Math.floor(Math.random() * 200);
    while (newRandomId === 0) {
      newRandomId = Math.floor(Math.random() * 200);
    }
    setRandomId(newRandomId);
  };

  return (
    <main className="font-Manrope bg-Gray min-h-screen flex items-center justify-center">
      <article className="bg-Onyx w-96 h-96 rounded-xl p-8 flex items-center justify-center flex-col">
        <h2 className="text-Glaucous mb-4">
          Tip #<span>{randomId}</span>
        </h2>
        <div className="h-40 flex items-center">
          <p className="text-Powder text-center">{advice}</p>
        </div>
        <button
          className="text-Powder cursor-pointer bg-Glaucous px-4 py-2 rounded-md mt-4"
          onClick={handleClick}
        >
          Next
        </button>
      </article>
    </main>
  );
}

export default App;
