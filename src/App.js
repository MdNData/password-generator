import './App.css';

function App() {

  //Random password generator
  const GenerateRandomPassword = (length) => {
    //characters being used
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#%^&*$";

    //container for the final string
    let str = '';

    //for loop to pick the characters
    for(let i = 0; i < length; i++){
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;

  }

  //Header container
  const GetHeader = () => {
    return (
      <header>
        <h1>
          Password Generator 
        </h1>
        <h2>
          Random, Secure and Free
        </h2>
      </header>
    );
  };

  return (
    <div className="App">
      {/* START Header */}
      <GetHeader />
      {/* END Header */}

      {/* START Main */}
      <main>

      </main>
      {/* END Main */}

    </div>
  );


}

export default App;
