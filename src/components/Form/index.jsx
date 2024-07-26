import InputMask from "react-input-mask";
import useRegister from "../../hooks/useRegister";
import { data } from "../../Mock";

const Form = () => {
  const { changeValue, setName, phone, setPhone, errors, handleSubmit } =
    useRegister();

  return (
    <form onSubmit={(evt) => handleSubmit(evt)}>
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
    </form>
  );
};

export default Form;
