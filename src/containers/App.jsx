import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrusel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const api = 'http://localhost:3000/initialState';

const App = () => {

  const initialState = useInitialState(api);

  return (
    <div className='App'>
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrusel>
            {initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carrusel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carrusel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carrusel>
      </Categories>

      <Categories title='Originales'>
        <Carrusel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carrusel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
