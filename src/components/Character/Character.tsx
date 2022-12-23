import React from "react";
export interface CharacterInterface {
  id?: number;
  name: string;
  status: string;
  image: string;
  gender?: string;
  vive?: string;
  species?: string;
}

const Character: React.FC<CharacterInterface> = ({ name, status, image,species }) => {
  return (
    <div className="max-w-sm h-95 rounded-2xl overflow-hidden shadow-lg bg-slate-800  hover:bg-slate-700 ">
      <div className={`w-full bg-cover bg-center hover:opacity-75`}>
        <img src={image} alt={name} />
      </div>
      <div className="flex flex-col mx-5 my-4 ">
        <div className=" font-bold text-lg ">
          <p className="text-center  text-[#16ACC9]">{name}</p>
      <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <p className="text-left font-bold text-md text-[#CCD853]">Especie</p>
		<span className="text-left">{species}</span>
      </div>
		
    </div>
  );
};

export default Character;
