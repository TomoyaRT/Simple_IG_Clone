import User from '@/components/user'
import Comment from '@/pages/home/components/post/comment'

type PostProps = {
  account: string
  location: string
  avatar: string
  photo: string
  likes: number
  description: string
  hashTags: string
  createTime: string
}

const Post: React.FC<PostProps> = ({
  account,
  location,
  avatar,
  photo,
  likes,
  description,
  hashTags,
  createTime,
}) => {
  return (
    <div className="shadow-md pb-4 lg:mb-8">
      <User account={account} location={location} avatar={avatar} />
      <img src={photo} />
      <Comment
        account={account}
        likes={likes}
        description={description}
        hashTags={hashTags}
        createTime={createTime}
      />
    </div>
  )
}

export default Post
