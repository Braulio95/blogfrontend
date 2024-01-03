//GETTING DATA OF USERS
export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: string;
}
export interface UserDB {
    _id: string;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    _v: number
}

export async function fetchUsers(): Promise<User[]> {
    try {
        const url = 'http://18.217.200.184:4000/v1/users'
        const response = await fetch(url);
        const data = await response.json();
        const users: UserDB[] = data.users
        const parsedUsers = users.map(({ _id, username, email, password, createdAt }) => {
            return ({
                id: _id,
                username: username,
                email: email,
                password: password,
                createdAt: createdAt
            })
        })
        return parsedUsers;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        throw error;
    }
}


//GETTING DATA OF ARTICLES
export interface Article {
    id: string;
    title: string;
    articleAuthor: string;
    articleDate: string;
    articleDescription: string;
}

export interface ArticleDB {
    _id: string;
    title: string;
    content: string;
    date: string;
    img: string;
    user: string;
    __v: 0;
}

export async function fetchArticles(): Promise<Article[]> {
    const url = 'http://18.217.200.184:4000/v1/articles'
    try {
        const response = await fetch(url);
        const data = await response.json();
        const dbArticles: ArticleDB[] = data.articles;
        const parsedData = dbArticles.map(({ _id, title, content, date, img, user }) => {
            return ({
                id: `${_id}`,
                title: title,
                articleAuthor: user,
                articleDate: date,
                articleDescription: content
            })
        })
        return parsedData;
    } catch (error) {
        console.error('Error al obtener los artículos:', error);
        throw error;
    }
}

export async function fetchArticleById(articleId: string): Promise<Article | null> {
    const url = 'http://18.217.200.184:4000/v1/articles'
    try {
        const response = await fetch(`${url}/${articleId}`);
        const data = await response.json();

        // Find the article using the selected ID
        const articleDB: ArticleDB = data.article;
        //Parsing the article from the DB
        const article: Article = {
            id: articleDB._id,
            title: articleDB.title,
            articleAuthor: articleDB.user,
            articleDate: articleDB.date,
            articleDescription: articleDB.content
        }
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

export async function loginUser(email: string, password: string): Promise<string | undefined> {
    try {
        const response = await fetch('http://18.217.200.184:4000/v1/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error en la autenticación:', errorData);
            return undefined;
        }

        const token = await response.json();
        return token;
    } catch (error) {
        console.error('Error en la autenticación:', error);
        return undefined;
    }
}