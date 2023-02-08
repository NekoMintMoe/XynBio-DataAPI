export interface ListData {
  code: number
  data: {
    link: string
    metadata: {
      title: string
      subtitle: string
      date: string
      author: string
      keyword: string
      slug: string
    }
  }[]
}

export interface ContentData {
  code: number
  data: {
    link: string
    metadata: {
      title: string
      subtitle: string
      date: string
      author: string
      keyword: string
      slug: string
    }
    content: any
    activity: {
        comments: number
        likes: number
        shares: number
    }
  }
}

export interface CommentData {
  code: number
  data: {
    link: string
    metadata: {
      title: string
      user: string
      github: string
      date: string
    }
    content: string
  }[]
}