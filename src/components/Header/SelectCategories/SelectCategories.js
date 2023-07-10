import React from "react";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';

export const SelectCategories = (props) => {
    return (<Categories variant="secondary" aria-label="Default select example">
                <option value="all">All</option>
                <option value="art">art</option>
                <option value="biography">biography</option>
                <option value="computers">computers</option>
                <option value="history">history</option>
                <option value="medical">medical</option>
                <option value="poetry">poetry</option>
            </Categories>
        )
};

const Categories = styled(Form.Select)`
    margin-top:20px;
    margin-left:45%;
    width:150px;
    display: block;
    `