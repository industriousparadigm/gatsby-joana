import React from 'react'
import Helmet from 'react-helmet'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import mask01 from '../assets/images/masks/01.jpeg'
import mask02 from '../assets/images/masks/02.jpeg'
import mask03 from '../assets/images/masks/03.jpeg'
import mask04 from '../assets/images/masks/04.jpeg'
import mask06 from '../assets/images/masks/06.jpeg'
import mask07 from '../assets/images/masks/07.jpeg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: mask01,
    thumbnail: mask01,
    caption: 'Fitando o horizonte',
    description:
      'Neste dia estava pensativa. Considerei esquecer toda esta situação e ir a casa da Mariana.',
  },
  {
    id: '2',
    source: mask02,
    thumbnail: mask02,
    caption: 'O Justiceiro',
    description:
      'Com este trabalho senti-me muito próxima dos cowboys de outrora.',
  },
  {
    id: '3',
    source: mask03,
    thumbnail: mask03,
    caption: 'O Justiceiro',
    description: 'Amarelo é a melhor cor!',
  },
  {
    id: '4',
    source: mask06,
    thumbnail: mask06,
    caption: 'Sortido',
    description:
      'Máscaras para todos os gostos. Pena foi ter que usar todas as cortinas que tinha em casa. Por sorte, sobram as persianas.',
  },
  {
    id: '5',
    source: mask04,
    thumbnail: mask04,
    caption: 'O Justiceiro',
    description: 'A bolsa ou a vida!',
  },
  {
    id: '6',
    source: mask07,
    thumbnail: mask07,
    caption: 'José Cid',
    description:
      'Com este look, espero apelar aos que gostam de um tom mais sóbrio mas ainda assim suavemente evocando os azulejos da Casa da Música.',
  },
]

const HomeIndex = () => {
  const siteTitle = 'A Máscara'
  const siteDescription =
    'Expomos aqui o material de altíssima qualidade produzido no Norte pela senhora Joana Salvini.'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>A Máscara</h2>
          </header>
          <p>
            Máscaras de proteção social, o problema é que não tenho etiquetas
            nem garantia de stocks de cores. A única coisa que posso dizer é que
            o interior é de material 100 por cento algodão. Vamos ter que
            melhorar este parágrafo - quem terá tempo para estas coisas?
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Saber mais
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Trabalho recente</h2>

          <Gallery
            images={DEFAULT_IMAGES.map(
              ({ id, source, thumbnail, caption, description }) => ({
                source,
                thumbnail,
                caption,
                description,
              })
            )}
          />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Ver mais
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Contacto</h2>
          <p>
            Caso esteja interessado em manter o seu cuspe para si mesmo, eu
            posso ajudar.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nome"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Mensagem"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Enviar" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Morada</span>
                  </h3>
                  Uma rua qualquer
                  <br />
                  Norte
                  <br />
                  Portugal
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  91***34*9
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">joanasalvini@***.**</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
