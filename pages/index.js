import React from 'react';
import config from '../src/data/config.json'
import styled from 'styled-components'
import { CSSReset } from "../src/componentes/resetcss/CSSReset";
import Menu from "../src/componentes/menu/components";
import { StyledTimeline } from "../src/componentes/timeline/Timeline";
import StyledFavorits from "../src/componentes/favorits/favorits";
import Search from '../src/componentes/menu/components/search';



function HomePage() {

    const estilosDaHomePage = { //backgroundColor: 'red' 
    };

    const [ValorDoFiltro, SetValorDoFiltro] = React.useState('');

    /*console.log(config.playlists);*/

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                backgroundColor: "#00A6CB",
            }}>

                <Menu ValorDoFiltro={ValorDoFiltro} SetValorDoFiltro={SetValorDoFiltro} />
                <Header />
                <Timeline  searchValue ={ValorDoFiltro} playlists={config.playlists}>
                </Timeline>
                <Favoritos favoritos={config.favorito}>
                </Favoritos>


            </div>
        </>
    );

}

 export default HomePage
//
//function Menu() {
//    return (
//        <div>
//            Menu
//        </div>
//    )
//}



const StyleHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        display:flex;
        align-items: center;
        width: 100%;
        padding:16px 32px;
        gap: 16px;
        color: #bff9ff;
    }

  `;

  const StyleBanner = styled.div`
    background-image: url(${config.bg});
    height: 230px;
  `
function Header() {
    return (

        <StyleHeader>

            <StyleBanner />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />

                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>

            </section>

        </StyleHeader>
    )
}

function Timeline({searchValue, ...propriedades}) {
    /*console.log('dentro do componente', propriedades.playlists);*/
    const playlistNames = Object.keys(propriedades.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
            
                return (
                    <section key={playlistName}>
                        <h2> {playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormal = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormal)
                            }).map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>

                                        </a>
                                    )

                                })
}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Favoritos(){
    return(
        <StyledFavorits>
            <h3 className="favoritos__title">AluraTubes Favoritos</h3>
            <div className="favoritos__container">
                <a className="favoritos__link" href="#">
                    <img src="https://yt3.ggpht.com/xqhIoXspeX7eqouJvNHl1xqpv9213Pl26ENZbuouXxO2RlDadjsveNXfgnj8GTUk7thFYUkVRg=s88-c-k-c0x00ffffff-no-rj" alt="favorito" className="favoritos__img" />
                    <p className="favoritos__name">AluraCursosOnline</p>
                </a>

                <a className="favoritos__link" href="#">
                    <img src='https://yt3.ggpht.com/ytc/AMLnZu-QIREHqSQ2yGwkOFvDb9rl_strZ6vpCEpo9xF5=s88-c-k-c0x00ffffff-no-rj' alt="favorito" className="favoritos__img" />
                    <p className="favoritos__name">Joserobjr</p>
                </a>
            </div>
        </StyledFavorits>
        
    )
}