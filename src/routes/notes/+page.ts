import { get_file_data } from "$lib/scripts";

export const load = async () => {
    const modules = import.meta.glob('$lib/data/**/*.md', { as: 'raw', eager: true });
    const files = get_file_data(modules)
    return {
        files
    }
}

