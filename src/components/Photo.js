import Box from '@mui/material/Box';

const Photo = ({ data }) => {
  return (
    <Box sx={{ '&>img': { width: '100%' }, textAlign: 'center', '& a': { color: 'black' } }}>
      <img src={data['photo-url-400']} />
      <div dangerouslySetInnerHTML={{ __html: data['photo-caption'] }} />
    </Box>
  );
};

export default Photo;
