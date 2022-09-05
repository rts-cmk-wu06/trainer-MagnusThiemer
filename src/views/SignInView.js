import Header from "../components/Header";
import LoginForm from "../templates/LoginForm";
import Navbar from "../templates/Navbar";

const SignInView = () => {
  return ( 
    <>
      <Navbar />
      <Header header1='Believe Yourself' header2='Train like a pro' secondaryColor='black' />
      <LoginForm />
    </>
   );
}
 
export default SignInView;