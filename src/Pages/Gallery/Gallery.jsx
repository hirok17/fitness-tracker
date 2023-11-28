import { Helmet } from "react-helmet";
import Title from "../../Component/Header/sheard/Title";
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
 
const getArticles = async ({ pageParam = 0 }) => {
    const res = await fetch(`http://localhost:5000/gallery?limit=10&offset=${ pageParam }`);
    const data = await res.json();

    return { ...data, prevOffset: pageParam }


}

const Gallery = () => {
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ["articles"],
        queryFn: getArticles,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
                return false;
            }
            return lastPage.prevOffset + 10;
        }

    })
    const articles = data?.pages.reduce((acc, page) => {
        return [...acc, ...page.articles]
    }, [])
    console.log(articles);
    return (
         <section>
            <Helmet>
            <title>Fit wear | our gallery</title>
            </Helmet>
            <Title title="Gallery"></Title>
            <InfiniteScroll
                dataLength={ articles ? articles.length : 0 }
                next={ () => fetchNextPage() }
                hasMore={ hasNextPage }
                loading={ <div>Loading...☝️</div> }
            >
                <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
                    { articles &&
                        articles.map((article, idx) => {
                            return (
                                <div className='border-2 p-2 bg-slate-200 rounded' key={ idx }>
                                    <p className="text-2xl font-semibold bg-black flex justify-center items-center w-10 h-10 rounded-full text-white">{ idx + 1 }</p>
                                    <h3>{ article.description }</h3>
                                </div>
                            )
                        })

                    }

                </div>

            </InfiniteScroll>
         </section>
    );
};

export default Gallery; 