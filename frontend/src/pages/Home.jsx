import React from 'react';
import Factorial from '../components/Factorial';
import Fibonacci from '../components/Fibonacci';
import MCD from '../components/MCD';
import CambioMonedas from '../components/CambioMonedas';
import TorresHanoi from '../components/TorresHanoi';
import factorialService from '../services/factorialService';
import fibonacciService from '../services/fibonacciService';
import mcdService from '../services/mcdService';
import cambioMonedasService from '../services/cambioMonedasService';
import torresHanoiService from '../services/torresHanoiService';

const Home = () => (
  <div className="container">
    <h1>Ejercicios de Recursividad</h1>
    <div className="grid">
      <Factorial service={factorialService} />
      <Fibonacci service={fibonacciService} />
      <MCD service={mcdService} />
      <CambioMonedas service={cambioMonedasService} />
      <TorresHanoi service={torresHanoiService} />
    </div>
  </div>
);

export default Home;
