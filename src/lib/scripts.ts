/**
 * Returns the formatted data.
 */
export function get_file_data(modules: object) {
    const file_paths = Object.keys(modules)
    const file_content = Object.values(modules)

    let folder_names: string[] = [];
    let file_names: string[] = [];
    for (let item of file_paths) {
        file_names.push(item.split("/").slice(-1).toString())
        folder_names.push(item.split("/").slice(-2, -1).toString())
    }
    folder_names = folder_names.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    })


    interface FileData {
        id: number,
        title?: string,
        filepath: string,
        folder: string,
        content?: string,
    }

    const file_data: FileData[] = [];
    Object.values(file_paths).forEach(function (item, index) {
        file_data.push(
            {
                id: index,
                title: file_names[index].slice(0, -3),
                filepath: item,
                folder: item.split("/")[4] + "/" + item.split("/")[5],
                content: file_content[index],
            })
    })

    console.log(file_data)

    return {
        file_data,
        folder_names,
        file_names
    }
}

export function create_file_tree(modules: object) {
    let file_paths = Object.keys(modules)

    const file_tree: Record<string, string[]> = {};

    for (const item of file_paths) {
        let key = item.split("/").slice(-2, -1).toString()
        let value = item.slice(0, -3).split("/").slice(-1).toString()

        if (!file_tree[key]) {
            file_tree[key] = []
        }

        file_tree[key].push(value)
    }
    return file_tree
}
