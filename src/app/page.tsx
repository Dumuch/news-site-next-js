import styles from './page.module.scss';
import { UseServerStores } from '@/store/useServerStores';

async function getData() {
    const {articleStore} = UseServerStores()
    return await articleStore.getPopular();
}

export default async function Home() {
    const articleStore  = await getData();
    return (
        <main className={styles.main}>
            <ul>
                {articleStore?.map(article =>{
                    return <li key={article.id}>{article.title} </li>
                })}
            </ul>
        </main>
    );
}

