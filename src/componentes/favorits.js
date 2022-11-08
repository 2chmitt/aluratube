import styled from "styled-components";

const StyledFavorits = styled.footer`
    padding: 10px 28px;
    .favoritos__title {
        font-weight: bold;
        color: #bff9ff;
        margin: 16px 0;
    }
    .favoritos__container {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
    }
    .favoritos__link {
        color: unset;
        text-decoration: none;
    }

    
    .favoritos__img:hover{
        transform: scale(1.1);
    }
    
    .favoritos__img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: 500ms linear; 
    }

    .favoritos__name {
        text-align: center;
        color: #bff9ff;
    }
`;

export default StyledFavorits;