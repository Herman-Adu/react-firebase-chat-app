import { useState } from "react";
import "./login.css";

import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    // get the data entered into the form
    const formData = new FormData(e.target);

    // destructure username, email and password from formData
    const { username, email, password } = Object.fromEntries(formData);
    //console.log("Username: ", username);
    //console.log("Avatar: ", avatar.file);

    try {
      // create a new user with email and password
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // upload
      const imgUrl = await upload(avatar.file);

      // setup database document
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      // setup database doc for chats - empty
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      // feedback for account created
      toast.success("Account created! You can login now!");
    } catch (err) {
      console.log(err);

      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>

        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign in</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
        <h2>Create an Account</h2>

        <form onSubmit={handleRegister}>
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

          <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
