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

  //Header component
  const GetHeader = (props) => {
    return (
      <header>
        <h1>
          {props.mainTitle} 
        </h1>
        <h2>
          {props.secondTitle}
        </h2>
      </header>
    );
  };

  const GetMain = () => {
    return (
      <main>
        <p class="name">
          Password :
        </p>
        <input type="text" class="display" placeholder="Password" />

        <label>
          <p>Number of characters : <br/>(min 1 - max 24)</p>
          <input type="number" max="24" min="1" placeholder="13" />
        </label>

        <button>Generate</button>
      </main>
    );
  };

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
      <GetMain 

      />
      {/* END Main */}

    </div>
  );


}

export default App;
