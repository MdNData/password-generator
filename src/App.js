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

  //function for the generation of the password
  const generatePassword = () => {

    const passContainer = document.getElementById("display");
    let nCharacters = Number(document.getElementById("nChars").value);

    console.log(nCharacters);

    if(nCharacters == 0){
      nCharacters = 13;
    }

    if(nCharacters > 24 || nCharacters < 1) {
      passContainer.value = "Invalid Range ";
    } else {
      let password = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*{}[]()/\\\'"`~,;:.<>';
      
      for(var i=0; i < nCharacters; i++){
        var rnum = Math.floor(Math.random() * characters.length);
        password += characters.substring(rnum, rnum+1);
      }
  
      passContainer.value = password;
    }
  }

  const GetMain = () => {
    return (
      <main>
        <p className="name">
          Password :
        </p>
        <input type="text" className="display" placeholder="Password" id="display"/>

        <label>
          <p>Number of characters : <br/>(min 1 - max 24)</p>
          <input type="number" max="24" min="1" placeholder="13" id="nChars" />
        </label>

        <button onClick={generatePassword}>Generate</button>
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
