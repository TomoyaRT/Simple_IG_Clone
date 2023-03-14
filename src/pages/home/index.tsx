import Header from '@/components/header'
import Container from '@/components/container'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex lg:justify-center">
          <div className="w-full lg:w-[600px]">left</div>
          <div className="hidden lg:block lg:w-[424px]">right</div>
        </div>
      </Container>
    </>
  )
}

export default Home
