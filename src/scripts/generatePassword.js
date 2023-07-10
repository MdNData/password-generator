export const generatePassword = () => {
  const passContainer = document.getElementById("display");
  let nCharacters = Number(document.getElementById("nChars").value);

  if (nCharacters == 0) {
    nCharacters = 13;
  }

  if (nCharacters > 24 || nCharacters < 1) {
    passContainer.value = "Invalid Range ";
  } else {
    let password = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*{}[]()/\\'\"~,;:.<>";

    for (var i = 0; i < nCharacters; i++) {
      var rnum = Math.floor(Math.random() * characters.length);
      password += characters.substring(rnum, rnum + 1);
    }

    passContainer.value = password;
  }
};
