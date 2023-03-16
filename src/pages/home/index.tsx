import Header from '@/components/header'
import Container from '@/components/container'
import Story from '@/pages/home/components/story'
import Post from '@/pages/home/components/post'
import Profile from '@/pages/home/components/profile'
import Loading from '@/components/loading'
import { useGetPostsQuery } from '@/services/homeService'

const PostList: React.FC = () => {
  const { data, error, isLoading } = useGetPostsQuery('all')

  return (
    <>
      {isLoading && (
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      )}
      {!isLoading &&
        data?.map((item) => {
          const {
            id,
            account,
            location,
            avatar,
            photo,
            likes,
            description,
            hashTags,
            createTime,
          } = item
          return (
            <Post
              key={id}
              account={account}
              location={location}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
            ></Post>
          )
        })}
    </>
  )
}

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex lg:justify-center">
          <div className="w-full lg:w-[600px]">
            <Story />
            <PostList />
          </div>
          <div className="hidden lg:block lg:w-[424px]">
            <Profile />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
