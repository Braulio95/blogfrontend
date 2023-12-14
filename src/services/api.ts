// api.ts

export interface Article {
    id: string;
    title: string;
    articleAuthor: string;
    articleDate: string;
    articleDescription: string;
}

export async function fetchArticles(): Promise<Article[]> {
    try {
        const response = await fetch('/articles.json');
        const data: Article[] = await response.json();
        const parsedData = data.map(({ id, title, articleAuthor, articleDate, articleDescription }) => {
            return ({
                id: `${id}`,
                title: title,
                articleAuthor: articleAuthor,
                articleDate: articleDate,
                articleDescription: articleDescription
            })
        })
        return parsedData;
    } catch (error) {
        console.error('Error al obtener los artículos:', error);
        throw error;
    }
}

export async function fetchArticleById(articleId: string): Promise<Article | null> {
    try {
        const response = await fetch('/articles.json');
        const data: Article[] = await response.json();

        // Find the article using the selected ID
        const article = data.find((article) => article.id === articleId);

        if (article) {
            return article;
        } else {
            console.error(`No se encontró el artículo con ID ${articleId}`);
            return null;
        }
    } catch (error) {
        console.error('Error al obtener el artículo:', error);
        throw error;
    }
}