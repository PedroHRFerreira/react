const AtomsInput = ({ type, value, onClick, errors }) => {
  return (
    <input
      type={type}
      placeholder="Enter your last name"
      maxLength="30"
      style={{ borderColor: errors ? "red" : "black" }}
      value={value}
      onChange={onClick}
    />
  );
};
export default AtomsInput;
