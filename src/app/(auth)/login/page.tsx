import { Container } from '@/lib/layout';
import WelcomeSection from '@/ui/pages/LoginPage/WelcomeSection';
import LoginSection from '@/ui/pages/LoginPage/LoginSection';

const LoginPage = () => {
  return (
    <Container className='w-full flex-1 text-center'>
      <article className='bg-white rounded-2xl flex flex-col md:flex-row w-full max-w-4xl'>
        <LoginSection />
        <WelcomeSection />
      </article>
    </Container>
  );
};

export default LoginPage;
