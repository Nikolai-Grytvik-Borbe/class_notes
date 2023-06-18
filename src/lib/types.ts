export type Post = {
    title: string
    slug: string
    chapter: string
    subject: string
}

export type Data = {
    subject: string
    chapter: string
    posts: Array<IDataNode>
    title: string
    slug: string
    chapters: Array<IDataNode>
}
