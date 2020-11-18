import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Label } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { GithubContext } from '../Context/Context';
import { FaGithub } from 'react-icons/fa';
import './Join.css';

const Join = () => {
    let history = useHistory();
    const [userName, setUserName] = useState('');
    const { searchGithubUser, error, isLoading, requests } = React.useContext(
        GithubContext
    );

    const onKeySearch = (e) => {
        if (e.key === "Enter" && userName) {
            history.push(`/github?name=${userName}`);
            searchGithubUser(userName);
        }
    }

    const onUserName = (e) => {
        setUserName(e.target.value);
    }
    
    const onSearch = (e) => {
        if (!userName) {
            e.preventDefault();
            alert("Who do you want to look up? :/")
        }
        searchGithubUser(userName);
    }
    
    return (
        <div className="join__container">
            <FaGithub className="join__icon" />
            <Label>How's Your Github?</Label>
            <InputGroup className="join__form" size="lg">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input onKeyPress={onKeySearch} onChange={onUserName} className="join__input" placeholder="username" autoComplete="off" />
                <Link to={`/github?name=${userName}`}>
                    <InputGroupAddon addonType="append">
                        {requests > 0 && !isLoading && (
                            <Button onClick={onSearch} size="lg" className="join__search">Search</Button>
                        )}
                    </InputGroupAddon>
                </Link>
            </InputGroup>
        </div>
    )
}

export default Join
