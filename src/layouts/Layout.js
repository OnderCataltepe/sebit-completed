// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SearchBar from '../components/SearchBar';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
// React Router
import { Outlet } from 'react-router-dom';
// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// React Router
import { useNavigate } from 'react-router-dom';
// Data and redux
import { getData } from '../redux/reducers/dataSlice';
import data from '../data.json';
const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const values = useSelector((state) => state.data.values);
  useEffect(() => {
    dispatch(getData(data));
  }, []);
  useEffect(() => {
    console.log(values);
  }, [values]);
  return (
    values && (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ position: 'fixed', display: 'flex', alignSelf: 'flex-end' }}>
          <nav>
            <Box sx={{ display: 'flex', p: 2 }}>
              <Link
                href="https://www.tumblr.com/register/follow/demo?referer=follow_header&source=blognetwork_follow_header"
                target="_blank"
                color="white"
                sx={{
                  px: 1,
                  py: 0.5,
                  background: 'rgba(0, 0, 0, 0.35)',
                  borderRadius: '2px',
                  boxShadow: '0 4px px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(2.4px)'
                }}
                underline="none">
                demo bloğunu takip et
              </Link>

              <Link
                href="https://www.tumblr.com/explore/trending"
                target="_blank"
                color="white"
                sx={{ backgroundColor: '#011A36', py: 0.5, px: 1, borderRadius: '2px', ml: 2 }}
                underline="none">
                tumblr
              </Link>
            </Box>
          </nav>
        </Box>
        <Container sx={{ my: 6, width: '900px' }}>
          <Box sx={{ textAlign: 'center', width: '100%', position: 'relative' }}>
            <Typography
              onClick={() => navigate('/')}
              variant="h1"
              sx={{ color: '#444444', display: 'block', cursor: 'pointer' }}>
              {values.tumblelog.title}
            </Typography>
            <Link
              href="#"
              color="white"
              sx={{
                backgroundColor: '#3F7ED9',
                fontWeight: 'bold',
                px: 1,
                borderRadius: '2px',
                position: 'absolute',
                bottom: 0,
                right: 1
              }}
              underline="none">
              RSS
            </Link>
          </Box>
          <Divider sx={{ mt: 1 }} />
          <Box sx={{ display: 'flex', width: '100%', mt: 4 }}>
            <Box sx={{ width: '75%' }}>
              <Outlet />
              <Typography
                sx={{
                  width: '66%',
                  textAlign: 'center',
                  '&>a': {
                    color: 'black'
                  },
                  ml: 'auto'
                }}>
                Powered by{' '}
                <a href="https://www.tumblr.com/" target="blank">
                  Tumblr
                </a>
              </Typography>
            </Box>
            <Box sx={{ width: '25%', textAlign: 'right' }}>
              <SearchBar />
            </Box>
          </Box>
        </Container>
      </Box>
    )
  );
};

export default Layout;
