import Logo from '@/lib/components/atoms/Logo';
import { Container } from '@/lib/layout/Container';
import WelcomeSection from '@/ui/pages/LoginPage/WelcomeSection';

const LoginScreen = () => {
  return (
    <Container className='w-full flex-1 px-20 text-center'>
      <article className='bg-white rounded-2xl flex w-2/3 max-w-4xl'>
        <section className='w-3/5 p-5'>
          <div className='text-left'>
            <Logo />
          </div>
          <div className='py-10'>
            <h2 className='text-3xl font-bold text-navyBlue-400 mb-2'>Iniciar sesión</h2>
            <hr className='border-2 w-10 border-navyBlue-400 inline-block mb-2' />
          </div>
        </section>
        <WelcomeSection />
      </article>
    </Container>
  );
};

export default LoginScreen;
