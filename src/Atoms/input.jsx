const AtomsInput = ({ value, onClick, errors }) => {
  return (
    <input
      type="text"
      placeholder="Enter your last name"
      maxLength="30"
      style={{ borderColor: errors ? "red" : "black" }}
      value={value}
      onChange={onClick}
    />
  );
};
export default AtomsInput;
