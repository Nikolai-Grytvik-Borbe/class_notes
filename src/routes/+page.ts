import type { Data } from "$lib/types"

export async function load({ fetch }) {
    const response = await fetch("api/posts")
    const data: Data[] = await response.json()
    
    return { data }
}