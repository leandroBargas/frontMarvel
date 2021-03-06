import React, { useState } from 'react';
import { get } from '../../httpRequest';
import Hero from '../hero';

function Home() {
  const [heroes, setHeroes] = useState(null);
  const [limit, setLimit] = useState(30);
  const [search, setSearch] = useState('');
  React.useEffect(() => {
    get('/?limit=' + limit + '&search=' + search)
      .then((res) => {
        const heroes = res.data.data.results;
        setHeroes(heroes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [limit, search]);

  return (
    <div className="content">
      <div>
        <input
          className="search-bar"
          name="search"
          placeholder="pequisar"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <select
          className="limit"
          name="limit"
          id="limit"
          value={limit}
          onChange={(event) => setLimit(event.target.value)}
        >
          <option value=" "> </option>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      {heroes ? (
        <section className="wrapper-comics">
          {heroes.map((item) => (
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
          <h1>Encontre seu Herói Favorito</h1>
        </section>
      )}
    </div>
  );
}

export default Home;
