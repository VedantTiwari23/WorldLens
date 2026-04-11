import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* HERO SECTION */}
      <div className="relative h-75">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
          alt="world map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            🌍 Country Explorer
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto py-10 px-4">
        {/* Intro */}
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10">
          Country Explorer is an interactive platform where you can explore
          countries and test your knowledge with fun guessing games.
        </p>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src="https://images.openai.com/static-rsc-4/PGkeJkADKKILvoD9VSXnnND7LY7s2uuTbqrPib5rXlG64GH4n8ecuH_PBxqGYbkGWuuVXAIo_KnlwlgG04DOAIOO9jBIbsefwI-HPceTWLrDMqEXDMwkMu6lVzZQldm-6dKGEB2ttuHBX95Fu9R2yIA1O4uL5Au79dEHJOFUywrbYBzTC1xuWQ2vQVxrShtv?purpose=fullsize"
            alt="explore world"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              ✨ Explore Countries
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Search and filter countries, view flags, and discover interesting
              information about different regions of the world.
            </p>
          </div>
        </div>

        {/* GAME SECTION */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              🎮 Guess the Country
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Test your geography skills with our fun flag guessing game and
              challenge yourself to identify countries correctly.
            </p>
          </div>

          <img
            src="https://i.etsystatic.com/19101601/r/il/54f20d/3390837828/il_570xN.3390837828_n9g4.jpg"
            alt="flags"
            className="rounded-2xl shadow-lg"
          />
        </div>

        
    </div>
    {/* PURPOSE */}
        <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow max-w-full">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            🎯 Purpose
          </h2>
          <p className="text-gray-600 dark:text-gray-300 ">
            This project blends learning and fun by combining country
            exploration with interactive games, making geography engaging and
            enjoyable.
          </p>
        </div>

        {/* FOOTER */}
        <p className="text-center mt-10 text-gray-500">
          Built with ❤️ by Vedant using React & Tailwind CSS
        </p>
      </div>
  );
}

export default About;
