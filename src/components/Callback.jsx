const Callback = ({getColor, activeColor, setActiveColor}) => {
  console.log("Child Component Re-rendered");

  const handleChange = (e) => {
    setActiveColor(e.target.value);
    getColor(e.target.value);
  };

  const handleFocus = (e) => {
    e.target.value = "";
  };
  const handleBlur = (e) => {
    e.target.value = activeColor;
  };

  return (
    <div>
      <input
        type="text"
        id="input"
        aria-label="input"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={activeColor}
      />
    </div>
  );
};

export default Callback;
