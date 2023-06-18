export async function load({ params }) {
    const post = await import(`../../../../lib/data/${params.subject}/${params.chapter}/${params.slug}.md?raw`)
    const subject = params.subject
    
    return { ...post, subject}
}   