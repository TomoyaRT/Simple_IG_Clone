import User from '@/components/user'

const Profile: React.FC = () => {
  const friends = [
    {
      id: 1,
      location: 'Singapore',
      account: 'max_999',
      isFollowing: true,
      avatar: '/images/avatars/a1.png',
    },
    {
      id: 2,
      location: 'Singapore',
      account: 'fm_999',
      isFollowing: true,
      avatar: '/images/avatars/a2.png',
    },
    {
      id: 3,
      location: 'Singapore',
      account: 'joanne_999',
      isFollowing: true,
      avatar: '/images/avatars/a3.png',
    },
    {
      id: 4,
      location: 'Singapore',
      account: 'focus_999',
      isFollowing: true,
      avatar: '/images/avatars/a4.png',
    },
  ]

  return (
    <div className="mt-8 ml-8 shadow-lg box-border p-2">
      <User
        account="bruce_fe"
        location="布魯斯前端"
        avatar="/images/avatar.png"
        size="medium"
      />
      <p className="font-bold text-gray-400 mt-4 mx-4 mb-3 text-sm">
        You are following
      </p>

      {friends.map((item) => {
        const { id, account, avatar, isFollowing, location } = item
        return (
          <div className="-mt-3" key={id}>
            <User
              account={account}
              avatar={avatar}
              location={location}
              isFollowing={isFollowing}
              showFollow
            />
          </div>
        )
      })}
      {/* <div className="-mt-3">
        <User showFollow />
      </div>
      <div className="-mt-3">
        <User showFollow />
      </div>
      <div className="-mt-3">
        <User showFollow />
      </div> */}
    </div>
  )
}

export default Profile
