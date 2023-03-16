import Header from '@/components/header'
import Container from '@/components/container'
import User from '@/components/user'
import { useAppSelector } from '@/hooks/store'

const Following: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer)
  const friends = friendReducer.friends

  return (
    <>
      <Header />
      <Container>
        <p className="my-8 font-bold text-2xl px-4 box-border">Following</p>
        <div className="shadow-md mt-8 mx-2 box-border">
          {friends.map((item) => {
            const { id, account, avatar, isFollowing, location } = item
            return (
              <div className="-mt-3" key={id}>
                <User
                  id={id}
                  account={account}
                  avatar={avatar}
                  location={location}
                  isFollowing={isFollowing}
                  showFollow
                />
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default Following
