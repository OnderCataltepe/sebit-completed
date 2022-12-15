import React from 'react';
import Box from '@mui/material/Box';
const Audio = ({ data }) => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        maxHeight: '100px',
        '& a': {
          color: 'black'
        }
      }}>
      <div dangerouslySetInnerHTML={{ __html: data['audio-caption'] }} />
      <div dangerouslySetInnerHTML={{ __html: data['audio-embed'] }} />
    </Box>
  );
};

export default Audio;
