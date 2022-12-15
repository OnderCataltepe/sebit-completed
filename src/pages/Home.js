// MUI and Fontawesome
import Box from '@mui/material/Box';
// Hooks
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// Components
import DateWrap from '../layouts/DateWrap';
import PostLayout from '../layouts/PostLayout';
const Home = () => {
  const posts = useSelector((state) => state.data.values.posts);
  const [dataGroup, setDataGroup] = useState([]);

  useEffect(() => {
    if (posts) {
      const arrCopy = [...posts];
      console.log(arrCopy);
      const groups = arrCopy.reduce((groups, arrCopy) => {
        const date = arrCopy['date-gmt'].split(' ')[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(arrCopy);
        return groups;
      }, {});

      // Edit: to add it in the array format instead
      const groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          values: groups[date]
        };
      });
      setDataGroup(groupArrays);
    }
  }, []);

  return (
    <Box>
      {dataGroup.length > 0 &&
        dataGroup.map((item, index) => (
          <Box sx={{ width: '100%', display: 'flex' }} key={index}>
            <Box sx={{ width: '33%' }}>
              <DateWrap data={item.date} />
            </Box>
            <Box sx={{ width: '66%' }}>
              {item.values.map((subItem) => (
                <PostLayout key={subItem.id} subItem={subItem} />
              ))}
            </Box>
          </Box>
        ))}
    </Box>
  );
};
export default Home;
