import React from 'react';
import { actors } from '../data';

const Actors = (actor) => {
  return (
    <div className = 'actor'>
      <h1>Actors Page</h1>
      {actors.map(actor => <div>
                               {actor.name}
                               {actor.movies.map(movie => <li>{movie}</li>)}
                          </div>)}
    </div>
  );
};
export default Actors;
