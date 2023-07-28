import React from "react";
import '../Books/styleBooks.css'

interface SelectRelevanceProps {
    orderBy: string[];
    onChange: (orderBy: string) => void;
    value?: string;
  }
  
  export default function SelectRelevance({ orderBy, onChange, value }: SelectRelevanceProps) {
    return (
      <div className="selectCategory">
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
      </select>
      </div>
    );
  }