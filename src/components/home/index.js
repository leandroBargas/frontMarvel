import React, { useState } from 'react';
import { get } from '../../httpRequest';
import Hero from '../hero';

function Home() {
  const [heros, setHeros] = useState(null);
  const [limit, setLimit] = useState(30);
  React.useEffect(() => {
    get('/?limit=' + limit)
      .then((res) => {
        const heros = res.data.data.results;
        setHeros(heros);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [limit]);

  return (
    <div className="content">
      <div>
        <input name="search" placeholder="pequisar" />
        <select
          name="limit"
          id="limit"
          value={limit}
          onChange={(event) => setLimit(event.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>

      {heros ? (
        <section className="wrapper-comics">
          {heros.map((item) => (
            <React.Fragment key={item.id}>
              <Hero
                url={''}
                title={item.name}
                thumbnail={item.thumbnail.path + '.' + item.thumbnail.extension}
              />
            </React.Fragment>
          ))}
        </section>
      ) : (
        <section className="wrapper-call">
          <h1>FIND THE COMICS OF YOUR FAVORITE SUPERHERO</h1>
          <h2>
            typing the name of hero or clicking in start now to show them
            aleatoring
          </h2>
        </section>
      )}
    </div>
  );
}

export default Home;
