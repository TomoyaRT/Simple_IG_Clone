import Header from '@/components/header'
import Container from '@/components/container'
import Story from '@/pages/home/components/story'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex lg:justify-center">
          <div className="w-full lg:w-[600px]">
            <Story />
          </div>
          <div className="hidden lg:block lg:w-[424px]">right</div>
        </div>
      </Container>
    </>
  )
}

export default Home
