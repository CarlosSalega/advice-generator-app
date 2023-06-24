import { useEffect, useState } from "react";
import { RiAiGenerate } from "react-icons/ri";

interface adviceData {
  slip: {
    advice: string;
  };
}

function App(): JSX.Element {
  const [advice, setAdvice] = useState<string | JSX.Element>("");
  const [randomAdviceId, setRandomAdviceId] = useState<number>(1);

  const fetchData = async (id: number) => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
      const data: adviceData = await response.json();
      if (response.ok && data && data.slip && data.slip.advice) {
        setAdvice(data.slip.advice);
      } else {
        setAdvice(<span className="text-4xl font-bold text-Powder">...</span>);
      }
    } catch (error) {
      console.error("An error has occurred", error);
    }
  };

  useEffect(() => {
    fetchData(randomAdviceId);
  }, [randomAdviceId]);

  const generateRandomAdviceId = (): number => {
    const newRandomAdviceId = Math.floor(Math.random() * 200);
    return newRandomAdviceId === 0
      ? generateRandomAdviceId()
      : newRandomAdviceId;
  };

  const handleClick = () => {
    const newRandomId = generateRandomAdviceId();
    setRandomAdviceId(newRandomId);
  };

  return (
    <main className="font-Manrope bg-Gray min-h-screen min-w-full flex items-center justify-center">
      <article className="bg-Onyx w-96 rounded-xl p-8 flex items-center justify-center flex-col h-64">
        <h2 className="text-Glaucous font-bold">
          Tip #<span>{randomAdviceId}</span>
        </h2>
        <div className="h-40 flex items-center">
          <p className="text-Powder text-center">{advice}</p>
        </div>
        <div className="mb-4">
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="nonzero">
              <path
                className="fill-Powder"
                d="M0 8h122v1H0zM173 8h122v1H173z"
              />
              <g transform="translate(138)" className="fill-Powder">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <button
          type="button"
          className={`text-Powder cursor-pointer bg-Glaucous px-4 py-1 rounded-md inline-flex items-center gap-x-2 hover:bg-Sha`}
          onClick={handleClick}
        >
          {<RiAiGenerate />}
          <span>Generate</span>
        </button>
      </article>
    </main>
  );
}

export default App;
