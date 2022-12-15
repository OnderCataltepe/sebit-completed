import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Link } from 'react-router-dom';
import { typeFunction } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Modal from '../modals/Modal';
import { useState } from 'react';
const PostLayout = ({ subItem }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        mb: 4,
        display: 'flex',
        '&:hover a': {
          visibility: 'visible !important'
        }
      }}
      key={subItem.id}>
      {typeFunction(subItem)}
      <Link
        to={`/post/${subItem.id}`}
        target="_blank"
        style={{
          marginLeft: '5px',
          visibility: 'hidden',
          backgroundColor: 'black',
          height: '20px',

          borderRadius: 0,
          '&:hover': {
            backgroundColor: 'black'
          }
        }}>
        <FontAwesomeIcon
          style={{
            width: '10px',
            fontWeight: 'bold',
            color: 'white',
            padding: '0px 4px'
          }}
          icon={faArrowLeft}
        />
      </Link>
      <IconButton
        onClick={handleOpen}
        sx={{
          height: '15px',
          borderRadius: '0',
          pt: 1.3,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }}>
        <ZoomInIcon />
      </IconButton>
      <Modal data={typeFunction(subItem)} open={open} handleClose={handleClose} />
    </Box>
  );
};

export default PostLayout;
