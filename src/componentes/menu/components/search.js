import React from "react";
import styled from "styled-components"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #bff9ff;
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: #bff9ff;
    background-color: #00A6CB;
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: #bff9ff;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid #bff9ff;
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({ValorDoFiltro, SetValorDoFiltro}){
    //const [ValorDaBusca, SetValorDaBusca] = React.useState('5');
    //console.log('search', ValorDaBusca);
    const ValorDaBusca = ValorDoFiltro;
    const SetValorDaBusca = SetValorDoFiltro;
    
    return(
        <StyledSearch>
            <input type="text" onChange={(e) => { SetValorDaBusca(e.target.value) }} value={ValorDaBusca}/>
            <button>
                🔍
            </button>
        </StyledSearch>
    )
}