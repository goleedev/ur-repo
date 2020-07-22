import React from 'react';
import { GithubContext } from '../Context/Context';
import Error from '../Error/Error';
import Repos from '../Charts/Repos';

import { MdWork, MdLocationOn } from 'react-icons/md';
import { FaBlog, FaRegCalendarCheck } from 'react-icons/fa';
import { RiArrowGoBackLine, RiTwitterLine } from 'react-icons/ri';
import { Container, Row, Col } from 'reactstrap';
import './UserDetail.css';

const UserDetail = () => {
    const { githubUser } = React.useContext(GithubContext);
    const {
        avatar_url,
        html_url,
        name,
        company,
        blog,
        login,
        location,
        twitter_username,
        followers,
        following,
        public_repos,
        created_at
    } = githubUser;

    const userJoined = created_at.split("-");
    const year = userJoined[0]
    const day = userJoined[2].slice(0, 2);
    const months = [ "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December" ];
    const month = months[Number(userJoined[1]) - 1];

    if (login === "not.loading.yet!") {
        return <Error />
    } 
    
    return (
        <Container className="user__container">
            <a className="user__back" href="/">
                <RiArrowGoBackLine  /> Back To Home
            </a>
            <Row>
                <img className="user__avatar" src={avatar_url} alt="avatar" />
            </Row>
            <Row>
                <Col className="user__name">{name}</Col>
            </Row>
            <Row className="user__des">
                <div>
                    <a className="user__username" href={html_url}>
                        @{login} 
                    </a>
                </div>
                <div>
                    <span><FaRegCalendarCheck /> Joined | {month} {day}, {year}</span>
                </div>
            </Row>
            <Row className="user__info">
                {location &&
                    <div>
                        <MdLocationOn /> {location}
                    </div>}
                {twitter_username &&
                    <div>
                        <a href={`https://twitter.com/${twitter_username}`}>
                            <RiTwitterLine /> {twitter_username}
                        </a>    
                    </div>}
                {company &&
                    <div>
                        <MdWork /> {company}
                    </div>}
                {blog &&
                    <div>
                        <a href={blog}>
                           <FaBlog /> {blog}
                        </a>
                    </div>}
            </Row>

            {/* Followers/Following and Repos */}
            <Row className="user__card-container">
                <div className="user__card">
                    <span>Repos</span>
                    <p>{public_repos}</p>          
                </div>
                <div className="user__card">
                    <span>Followers</span>
                    <p>{followers}</p>
                </div>
                <div className="user__card">
                    <span>Following</span>
                    <p>{following}</p>  
                </div>
            </Row>

            {/* Charts */}
            <Row>
                <Repos />
            </Row>
        </Container>
    )
}

export default UserDetail
