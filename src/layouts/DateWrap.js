import { useEffect } from 'react';
import Box from '@mui/material/Box';

const days = ['pazar', 'pazartesi', 'salı', 'çarşamba', 'perşembe', 'cuma', 'cumartes'];
const months = [
  'ocak',
  'şubat',
  'mart',
  'nisan',
  'mayıs',
  'haziran',
  'temmuz',
  'ağustos',
  'eylül',
  'ekim',
  'kasım',
  'aralık'
];
const DateWrap = ({ data }) => {
  const date = new Date(data);

  const nth = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };
  useEffect(() => {
    console.log(date.getFullYear());
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        pr: 4,
        width: ' 100%',
        whiteSpace: 'nowrap',
        font: 'normal 34px Helvetica, sans-serif',
        letterSpacing: '-2px',
        color: '#ccc',
        textTransform: 'uppercase',
        lineHeight: '35px'
      }}>
      {days[date.getDay()].substring(0, 3)}
      <Box
        sx={{
          height: '30px',
          width: '45px',
          backgroundColor: '#6498cc',
          color: ' #bbd5f1',
          font: ' Bold 12px Verdana, Sans-Serif',
          textAlign: 'center',
          lineHeight: '12px',
          ml: '10px',
          pt: '5px',
          letterSpacing: '0px',
          overflow: 'hidden'
        }}>
        {months[date.getMonth()].substring(0, 3)}
        <br />
        {date.getDate() + nth(date.getDate())}
      </Box>
    </Box>
  );
};

export default DateWrap;
