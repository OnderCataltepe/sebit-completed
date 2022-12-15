import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Error = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography sx={{ color: '#6498CC', fontWeight: '500' }}>Bulunamadı</Typography>
      <Typography sx={{ fontSize: '12px' }}>Açmak istediğiniz url bulunamadı.</Typography>
    </Box>
  );
};
export default Error;
