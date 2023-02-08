export interface ContentData {\
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
    comments: {
        name: string
        github: string
        comment: string
        date: string
    }[]
  }
}

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