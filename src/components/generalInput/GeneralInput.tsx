import GeneralInputProps from "../../interfaces/GeneralInputProps";
import styles from "./styles.module.css";

export default function GeneralInput({
  type,
  label,
  value,
  onChange,
  onBlur,
  options,
  name,
  required = true,
  placeHolder,
  error,
  touched,
}: GeneralInputProps) {
  return (
    <div className={styles.inputContainer}>
      {error && touched && <div className={styles.error}>{error}</div>}

      <label htmlFor={name} className={required ? styles.astrik : ""}>
        {label}
      </label>

      {type === "select" ? (
        <select
          className={styles.input}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          id={name}
          required={required}
        >
          {options?.map((option, index) =>
            index === 0 ? (
              <option
                className={styles.option}
                key={option}
                value=""
                disabled
                hidden
              >
                {option}
              </option>
            ) : (
              <option className={styles.option} key={option} value={option}>
                {option}
              </option>
            )
          )}
        </select>
      ) : (
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          id={name}
          required={required}
          placeholder={placeHolder}
        />
      )}

    </div>
  );
}
