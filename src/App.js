import './App.css';
import { GetHeader } from './components/Header';
import { GetMain } from './components/Main';

function App() {

  //APP VISUALIZATION AND MAIN CONTAINER
  return (
    <div className="App">
      {/* START Header */}
      <GetHeader 
        mainTitle="Password Generator"
        secondTitle="Random, Secure and Free"
        />
      {/* END Header */}

      {/* START Main */}
      <GetMain />
      {/* END Main */}

    </div>
  );


}

export default App;
