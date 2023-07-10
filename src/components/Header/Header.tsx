import React from "react";
import Form from 'react-bootstrap/Form';
import { SelectCategories } from "./SelectCategories/SelectCategories";
import SearchInput from "./SearchInput/SearchInput";

const Header: React.FC = ()=> {
    return (
        <div className='relative flex flex-col justify-center items-center min-h-[260px] px-5 shadow-md overflow-hidden p-2'>
            <SearchInput></SearchInput>
            <div className='flex flex-row justify-between items-center z-10'>
                <SelectCategories></SelectCategories>
            </div>
            
        </div>
    )
}

export default Header;