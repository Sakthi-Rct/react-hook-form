import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  //   CUSTOM VALIDATION
  const validatePassword = (value) => {
    if (value.length < 6) {
      return "Password should be at-least 6 characters.";
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
    ) {
      return "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.";
    }
    return true;
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email :</label>
          <input
            type="text"
            name="email"
            ref={register({
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label>Password :</label>
          <input
            type="password"
            name="password"
            ref={register({
              required: "Password is required.",
              //   validate: validatePassword,
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters.",
              },
            })}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>
        <div className="form-control button-wrap">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
