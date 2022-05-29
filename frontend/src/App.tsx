import { useState } from 'react';
import Header from './components/Header';
import InputMedsCSV from './components/InputMedsCSV';
import Nav from './components/Nav';
import SectionOptions from './components/SectionOptions';
import SuccessWarning from './components/SuccessWarning';
import AppContext from './contexts/AppContext';

function App() {
  const [meds, setMeds] = useState();
  const [section, setSection] = useState();

  const dataProvider = {
    meds: meds,
    setMeds: setMeds ,
    section: section,
    setSection: setSection
  }

  return (
    <AppContext.Provider value={dataProvider}>
      <Header />
      <h1 className='text-center text-2xl py-4'>
        Medicamentos do Brasil
      </h1>
      <main className='h-full'>
          {!meds ? (
            <InputMedsCSV />
          ) : (
            <>
              <SuccessWarning />
              <Nav />
              <SectionOptions />
            </>
          )}
      </main>
    </AppContext.Provider>
  );
}

export default App;
