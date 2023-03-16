export type Story = {
  id: number
  name: string
  avatar: string
}

export type Post = {
  id: number
  account: string
  location: string
  avatar: string
  photo: string
  likes: number
  description: string
  hashTags: string
  createTime: string
}

export type Friend = {
  id: number
  location: string
  account: string
  isFollowing: boolean
  avatar: string
}
