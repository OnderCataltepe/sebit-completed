import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
const Modal = ({ data, open, handleClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ p: 8 }}>
        <Box sx={{ p: 1, zoom: '150%' }}>{data}</Box>
      </Dialog>
    </div>
  );
};

export default Modal;
