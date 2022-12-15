import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const description = useSelector((state) => state.data.values.tumblelog.description);
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const searchHandle = (e) => {
    e.preventDefault();
    if (value.trim().length > 0) {
      navigate(`/search/${value.trim()}`);
    }
  };
  return (
    <div>
      <form onSubmit={searchHandle}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Search</button>
        <Typography variant="body1" sx={{ pl: 2, mb: 2 }}>
          {description}
        </Typography>
        <Link href="#" underline="always" sx={{ color: '#888888' }}>
          Archive
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
