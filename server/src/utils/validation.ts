
export const checkProperties = (Object: any) => {
    for (let key in Object) {
        if (!Object[key]) throw new Error(`${key} is not null`)
    }
}