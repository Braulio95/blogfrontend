// api.ts

export interface Article {
    id: number;
    title: string;
    articleAuthor: string;
    articleDate: string;
    articleDescription: string;
}

export async function fetchArticles(): Promise<Article[]> {
    try {
        const response = await fetch('/articles.json');
        const data: Article[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los artículos:', error);
        throw error;
    }
}