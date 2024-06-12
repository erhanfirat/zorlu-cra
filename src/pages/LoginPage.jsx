import { useEffect, useState } from "react";
import { Button } from "../components/Button";

const formDataInitial = {
  email: "",
  password: "",
  remember: false,
  color: "",
};

export const LoginPage = () => {
  const [formData, setFormData] = useState(formDataInitial);

  const reset = () => {
    setFormData(formDataInitial);
  };

  const handleInputChange = (event) => {
    console.log(
      "inputa yazılıyor >>> ",
      event.target.name,
      ":",
      event.target.value
    );
    const { name, value, type, checked } = event.target;

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  useEffect(() => {
    console.log("formData güncellendi: ", formData);
  }, [formData]);

  return (
    <div>
      <h2>Login Page</h2>
      <hr />
      <div className="border my-4 p-4 rounded">
        <form>
          <div>
            <label for="login-email">Email:</label>
            {/* Uncontrolled component */}
            <input
              id="login-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label for="login-password">Password:</label>
            <input
              id="login-password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label for="login-remember">Remember Me:</label>
            <input
              id="login-remember"
              name="remember"
              type="checkbox"
              checked={formData.remember}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Color:</label>
            <div>
              <label>
                Kırmızı
                <input
                  type="radio"
                  name="color"
                  value={"Kırmızı"}
                  checked={formData.color === "Kırmızı"}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Yeşil
                <input
                  type="radio"
                  name="color"
                  value={"Yeşil"}
                  checked={formData.color === "Yeşil"}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Mavi
                <input
                  type="radio"
                  name="color"
                  value={"Mavi"}
                  checked={formData.color === "Mavi"}
                  onChange={handleInputChange}
                />
              </label>
            </div>
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
