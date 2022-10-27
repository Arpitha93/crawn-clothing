// import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
        <p>Hello signIn here</p>
        <input text = 'first name'>First Name</input>
      <SignInForm />
      {/* <SignUpForm /> */}
    </div>
  );
};

export default Authentication;