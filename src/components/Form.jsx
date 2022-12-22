import { useState } from "react";

const Form = ({ setValueEmoji, toggleDarkMode, darkMode }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setValueEmoji(value);
  };
  const allEmojis = () => {
    setValueEmoji("");
  };

  return (
    <section className={`form ${darkMode ? "dark-mode" : ""}`}>
      <form>
        <input
          type="text"
          placeholder="some emoji word..."
          onChange={(e) => {
            setValue(e.target.value);
            handleSearch(e);
          }}
        />
        <button type="button">All</button>
        <div className="toggle-box" onClick={toggleDarkMode}>
          <div className="toggle-circle"></div>
        </div>
      </form>
      {error && <p className="error">Input is empy</p>}
    </section>
  );
};

export default Form;
