import React from "react";
import "./styleBooks.css"

interface SelectCategoryProps {
    categories: string[];
    onChange: (category: string) => void;
  }
  
  export default function SelectCategory({ categories, onChange }: SelectCategoryProps) {
    return (
      <div className="selectCategory">
      <select onChange={(event) => onChange(event.target.value)}>
        <option value="all">All categories</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
      </select>
      </div>
    );
  }