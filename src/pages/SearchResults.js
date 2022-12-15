import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import PostLayout from '../layouts/PostLayout';

const SearchResults = () => {
  const { searchId } = useParams();

  const posts = useSelector((state) => state.data.values.posts).filter(
    (item) => item.type === 'regular' && item['regular-body'].includes(searchId)
  );

  return (
    <Box>
      {posts.length === 0 && <p>Aramanıza uygun bir sonuç bulunamadı.</p>}
      {posts.length > 0 && posts.map((item) => <PostLayout key={item.id} subItem={item} />)}
    </Box>
  );
};

export default SearchResults;
