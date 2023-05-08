import { signInWithGooglePopup } from '../../utils/firebase/firebase-utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase-utils';
import SignUpForm from '../../components/sign-up-form/SignUp';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
