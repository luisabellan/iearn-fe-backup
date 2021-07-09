import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="sweet-loading">
      <ClipLoader
        className="clip-loader"
        sizeUnit={"px"}
        size={60}
        color={"#FF586B"}
        loading={true}
      />
    </div>
  );
};

export default Spinner;
