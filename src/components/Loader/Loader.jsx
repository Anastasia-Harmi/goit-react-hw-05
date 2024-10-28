import css from "./Loader.module.css";
import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <div className={css.loader}>
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="fidget-spinner-loading"
          wrapperStyle={{}}
          wrapperClass="fidget-spinner-wrapper"
        />
      </div>
    </div>
  );
};

export default Loader;