import React, { useEffect, useState } from "react";
import fetchcountries from "../Utils/Countries";

export default function FlagGame() {
  const [countries, setCountries] = useState([]);
  const [question, setQuestion] = useState(null);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchcountries();
      const format = data.map((e) => ({
        name: e.name.common,
        flag: e.flags.png,
      }));
      setCountries(format);
    };
    getData();
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      generateQuestion();
    }
  }, [countries]);

  const generateQuestion = () => {
    const random = countries[Math.floor(Math.random() * countries.length)];
    setQuestion(random);
    setInput("");
    setResult("");
  };

  const checkAnswer = () => {
    if (result) return //prevent form cheating agr ek correct ans ko baar baar submit krenge to scre badega wrna
    const userAns = input.trim().toLowerCase();
    const correctAns = question.name.toLowerCase();

    if (userAns === correctAns) {
      setResult("correct");
      setScore((prev) => prev + 1);
    } else {
      setResult("wrong");
    }
  };

  if (!question) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-orange-100 to-blue-100 p-4">
      {/* CARD */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Guess the Flag 🌍</h2>

        <p className="text-lg font-semibold mb-4">
          Score: <span className="text-orange-500">{score}</span>
        </p>

        {/* FLAG IMAGE */}
        <img
          src={question.flag}
          alt="flag"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        {/* INPUT */}
        <input
          type="text"
          placeholder="Enter Country Name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 outline-none focus:border-orange-500"
        />

        {/* BUTTONS */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={checkAnswer}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
          >
            Submit
          </button>

          <button
            onClick={generateQuestion}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Next
          </button>
        </div>

        {/* RESULT */}
        {result && (
          <p
            className={`mt-4 font-semibold ${
              result === "correct" ? "text-green-600" : "text-red-600"
            }`}
          >
            {result === "correct"
              ? "✅ Correct!"
              : `❌ Wrong! Correct: ${question.name}`}
          </p>
        )}
      </div>
    </div>
  );
}
