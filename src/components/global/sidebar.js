import React from "react";
import styled from "styled-components";
import {FaRegHandPaper} from "react-icons/fa";
import { Links } from "../../utils/help";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";


const Sidebar =()=>{
    const{isSidebar,handleSidebar}=useAppContext();
    return(
        <Wrapper className={isSidebar?"active":null}>
            <div className="column icons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" alt="coca" className="main-img" />
                <FaRegHandPaper onClick={handleSidebar} className="close"/>
            </div>
            <div className="column links">
                {Links.map(item=>{
                    return <Link  onClick={handleSidebar} to={item.link} className="link-item" key={item.id}>{item.name}</Link>
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.aside`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:#fff;
    transition:0.3s linear;
    &.active{
        transform: translateX(0);
    }
    transform: translateX(-100%);
    .icons{
        margin:2rem 4rem 2rem 4rem ;
        display:flex;
        justify-content:space-between;
    }
    .links{
        display:grid;
    }
    .link-item{
        padding:0.5rem 0 0.5rem 2rem;
        margin-bottom:1rem;
        &:hover{
            background-color:#FBd913;
        }
    }
    @media screen and (min-width:991px){
        display:none;
    }
`;


export default Sidebar;