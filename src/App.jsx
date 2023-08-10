import { useEffect } from 'react';
import { Bugfender } from '@bugfender/sdk';
import Section from './components/Section';

const App = () => {
  useEffect(() => {
    Bugfender.log('App Created');
  }, []);
  return (
    <div className='bg-[#185459] h-screen'>
      <h1 className='text-center text-3xl font-bold text-[#fff] pt-[24px]'>
        Pomodoro App
      </h1>
      <Section />
    </div>
  );
};

export default App;
