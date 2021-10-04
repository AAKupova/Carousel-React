import React, { useState } from "react";

import { data } from "../../utilus/constant";
import { useApi } from "../../hooks/useApi";
import "./styles.css";

export const App = () => {
  const { photos } = useApi();
  const [slider, setSlider] = useState(0);
  const [sliderTwo, setSliderTwo] = useState(slider);

  const lenght = photos.length;

  const nextSlider = () => {
    setSlider(slider === lenght - 1 ? 0 : slider + 1);
    setSliderTwo(sliderTwo === lenght - 1 ? 0 : sliderTwo + 1);
  };

  const prevSlider = () => {
    setSlider(slider === 0 ? lenght - 1 : slider - 1);
    setSliderTwo(sliderTwo === 0 ? lenght - 1 : sliderTwo - 1);
  };

  console.log(slider);

  return (
    <div className="page">
      <header className="header">
        <nav className="navigation">
          <ul className="list">
            <li className="list__item">
              <a href="https://.*" className="list__link">
                Проекты
              </a>
            </li>
            <li className="list__item">
              <a href="https://.*" className="list__link">
                О нас
              </a>
            </li>
            <li className="list__item">
              <a href="https://.*" className="list__link">
                Работать с нами
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section className="slider">
          {photos.map(
            (item, index) =>
              index === slider && (
                <img  
                  key={item.id}
                  src={item.link}
                  alt={item.alt}
                  className="carusel__img"
                />
              )
          )}
          <div className="slider__scroll_right"></div>
          <div className="conteiner-center">
            <h1 className="title">Большой текст!</h1>
          </div>
          <div className="slider__scroll_left"></div>
        </section>
        <div className="cursor-round"></div>
        <button onClick={prevSlider} type="button" className="arrow_left">
          <span className="round"></span>
        </button>
        <button onClick={nextSlider} type="button" className="arrow_right">
          <span className="round"></span>
        </button>
        {/* <section className="carusel">
          <button
            onClick={prevSlider}
            type="button"
            className="arrow-btn arrow-btn_left"
          ></button>
          {photos.map(
            (item, index) =>
              index === slider && (
                <img
                  key={item.id}
                  src={item.link}
                  alt={item.alt}
                  className="carusel__img"
                />
              )
          )}
          <button
            onClick={nextSlider}
            type="button"
            className="arrow-btn arrow-btn_right"
          ></button>
        </section>
        <section className='info'>
          <h1 className='info__title'>Text info</h1>
          <button type="button" className='info__button'>Button</button>
        </section> */}
        {/* <div className='prewie'>
        <div className='prewie__block'></div>
        <div className='prewie__wrapper-img'>
        {
          photos.map((item, index) => 
            (index === slider && <img key={item.id}  src={item.link} alt={item.alt} className='prewie__img' />
          ))
        }
        </div>
        <button onClick={prevSlider} type='button' className='arrow-btn arrow-btn_left'></button>
        <button onClick={nextSlider} type='button' className='arrow-btn arrow-btn_right'></button>
      </div> */}
      </main>
    </div>
  );
};
