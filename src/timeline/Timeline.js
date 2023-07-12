import React, { useState } from 'react';
import Post from './posts/Post';
import Suggestions from './Suggestions';
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "zeroone",
      postImage: "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_org.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "zeroone_012",
      postImage: "https://i.namu.wiki/i/R0AhIJhNi8fkU2Al72pglkrT8QenAaCJd1as-d_iY6MC8nub1iI5VzIqzJlLa-1uzZm--TkB-KHFiT-P-t7bEg.webp",
      likes: 15,
      timestamp: "12h",
    },
    {
      user: "zeroone_123123",
      postImage: "https://file.mk.co.kr/meet/neds/2023/02/image_readtop_2023_117777_16759917015347929.jpg",
      likes: 18,
      timestamp: "12m",
    },
  ]);

  return (
    <div className="timeline">
      <div className='timeline__left'>
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post 
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className='timeline__right'>
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline