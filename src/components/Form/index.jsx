import InputMask from "react-input-mask";
import PropTypes from 'prop-types';
import { data } from "../../Mock";

const Form = ({
  changeValue,
  setName,
  phone,
  setPhone,
  errors,
  handleSubmit,
}) => {
  return (
    <form onSubmit={(evt) => handleSubmit(evt)} autoComplete="on">
      <input
        style={{ marginBottom: "10px" }}
        type="text"
        placeholder={data[changeValue].placeholder}
        onChange={(e) => setName(e.target.value)}
        className={errors.name ? "error" : ""}
      />
      {errors.name && <div className="error-message">{errors.name}</div>}
      <InputMask
        mask="+\9\9\8\ (99) 999-99-99"
        maskChar="_"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={errors.phone ? "error" : ""}
      >
        {(inputProps) => (
          <input {...inputProps} type="tel" placeholder="+998 (__) ___-__-__" />
        )}
      </InputMask>
      {errors.phone && <div className="error-message">{errors.phone}</div>}
      <button>{data[changeValue].button_text}</button>

      <p className="button-text">
        <span>*</span> {data[changeValue].text}
      </p>
    </form>
  );
};

Form.propTypes = {
  changeValue: PropTypes.string,
  setName: PropTypes.func,
  phone: PropTypes.string,
  setPhone: PropTypes.func,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default Form;
