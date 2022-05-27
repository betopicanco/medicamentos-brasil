import { useState } from 'react';
import './App.css';
import InputMedsCSV from './components/InputMedsCSV';
import Nav from './components/Nav';
import SectionOptions from './components/SectionOptions';
import AppContext from './context/AppContext';

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
      <main>
        <h1>Medicamentos do Brasil</h1>
          {!meds ? (
            <div>
              <h2>Priemeiramente</h2>

              <InputMedsCSV />
            </div>
          ) : (
            <>
              <p>
                <strong>Arquivo carregado com sucesso!</strong>
              </p>
              <Nav />
              <SectionOptions />
            </>
          )}
      </main>
    </AppContext.Provider>
  );
}

export default App;
