import SignUp from "../components/Signup";
import Login from "../components/Login";
const Auth = ({ history, location, match }) => {
  return (
    <>
      {console.log(location.pathname)}
      <h1>Auth</h1>
      {location.pathname === "/sign-up" ? <SignUp /> : <Login />}
    </>
  );
};

export default Auth;
