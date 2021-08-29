import axios from "axios";
import { withRouter } from "react-router-dom";

const SignUpForm = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      email: form.email.value,
      name: form.name.value,
      password: form.password.value,
      role: form.role.value,
    };
    try {
      axios
        .post("http://localhost:3001/api/v1/user/register", data)
        .then(() => props.history.push("/log-in"))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };
  return (
    <>
      <h1>Sign Up Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Password</label>
        <input type="password" name="password" required />
        <label>Role</label>
        <select name="role" id="roles">
          <option value="Host">Host</option>
          <option value="Guest">Guest</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default withRouter(SignUpForm);

// name: { type: String, required: true },
// email: { type: String, required: true },
// password: { type: String, required: true },
// role: {
//   type: String,
//   required: true,
//   enum: ["Host", "Guest"],
// },
