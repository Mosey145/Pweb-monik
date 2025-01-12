import React from 'react';
import MainContent from '../Components/MainContent';

export default function Home() {
  return (
    <MainContent>
      <div className="title-home">
        <div
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            fontFamily: 'Poppins, sans-serif',
            color: '#B1F0F7',
          }}
        >
          Praktikum Pemrograman Web
        </div>
        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            fontFamily: 'Roboto Slab, serif',
            color: '#F5F0CD',
          }}
        >
          Pertemuan 2
        </div>
      </div>

      <div className="content-home">
        <div>
          <div
            className="label-title"
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              fontFamily: 'Lobster, cursive',
              color: '#004d80',
            }}
          >
            Monika Dian Vidya Putri
          </div>
          <div
            style={{
              fontSize: '1rem',
              fontFamily: 'Poppins, sans-serif',
              color: '#333333',
              lineHeight: '1.6',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quae.
          </div>
        </div>

        <div>
          <div
            className="label-title"
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              fontFamily: 'Lobster, cursive',
              color: '#004d80',
            }}
          >
            51422735
          </div>
          <div
            style={{
              fontSize: '1rem',
              fontFamily: 'Poppins, sans-serif',
              color: '#333333',
              lineHeight: '1.6',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, natus!
          </div>
        </div>
      </div>
    </MainContent>
  );
}
