import Box from '@mui/material/Box';
import DateWrap from '../layouts/DateWrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { typeFunction } from '../utils';
const DetailedPost = () => {
  const { postId } = useParams();
  const posts = useSelector((state) => state.data.values.posts).filter(
    (post) => post.id === postId
  );

  useEffect(() => {
    console.log(posts[0].id + '/' + posts[0].slug);
  }, []);

  if (posts.length === 0) {
    return null;
  }
  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <Box sx={{ width: '33%' }}>
        <DateWrap data={posts[0].date} />
      </Box>
      <Box sx={{ width: '66%' }}>
        <Box sx={{ mb: 4 }}>{typeFunction(posts[0])}</Box>
      </Box>
    </Box>
  );
};

export default DetailedPost;
