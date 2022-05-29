import { makeStyles } from '@mui/styles';
import {AiOutlineCopyright} from 'react-icons/ai'

import 'swiper/css';

function App() {
  const useStyle = makeStyles(theme => ({
    contenedorGeneral: {
      height: '100vh',
      background:' linear-gradient(to top, #520c0cba, #000f0fcc), url(https://img.freepik.com/vetores-gratis/padrao-uniforme-com-programacao-e-desenvolvedores-internet-e-codificacao_341076-313.jpg)  top center',
      color : '#f2cfcb'
    },
    header : {
      backgroundColor: '#fff',
      padding: '1%',
      margin: '2%',
      borderRadius: '5px',
      boxShadow: '0px 0px 5% #888888',
      width: '10%',
      color: '#000',
      display: 'flex',
      justifyContent: 'center',
    },
    presentacionContainer: {
      backgroundColor: 'rgba(41, 46, 51, 0.6)',
      padding: '1%',
      width: '35%',
      display: 'flex',
      justifyContent: 'center',
      margin : '0PX 2%',
      borderRadius: '20px',
      fontFamily  : 'American Typewriter, serif',
      fontSize: '250%',
      fontWeight: 'bold',
    },
    texto:{
      color: '#f2cfcb',
      display: 'flex',
      justifyContent: 'center',
      fontFamily  : 'American Typewriter, serif',
      fontSize: '160%',
      fontWeight: 'bold',
      backgroundColor: 'rgba(41, 46, 51, 0.6)',
      width: '30%',
      borderRadius: '20px',
      padding: '1%',
    },
    contenedorCuerpo1: {
      background:' linear-gradient(to top, #000f0fcc, #520c0cba), url(https://thumbs.gfycat.com/AstonishingRightKingsnake-size_restricted.gif) top center ',
      paddingTop: '2%',
      paddingBottom: '2%'
    },
    contenedorCuerpo2:{
      background:' linear-gradient(to top, #520c0cba,#000f0fcc ), url(https://img.freepik.com/vetores-gratis/padrao-uniforme-com-programacao-e-desenvolvedores-internet-e-codificacao_341076-313.jpg) top center',
      paddingTop: '2%',
      paddingBottom: '2%'
    },
    pieDePagina   : {
      backgroundColor: '#000',
      width: '100%',
      height: '30%',
      display: 'flex',
      fontSize: '60%',
      color: '#fff',
      padding: '1%',
    },
    contenedorCopyRight: {
      width: '2000%',
    }
  }));
  const classes = useStyle();

  return (
    <>
      <div className={`${classes.contenedorGeneral} d-flex flex-column justify-content-center   `}>
      
     

          <div  className={` d-flex justify-content-center align-items-center`}>
          <div className={` ${classes.presentacionContainer} text-center`}>
                <div>
                    console.log( 'Hi there 👋' )<br/> Mi nombre es Nicolas y soy Full Stack Developer </div>            
              </div>
              <div className={` border-round `} >
                <img src={'https://media2.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif'} alt="gif desarollador" width="500px" heigth="500px" className='rounded'/>
              </div>

              
          </div>
      </div>

      <div className={`  ${classes.contenedorCuerpo1} d-flex flex-column justify-content-center align-items-center `}>
          <div className={`${classes.texto} d-flex align-items-center text-center `}>
              <div>LENGUAJES QUE UTILIZO:</div>
          </div>
          <br/>
          <div className={` d-flex justify-content-around  `}>
                <img alt='img' src="https://camo.githubusercontent.com/8a0fd75d44546539fbf2a608ae3f608055e0122c8f03b27439c7ab4ceca23629/68747470733a2f2f6d69722d73332d63646e2d63662e626568616e63652e6e65742f70726f6a6563745f6d6f64756c65732f6d61785f313230302f36323263613035323037313736312e353930333465373461626233362e676966" width="10%"/>
                <img alt='img' src="https://fresheropenings.com/wp-content/uploads/2020/12/Free-C-Certification-Course.png" width="10%"/>
                <img alt='img' src="https://institutocpe.edu.uy/wp-content/uploads/2020/03/sql-logo.png" width="10%"/>  
                <img alt='img'  src="https://www.donski.live/MainPage/img/gif_react.gif" width="12%" />
                <img alt='img' src="https://media0.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=6c09b952owhu2s55xdcpopiyf5kqy5jvpgem3yusodg2pt9t&rid=giphy.gif&ct=s" width="11%"/>
                <img alt='img' src="https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/css.gif" width="10%"/>
                <img alt='img' src="https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/html.gif" width="10%"/>
                <img alt='img' src="https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/bootstrap.gif"  width="10%"/>

          </div>
      </div>
      <div className={`  ${classes.contenedorCuerpo2} d-flex flex-column justify-content-center align-items-center `}>
          <div className={`${classes.texto} d-flex align-items-center text-center `}>
              <div>OTRAS HERRAMIENTAS:</div>
          </div>
          <br/>
          <div className={` d-flex justify-content-around  `}>
                <img alt='img' src="https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/github.webp"  width="20%"/>
                <img alt='img' src="https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/vscode.webp"  width="20%"/>
          </div>
      </div>

      <div className={`${classes.pieDePagina} d-flex justify-content-between `}>
        <div className={`${classes.contenedorCopyRight} `}>
          <AiOutlineCopyright /> Pagina Creada con React.JS y Bootstrap
        </div>
        
          <a href="https://www.linkedin.com/in/nicol%C3%A1s-mauber-a996121b9 " >
            <img alt="Qries" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"  width='100%'/>
          </a>
        
      </div>
      
    </>
  );
}


export default App;