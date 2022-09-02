import Header from "../components/Header";
import LoginForm from "../templates/LoginForm";

const SignInView = () => {
  return ( 
    <section className="mt-12">
      <Header header1='Believe Yourself' header2='Train like a pro' secondaryColor='black' />
      <LoginForm />
    </section>
   );
}
 
export default SignInView;