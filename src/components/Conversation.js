import React from 'react';

import Box from '@mui/material/Box';

const Conversation = ({ data }) => {
  return (
    <Box
      sx={{
        '&>ul': {
          listStyleType: 'none',
          borderLeft: '4px solid #BBBBBB'
        },
        '&>ul>li': {
          pl: 1,
          mb: '1px'
        },
        '&>ul>li:nth-of-type(even)': {
          backgroundColor: '#E8E8E8'
        },
        '&>ul>li:nth-of-type(even)>span': {
          color: '#3400CC',
          fontWeight: '500',
          mr: 1
        },
        '&>ul>li:nth-of-type(odd)': {
          backgroundColor: '#F4F4F4'
        },
        '&>ul>li:nth-of-type(odd)>span': {
          color: '#CC0000',
          fontWeight: '500',
          mr: 1
        }
      }}>
      <ul>
        {data['conversation'].map((i, index) => {
          return (
            <li key={index}>
              <span>{i.label}</span>
              {i.phrase}
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default Conversation;
