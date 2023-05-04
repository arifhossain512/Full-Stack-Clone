import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [file, setFile] = useState(null);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    phone: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const validate = () => {
    const errors = {};
    if (!user.username) {
      errors.username = "Username is required";
    }
    if (!user.email) {
      errors.email = "Email is required";
    }
    if (!user.password) {
      errors.password = "Password is required";
    }
    if (!user.country) {
      errors.country = "Country is required";
    }
    if (!file) {
      errors.img = "Image is required";
    }

    return errors
  }
  const handleSubmit = async (e) => {
    e.preventDefault();


    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return;

    }
    const url = await upload(file);
    try {
      const { data, status, response, message } = await newRequest.post("auth/register", {
        ...user,
        img: url,
      });
      
      setSuccessMessage(data)

      setTimeout(() => {
        navigate("/")
      }, 2000);

      // console.log("response is :", response);
    } catch (err) {

      // if (err.response.data.message.includes("E11000 duplicate key error")) {
      //   setErrorMessage("Username already exists. Please choose a different username.");
      // } 
      setErrorMessage(err.response.data.message);

      console.log(err);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder={errors.username ? errors.username : "john-doe"}
            className={errors.username ? "red" : ""}
            onChange={handleChange}
          />

          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder={errors.email ? errors.email : "email"}
            className={errors.email ? "red" : ""}
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input
            name="password"
            type="password"
            placeholder={errors.password ? errors.password : "password"}
            className={errors.password ? "red" : ""}
            onChange={handleChange} />
          <label htmlFor="">Profile Picture</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {errors.img && <p className="red" >{errors.img}  </p>}
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder={errors.country ? errors.country : "USA"}
            className={errors.country ? "red" : ""}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
          {/* {errorMessage && <p className="error"> {errorMessage} </p>} */}
          {errorMessage && (() => {
            const match = errorMessage.match(/\{([^:]+):\s*([^}]+)\}/);
            const field = match ? match[1] : "";
            const value = match ? match[2] : "";
            return <p className="error"> {`The ${field} : ${value} already exits`} </p>;
          })()}

          {successMessage && <p className="success"> {successMessage} </p>}
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
