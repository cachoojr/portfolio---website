import Head from 'next/head'

import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <Head>
                <title>web project.</title>
                <meta name="description" content="Site feito para ser o lar de todos, em breve algumas source code disponivel" />
                <link rel="icon" href="https://i.stack.imgur.com/kGgYr.png?s=192&g=1" />
            </Head>

            <div className='website'>
            <center>  <img src="https://i.pinimg.com/originals/49/e7/6e/49e76e0596857673c5c80c85b84394c1.gif" width={1400} height={10}></img></center>

                <header className='header d-flex justify-content-center align-items-center gap-2'>
                </header>
                

                <main className="at-container">
                    <section className="saudations d-flex flex-wrap-reverse align-items-center justify-content-between flex-wrap">
                            <h2 className="at-item"> Olá, eu sou o carlos junior!</h2>
                            <br></br>
                           <div></div> <br></br>
                           <img src="http://31.media.tumblr.com/85e606ae2b682766a1d909703af7ba09/tumblr_naxk4clyCc1s2zm2ko1_500.gif" alt="Home" className='eu_msm'></img>
                           <br></br>

                          </section>
                            <txt>Hola manito! bem vindo ao meu projeto, meu nome é Carlos, mais conhecido como script. <br></br> Sou um estudante de programação com foco em javascript, html e Python . Estou começando a dominar<br /> <a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer noopener">Html 5</a> e <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer noopener">JavaScript</a>.</txt>
<div></div>
<div></div>

                    
                        <section>

                        </section>

                    <section className="areas">
                        <div className="area mt-5">
                            <h4 className="fw-bold">MAIN</h4>
                            <div className="boxes d-flex flex-wrap pt-2 gap-3">
                                <div className="box rounded">
                                    <a href="https://www.instagram.com/carlosjr013_/" target="_blank" rel="noreferrer noopener">
                                        <div className="box-content">
                                            <h6>Instagram</h6>
                                            <p>Meu perfil, lá irei postar sobre minha vida pessoal e web</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="box rounded">
                                    <a href="https://discord.com/users/975853751929823242" target="_blank" rel="noreferrer noopener">
                                        <div className="box-content">
                                            <h6>Discord</h6>
                                            <p>Meu aplicativo de conversas favorito, irei adorar te encontar lá!</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="box rounded">
                                    <a href="https://github.com/cachoojr" target="_blank" rel="noreferrer noopener">
                                        <div className="box-content">
                                            <h6>Github</h6>
                                            <p>Todos os meus projetos e codigos</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="box rounded">
                                    <a href="https://scriptweb.repl.co" target="_blank" rel="noreferrer noopener">
                                        <div className="box-content">
                                            <h6>Projeto em html, css e javaScript</h6>
                                            <p>Veja um projeto simples meu, feito em html5</p>
                                        </div>
                                    </a>
                                </div>
                               
                            </div>
                        </div>

       
                        <div className="area mt-5">
                            <h4 className="fw-bold">Tecnologias que eu estou aprendendo</h4>
                            <div className="boxes d-flex flex-wrap pt-2 pb-3 gap-2">
                                <div className="techs-box d-flex align-items-center justify-content-center rounded">
                                    <div className="techs-box-content">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png"></img>
                                        <h5 className="ps-2">Javascript</h5>
                                    </div>
                                </div>
                                <div className="techs-box d-flex align-items-center justify-content-center rounded">
                                    <div className="techs-box-content">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"></img>
                                        <h5 className="ps-2">HTML5</h5>
                                    </div>
                                </div>
                                <div className="techs-box d-flex align-items-center justify-content-center rounded">
                                    <div className="techs-box-content">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png"></img>
                                        <h5 className="ps-2">CSS3</h5>
                                    </div>
                                </div>
                               
                             
                            </div>
                        </div>

                    </section>
                    <div className="area mt-5">

                    <h4 className="fw-bold"> SITES PARA ESTUDOS:</h4>
                    <font color="white">
                    <ul className="fw-bold">

                        <li >
                        <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer noopener">
                                            w3schools </a>
                        </li>
                        <li >
                        <a href=" https://www.rocketseat.com.br/" target="_blank" rel="noreferrer noopener">
                        rocketseat </a>

                        </li>
                        <li >
                        <a href=" https://www.coursera.org" target="_blank" rel="noreferrer noopener">
                        coursera </a>
                        </li>

                    </ul>
                    </font>
                    </div>
                </main>

                <footer className="footer d-flex align-items-center mt-5">
                    <div className="footer-content container px-5 pt-3">
                        <p>Projeto iniciado por script, utilizado por referencia: <a href="https://eggsy.xyz/"><b>Eggsy Website</b></a></p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
