import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

export const metadata = {
    title: "Momento - Blog Page",
    description: "Blog description",
};

// const posts = [
//     {
//         img: "https://images.pexels.com/photos/20184430/pexels-photo-20184430/free-photo-of-a-view-of-the-golden-gate-bridge-from-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         createdAt: "Sun Feb 11 2024 22:42:33",
//         slug: "post-1",
//         title: "Lorem ipsum, dolor sit",
//         body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fugit, dolorem quos explicabo cum voluptas dignissimos? Suscipit harum consequatur expedita nesciunt dicta tempore! Veniam dolorum voluptas deserunt reiciendis corporis asperiores",
//     },
//     {
//         img: "https://images.pexels.com/photos/20144196/pexels-photo-20144196/free-photo-of-a-woman-in-sunglasses-and-a-floral-shirt-standing-in-front-of-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         createdAt: "Sun Feb 11 2024 22:42:33",
//         slug: "post-1",
//         title: "Lorem ipsum, dolor sit",
//         body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fugit, dolorem quos explicabo cum voluptas dignissimos? Suscipit harum consequatur expedita nesciunt dicta tempore! Veniam dolorum voluptas deserunt reiciendis corporis asperiores",
//     },
//     {
//         img: "https://images.pexels.com/photos/3094219/pexels-photo-3094219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         createdAt: "Sun Feb 11 2024 22:42:33",
//         slug: "post-1",
//         title: "Lorem ipsum, dolor sit",
//         body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fugit, dolorem quos explicabo cum voluptas dignissimos? Suscipit harum consequatur expedita nesciunt dicta tempore! Veniam dolorum voluptas deserunt reiciendis corporis asperiores",
//     }
// ]

// Fetch data with an API
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};



const BlogPage = async () => {

    // Fetch data without API
    const posts = await getPosts();

    // Fetch data with an API
    // const posts = await getData();

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    )
}

export default BlogPage