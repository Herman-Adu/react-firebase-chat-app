import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    // check we got an avatar to prevent re-runs
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]), // use objectURL to be able to show the image stright away
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // test the toast
    //toast.warn("Test toaster using warning");

    // test the toast
    //toast.success("Test toaster using success");

    // test the toast
    toast.error("Test toaster using error");
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>

        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
        <h2>Create an Account</h2>

        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>

          {/* hide the choose file button as the image is the trigger by htmlFor to bind the correct input to upload a file */}
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />

          <input type="text" placeholder="Username" name="username" />

          <input type="text" placeholder="Email" name="email" />

          <input type="password" placeholder="Password" name="password" />

          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
