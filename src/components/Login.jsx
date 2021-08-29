import axios from "axios";
import { withRouter } from "react-router-dom";

const LoginForm = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      email: form.email.value,
      password: form.password.value,
    };
    try {
      axios
        .post("http://localhost:3001/api/v1/user/login", data)
        .then(() => props.history.push("/"))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };
  return (
    <>
      <h1>Log In Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Password</label>
        <input type="password" name="password" required />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default withRouter(LoginForm);

// name: { type: String, required: true },
// email: { type: String, required: true },
// password: { type: String, required: true },
// role: {
//   type: String,
//   required: true,
//   enum: ["Host", "Guest"],
// },
