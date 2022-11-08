import config from "../config.json"
import styled from 'styled-components'
import { CSSReset } from "../src/componentes/CSSReset";
import Menu from "../src/componentes/Menu";
import { StyledTimeline } from "../src/componentes/Timeline";


function HomePage() {

    const estilosDaHomePage = { //backgroundColor: 'red' 
    };

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

                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>

                </Timeline>


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
        margin-top:50px;
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

function Timeline(propriedades) {
    /*console.log('dentro do componente', propriedades.playlists);*/
    const playlistNames = Object.keys(propriedades.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
            
                return (
                    <section>
                        <h2> {playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                    return (
                                        <a href={video.url}>
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