import React from "react";

const SolutionStep = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Centered Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-green-600">
          - Fastest Solution
        </h2>
        <h1 className="text-4xl font-bold text-green-600 mt-4">
          Easy Steps And Get Your Solution
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="p-6 bg-green-500 rounded-md text-white shadow-lg hover:bg-green-700 cursor-pointer hover:scale-105 transition-all hover:shadow-xl">
          <img
            src="\images\medical.png"
            className="w-16 rounded-full shadow-md mb-3"
            alt="Medical"
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p className="py-3">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="p-6 bg-green-500 rounded-md text-white shadow-lg hover:bg-green-700 cursor-pointer hover:scale-105 transition-all hover:shadow-xl">
          <img
            src="\images\medical.png"
            className="w-16 rounded-full shadow-md mb-3"
            alt="Medical"
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p className="py-3">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="p-6 bg-green-500 rounded-md text-white shadow-lg hover:bg-green-700 cursor-pointer hover:scale-105 transition-all hover:shadow-xl">
          <img
            src="\images\medical.png"
            className="w-16 rounded-full shadow-md mb-3"
            alt="Medical"
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p className="py-3">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="p-6 bg-green-500 rounded-md text-white shadow-lg hover:bg-green-700 cursor-pointer hover:scale-105 transition-all hover:shadow-xl">
          <img
            src="\images\medical.png"
            className="w-16 rounded-full shadow-md mb-3"
            alt="Medical"
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p className="py-3">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionStep;
