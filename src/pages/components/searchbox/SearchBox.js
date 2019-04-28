import React from 'react';
import './SearchBox.css';
import '../../searchpage/SearchPage.css';

const SearchBox = ({onSearch}) => (
    <div className="sch-box">
        <input
            id="search-box"
            className="sch-input"
            type="text"
            placeholder='Find more Movies...'
        />
        <span onClick={onSearch}>
            <i   className="material-icons sch-btn">
            search
            </i>
        </span>
        
    </div>
);

export default SearchBox;