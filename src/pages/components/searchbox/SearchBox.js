import React from 'react';

const style = {
    width:'80vw', maxWidth:'450px', 
    display:'flex', 
    height:'40px', 
    borderRadius:'20px', 
    alignItems: 'center', 
    justifyContent:'space-between',
    backgroundColor:'white',
    paddingLeft:'15px',
    paddingRight:'15px'
}

const buttonStyle = { borderRadius:'50%' }

const SearchBox = ({onSearch}) => (
    <div style={style}>
        <input
            id="search-box"
            type='search'
            placeholder='Find more Movies...'
        />
        <button onClick={onSearch} style={buttonStyle}>?</button>
    </div>
);

export default SearchBox;