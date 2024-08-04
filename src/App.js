import React, { useState } from "react";
import './App.css';

const App = () => {
  const [length, setLength] = useState(6);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let availableChars = "";
    if (includeUppercase) availableChars += upperCaseChars;
    if (includeLowercase) availableChars += lowerCaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSymbols) availableChars += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="container">
      <h1>Gerador de Senhas</h1>
      <div className="form-group">
        <label>Comprimento:</label>
        <select value={length} onChange={(e) => setLength(parseInt(e.target.value))}>
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
        </select>
      </div>
      <div className="form-group">
        <label>
          <input type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
          Incluir Letras Maiúsculas
        </label>
      </div>
      <div className="form-group">
        <label>
          <input type="checkbox" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
          Incluir Letras Minúsculas
        </label>
      </div>
      <div className="form-group">
        <label>
          <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
          Incluir Números
        </label>
      </div>
      <div className="form-group">
        <label>
          <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
          Incluir Símbolos
        </label>
      </div>
      <button className="gerarSenha" onClick={generatePassword}>Gerar Senha</button>
      <div className="password-display">
        <h2>Senha Gerada:</h2>
        <p className="password">{password}</p>
      </div>
    </div>
  );
};

export default App;
