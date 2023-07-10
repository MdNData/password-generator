<<<<<<< HEAD
import { generatePassword } from "../scripts/generatePassword";

export const GetMain = () => {
  return (
    <main>
      <p className="name">Password :</p>
      <input
        type="text"
        className="display"
        placeholder="Password"
        id="display"
      />

      <label>
        <p>
          Number of characters : <br />
          (min 1 - max 24)
        </p>
        <input type="number" max="24" min="1" placeholder="13" id="nChars" />
      </label>

      <button onClick={generatePassword}>Generate</button>
    </main>
  );
};
=======
import { generatePassword } from "./generatePassword";

export const GetMain = () => {
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
>>>>>>> 74aaec50cbee3f2154ff6fad4adcb96a4817e6dd
