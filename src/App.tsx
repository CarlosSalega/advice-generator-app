import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [advice, setAdvice] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice`);
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("An error has occurred", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => fetchData();

  return (
    <main className="font-Manrope font[28px] bg-Gray min-w-screen min-h-screen flex items-center">
      <article className="bg-Onyx w-[342px] h-[242px] rounded-xl px-10 pt-10 pb-16 mx-auto text-center relative">
        <h2 className="text-Glaucous mb-2">
          Advice #<span>117</span>
        </h2>
        <p className="text-Powder">{advice}</p>
        <button
          className="text-Powder cursor-pointer bg-Glaucous px-5 rounded-sm mt-8"
          onClick={handleClick}
        >
          Next
        </button>
      </article>
    </main>
  );
}

export default App;
