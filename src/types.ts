export type Project = {
    id: number,
    title: string,
    languages: string[],
    deployLink: string,
    github: string,
    content: Content[]
}

export type Content = {
    type: string,
    value?: string,
    src?: string,
    alt?: string,
    images?: Image[]
}

export type Image = {
    src: string,
    alt: string,
}