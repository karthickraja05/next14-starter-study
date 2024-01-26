// "use client";
import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';


const postDetails = [
      {
            title: "Bird",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            date: "Jan 15, 2024",
            image: "https://cdn.pixabay.com/photo/2023/09/23/11/26/bird-8270722_640.jpg",
      },
      {
            title: "Nature",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            date: "Dec 15, 2024",
            image: "https://cdn.pixabay.com/photo/2024/01/07/16/27/chinese-reed-8493547_1280.jpg",
      },
      {
            title: "Bird",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            date: "Mar 15, 2024",
            image: "https://cdn.pixabay.com/photo/2023/12/08/15/30/bird-8437764_1280.jpg",
      },
      {
            title: "Dog",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            date: "Jan 23, 2024",
            image: "https://cdn.pixabay.com/photo/2023/12/14/07/44/dog-8448345_1280.jpg",
      },
      {
            title: "Sky",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            date: "Jan 23, 2024",
            image: "https://cdn.pixabay.com/photo/2023/10/23/17/10/landscape-8336496_1280.jpg",
      },
      {
            title: "Cat",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            date: "Jan 23, 2024",
            image: "https://media.istockphoto.com/id/877368004/photo/cute-black-bombay-kitten.jpg?s=2048x2048&w=is&k=20&c=PXoEfWnFQ_MZq5RLyvHz1bvBKf_M05tBzOm_BU3WLAc=",
      },
      {
            title: "Chess",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            date: "Jan 23, 2024",
            image: "https://media.istockphoto.com/id/900119138/photo/plan-leading-strategy-of-successful-business-leader-concept-hand-of-player-chess-board-game.jpg?s=2048x2048&w=is&k=20&c=6HIe61E8mwv-F6Iz-rsxO5Cu36Pfz8EdwptvPipxcLM=",
      },
]


const apiData = async () => {
      const url = 'http://localhost:3000/api/blog';
      // const url = 'https://jsonplaceholder.org/posts';
      const res = await fetch(url,{
            // next: {
            //       revalidate: 3600
            // }
            cache: "no-store"
            // cache: "force-cache"
      });

      if(!res.ok){
            throw new Error('Something went Wrong');
      }

      const json = await res.json();
      return json;

}




const Blog = async ({params,searchParams}) => {
      // console.log(params);
      // console.log(searchParams);

      const apiPostData = await apiData();
      // console.log(apiPostData);
      // const apiPostData = await getPosts();
      return (
            <div className={styles.container}>
                  {
                        apiPostData.map((item,index) => (
                              <div className={styles.post} key={item.id}>
                                    <PostCard  localItem={item} key={index} />
                              </div>
                        ))
                  }
            </div>);

      // return (
      // <div className={styles.container}>
      //       {
      //             postDetails.map((item,index) => (
      //                   <div className={styles.post} key={index}>
      //                         <PostCard  localItem={item} />
      //                   </div>
      //             ))
      //       }
      // </div>);
};

export default Blog;