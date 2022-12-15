import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Regular = ({ data }) => {
  return (
    <Box
      sx={{
        fontSize: 12,
        '& p>a': { color: '#6498CC' },
        '& ul': {
          pl: 4,
          py: 2
        },
        '& blockquote': {
          ml: 4,
          my: 2,
          pl: 2,
          borderLeft: '2px solid gray'
        }
      }}>
      {data['regular-title'] && (
        <Link
          to={`/post/${data.id}`}
          style={{
            color: '#6498CC',
            fontSize: 20,
            fontWeight: '500',
            display: 'block',
            marginBottom: 1,
            textDecoration: 'none'
          }}>
          {data['regular-title']}
        </Link>
      )}
      <div dangerouslySetInnerHTML={{ __html: data['regular-body'] }} />
    </Box>
  );
};

export default Regular;
