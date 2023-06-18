import type { Post } from '$lib/types'
import { json } from '@sveltejs/kit'
/**
 * Get posts and posts data
 */
async function getPosts() {
    const paths = import.meta.glob("$lib/data/*/*/*.md", { as: "raw", eager: true })

    let posts: Post[] = []
    for (const path in paths) {
        const title = path.split("/").at(-1)?.replace(".md", "")
        const slug = paths[path]
        const link = path.split("/").slice(4).join("/")?.replace(".md", "")
        const chapter = path.split("/").slice(-2, -1).toString()
        const subject = path.split("/").slice(-3, -2).toString()
        console.log(path)

        const post = { title, slug, link, chapter, subject }   
        posts.push(post)
    }


    let result: Data[] = [];

    // Loop over each post
    for (let post of posts) {
        // Check if the subject of this post already exists in the result
        let subjectObj = result.find(x => x.subject === post.subject);

        // If the subject doesn't exist, create a new one
        if (!subjectObj) {
            subjectObj = { subject: post.subject, chapters: [] };
            result.push(subjectObj);
        }

        // Check if the chapter of this post already exists in the subject object
        let chapterObj = subjectObj.chapters.find(x => x.chapter === post.chapter);

        // If the chapter doesn't exist, create a new one
        if (!chapterObj) {
            chapterObj = { chapter: post.chapter, posts: [] };
            subjectObj.chapters.push(chapterObj);
        }

        // Add the post to the chapter
        chapterObj.posts.push({
            title: post.title,
            slug: post.slug,
            link: post.link
        });
    }
    return result
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}
