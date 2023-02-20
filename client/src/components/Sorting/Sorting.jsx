import Input from "../Form/Input";

const Sorting = ({ onChange, descOption, ascOption }) => {
  return (
    <Input variant="select" defaultValue={"DEFAULT"} onChange={onChange}>
      <option value="DEFAULT" disabled>
        Sort by:
      </option>
      <option value="descending">{descOption}</option>
      <option value="ascending">{ascOption}</option>
    </Input>
  );
};

export default Sorting;
