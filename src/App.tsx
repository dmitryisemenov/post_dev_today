import React from 'react';
import { useRouter } from 'next/router';

interface Props {

}

const App = (props: Props) => {

    const router = useRouter();

    return (
        <main>
            <span onClick={() => router.push('/LatestPostsPage')}>Latest Posts</span>
        </main>
    )
}

export default App;
