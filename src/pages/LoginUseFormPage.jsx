import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import { myContext } from "../context/myContext";

const formDataInitial = {
  email: "",
  password: "",
  remember: false,
  age: 0,
};

export const LoginUseFormPage = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      ...formDataInitial,
    },
    mode: "all",
  });

  const { setUser } = useContext(myContext);

  const location = useLocation();
  const history = useHistory();

  console.log("Login page location: ", location);

  const reset = () => {};

  const doSubmit = (formData) => {
    // e.preventDefault()
    console.log("FormData >>> ", formData);
    const { email, password } = formData;

    // do login request
    axios
      .post("https://workintech-fe-ecommerce.onrender.com/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("***** logged in ***** ", res.data);
        localStorage.setItem("token", res.data.token);
        setUser(res.data);
        if (location?.state?.referrer) {
          history.push(location.state.referrer);
        } else {
          history.push("/");
        }
      });
  };

  return (
    <div>
      <h2>Login Page - React Hook Form</h2>
      <hr />
      <div className="border my-4 p-4 rounded">
        <form onSubmit={handleSubmit(doSubmit)}>
          <div>
            <label htmlFor="login-email">Email:</label>
            {/* Uncontrolled component */}
            <input
              id="login-email"
              type="text"
              {...register("email", {
                required: "Email alanı zorunludur.",
                maxLength: {
                  value: 30,
                  message:
                    "Email alanı en fazla 30 karakter uzunluğunda olmalıdır.",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Lütfen geçerli bir email adresi giriniz.",
                },
              })}
            />
          </div>
          {errors?.email?.message && (
            <p className="form-error">{errors.email.message}</p>
          )}
          <div>
            <label htmlFor="login-password">Password:</label>
            <input
              id="login-password"
              type="password"
              {...register("password", {
                required: "Password alanı zorunludur.",
                minLength: {
                  value: 6,
                  message:
                    "Password alanı en az 6 karakter uzunluğunda olmalıdır.",
                },
                validate: (passInput, formDataState) => {
                  if (formDataState.email === passInput) {
                    return "Email ve Password alanları aynı değere sahip olamaz.";
                  }
                  return true;
                },
              })}
            />
          </div>
          {errors?.password?.message && (
            <p className="form-error">{errors.password.message}</p>
          )}
          <div>
            <label htmlFor="login-age">Age:</label>
            <input
              id="login-age"
              type="number"
              {...register("age", {
                required: "Age alanı zorunludur.",
                min: {
                  value: 18,
                  message: "Age alanı min 18 olmalıdır.",
                },
                max: {
                  value: 70,
                  message: "Age alanı en fazla 70 olmalıdır.",
                },
              })}
            />
          </div>
          {errors?.age?.message && (
            <p className="form-error">{errors.age.message}</p>
          )}
          <div>
            <label htmlFor="login-remember">Remember Me:</label>
            <input
              id="login-remember"
              type="checkbox"
              {...register("remember")}
            />
          </div>
          <div>
            <label></label>
            <div>
              <Button type="submit">Login</Button>
              <Button type="button" onClick={reset}>
                Reset
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
