import React from "react";
import styled from "styled-components";
import {FaBars} from "react-icons/fa";
import { Links } from "../../utils/help";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";


const Navbar =()=>{
    const {handleSidebar} =useAppContext();
    return(
        <Wrapper>
            <div className="column icons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" alt="coca" className="main-img" />
                <FaBars onClick={handleSidebar} className="bars"/>
            </div>
            <div className="column links">
                {Links.map(item=>{
                    return <Link to={item.link} className="link-item" key={item.id}>{item.name}</Link>
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    box-shadow:5px 10px 15px rgba(0,0,0,0.2);
    display:grid;
    grid-template-columns:1fr 1fr;
    text-align:center;
    align-items:center;
    padding:1rem 0;
    .bars{
        display:none;
        font-size:2rem;
    }
    @media screen and (max-width:991px){
        grid-template-columns:1fr;
        .icons{
            width:80%;
            margin:auto;
            justify-content:space-between;
        }
        .bars{
            display:block;
        }
        .links{
            display:none;
        }
    }
`;


export default Navbar;