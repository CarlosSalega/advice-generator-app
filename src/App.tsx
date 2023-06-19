function App(): JSX.Element {
  return (
    <main className="font-Manrope font[28px] bg-Gray min-w-screen min-h-screen flex items-center">
      <article className="bg-Onyx w-[342px] h-[242px] rounded-xl px-10 pt-10 pb-16 mx-auto text-center relative">
        <h2 className="text-Glaucous mb-2">
          Advice #<span>117</span>
        </h2>
        <p className="text-Powder">
          "It's easy to sit up and take notice, what's difficult is gettings up
          and taking action."
        </p>
        <button className="text-Powder cursor-pointer bg-Glaucous px-5 rounded-sm mt-8">
          Next
        </button>
      </article>
    </main>
  );
}

export default App;
