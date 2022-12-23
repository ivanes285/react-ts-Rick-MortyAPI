import React, { Fragment, useEffect, useState } from "react";
import Character, { CharacterInterface } from "../Character/Character";
import { Pagination } from "../Pagination";
export interface CharacterListInterface {}

const CharacterList: React.FC<CharacterListInterface> = () => {
  const [character, setcharacter] = useState<CharacterInterface[]>([])
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${[page]}`);
      const data = await response.json();
      setcharacter(data.results);
     
    };
    fetchData();
  }, [page]);


  return (
    <Fragment>
      <Pagination page={page} setPage={setPage}/>
    <div className=" flex flex-wrap justify-center items-center gap-9 my-8">
    {
    character.map(c=>(
      <Character key={c.id} name={c.name} status={c.status} image={c.image} species={c.species} />
      ))
    }
    </div>
    <div className="mb-8">
    <Pagination page={page} setPage={setPage} />
    </div>
    </Fragment>
  );
};

export default CharacterList;
