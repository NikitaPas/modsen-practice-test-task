import React from "react";
import "./styleBooks.css"

interface SelectRelevanceProps {
    orderBy: string[];
    onChange: (orderBy: string) => void;
  }
  
  export default function SelectRelevance({ orderBy, onChange }: SelectRelevanceProps) {
    return (
      <div className="selectCategory">
      <select onChange={(event) => onChange(event.target.value)}>
        <option value="all">Relevance</option>
          <option value="art">Newest</option>
      </select>
      </div>
    );
  }