import React from "react";
import SearchBar from "../components/inputs/SearchBar";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import '../styles/home.css'

function Home() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      
    }}>
      <SearchBar />
      <Button variant="outlined" startIcon={<AddIcon />}>
        Create New Board
      </Button>
    </Box>
  );
}

export default Home;
