import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import Loading from "@/app/loading";

const post = {
    img: "https://images.pexels.com/photos/20184430/pexels-photo-20184430/free-photo-of-a-view-of-the-golden-gate-bridge-from-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdAt: "Sun Feb 11 2024 22:42:33",
    slug: "post-1",
    title: "Lorem ipsum, dolor sit",
    userId: "test-1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fugit, dolorem quos explicabo cum voluptas dignissimos? Suscipit harum consequatur expedita nesciunt dicta tempore! Veniam dolorum voluptas deserunt reiciendis corporis asperiores. Suscipit harum consequatur expedita nesciunt dicta tempore! Veniam dolorum voluptas deserunt reiciendis corporis asperiores",
}

const SinglePostPage = async ({ params }) => {
    const { slug } = params;
    console.log("Slug in single post:", slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={post.img} alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && (
                        <Suspense fallback={<Loading />}>
                            <PostUser userId={post.userId} />
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>
                            {post.createdAt.toString().slice(4, 16)}
                        </span>
                    </div>
                </div>
                <div className={styles.content}>{post.desc}</div>
            </div>
        </div>
    )
}

export default SinglePostPage