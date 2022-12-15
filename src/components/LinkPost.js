import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const LinkPost = ({ data }) => {
  return (
    <Box
      sx={{
        '&>a': {
          display: 'block',
          color: '#CC0000',
          fontWeight: '500',
          fontSize: '20px',
          mb: 1
        },
        '& p': {
          fontSize: '12px'
        }
      }}>
      <Link to={`/post/${data.id}`} href={data['link-url']}>
        {data['link-text']}
      </Link>
      <div dangerouslySetInnerHTML={{ __html: data['link-description'] }} />
    </Box>
  );
};

export default LinkPost;
