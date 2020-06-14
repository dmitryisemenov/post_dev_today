import React, { useEffect } from 'react'
import { connect } from '../src/data/connect';
import { useRouter } from 'next/router';
import { getListOfPosts } from '../src/data/post/post.actions';

interface StateProps {
    list: any;
};
interface DispatchProps {
    getListOfPosts: typeof getListOfPosts;
};
interface LatestPostsPageProps extends StateProps, DispatchProps {

}

const LatestPostsPage = ({ getListOfPosts, list }: LatestPostsPageProps) => {
    const router = useRouter();

    console.log(list);

    useEffect(() => {
        list.length === 0 && getListOfPosts();
    }, [list]);

    return (
        <div>
            <div onClick={() => router.back()}>
                asjkhsahsajkhsakhsakhsa
            </div>
            {list && list.map((item: any, index: number) => {
                return (
                    <div key={index}>
                        <span>{item.title}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default connect<LatestPostsPageProps, StateProps, DispatchProps>({
    mapStateToProps: (state) => ({
        list: state.posts.list
    }),
    mapDispatchToProps: {
        getListOfPosts
    },
    component: React.memo(LatestPostsPage)
});
