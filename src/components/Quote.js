import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Quote = ({ data }) => {
  return (
    <Box
      sx={{
        '& a': {
          color: 'black',
          fontWeight: 'bold'
        }
      }}>
      <Typography
        variant="h4"
        sx={{ color: '#888888', fontWeight: 'bold', borderLeft: '5px solid #6498CC', pl: 2 }}>
        {data['quote-text']}
      </Typography>{' '}
      <div dangerouslySetInnerHTML={{ __html: '-' + data['quote-source'] }} />
    </Box>
  );
};

export default Quote;
