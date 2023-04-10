import styled from "styled-components";
import Button from "../common/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBox() {
    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search?query=" + query);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} />
                <Button>검색</Button>
            </form>
        </Container>
    );
}

const Container = styled.div`
    form {
        display: flex;
    }

    input {
        flex: 1;
        padding: 5px 10px;
        margin-right: 10px;
        border-radius: 10px;
        border: 1px solid #bbb;
        outline: none;
    }
    margin-bottom: 20px;
`;

export default SearchBox;
