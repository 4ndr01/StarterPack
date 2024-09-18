import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default SearchBar;
