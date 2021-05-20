import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Grid } from '../components/Grid'
import { Container } from '../components/Container'

const Button = (props) => (
    <a
        className={props.className}
        href={props.href}
        target={props.target}
    >
        {props.children}
    </a>
)

const HomePlace = () => {
  const { siteConfig } = useDocusaurusContext()
  const { baseUrl } = siteConfig

  const PlaceContainer = (props) => (
      <div className='homeContainer'>
        <div className='homeFade'>
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
  )

  const Logo = (props) => (
      <div className="productLogo">
        <img src={props.img_src} alt="Project logo" />
      </div>
  )

  const ProductTitle = () => (
      <div>
        <h2 className="productTitle">{siteConfig.title}</h2>
        <div className="productTaglineWrapper">
          <p className="productTagline">{siteConfig.tagline}</p>
        </div>
      </div>
  )

    const Button = (props) => (
        <a
            className="wrapButton"
            href={props.href}
            target={props.target}
        >
            {props.children}
        </a>
    )



  return (
      <PlaceContainer>
        <Logo img_src={`${baseUrl}img/logo.png`} />
        <div className="inner">
          <ProductTitle siteConfig={siteConfig} />
          <div className="">
            <Button target="_blank" href={'https://app.tzwrap.com/wrap'}>WRAP NOW!</Button>
          </div>
        </div>
      </PlaceContainer>
  )

}

export default class Index extends React.Component {
  render() {
    const { config: siteConfig } = this.props
    const { baseUrl } = siteConfig

      const Block = (props) => (
          <Container
              padding={['bottom']}
              id={props.id}
              background={props.background}
          >
              <Grid
                  align={props.align || 'center'}
                  imageAlign={props.imageAlign || 'center'}
                  contents={props.children}
                  layout={props.layout}
                  whitepaperButton={props.withWhitepaperButton}
              />
          </Container>
      )

      const SecondTagline = () => (
          <Container className="" >
              <div style={{ textAlign: 'center' }}>
                  <p>
                      Transfer your ERC20 and ERC721 tokens from Ethereum to the Tezos blockchain in a decentralized way


                  </p>
              </div>
          </Container>

      )

      const About = () => (
          <React.Fragment>
              <div className="pTop">
              <Block className="about" padding={['top']} background={'dark'} align="left" withWhitepaperButton={true}>
                  {[
                      {
                          title: '',
                          content:
                              "## About \n Through Wrap, users issue wTokens (wrapped tokens) which are representations\n of ERC20 and ERC721 tokens on the Tezos blockchain. wTokens can then be used\n on the Tezos blockchain, and their value is pegged to the original tokens.\n Wrap is a decentralized protocol, relying on a strong federation (the Signers\n Quorum) that guarantees the stability of the protocol, and a community of\n $WRAP governance token holders.",
                          image: `${baseUrl}img/logo.png`,
                          imageAlt: 'The problem (picture of a question mark)',
                          imageAlign: 'left',
                      },
                  ]}
              </Block>
              </div>
          </React.Fragment>
      )

      const Tokens = () => (
          <div className="tokens">
              <h3 className="tokensTitle">ERC 20 Tokens Supported: </h3>
              <div className="tokens-line">
                  <img src={`${baseUrl}img/black/1.png`}/>
                  <img src={`${baseUrl}img/black/2.png`}/>
                  <img src={`${baseUrl}img/black/3.png`}/>
                  <img src={`${baseUrl}img/black/4.png`}/>
                  <img src={`${baseUrl}img/black/5.png`}/>
                  <img src={`${baseUrl}img/black/6.png`}/>
                  <img src={`${baseUrl}img/black/7.png`}/>
              </div>
              <div className="tokens-line">
                  <img src={`${baseUrl}img/black/8.png`}/>
                  <img src={`${baseUrl}img/black/9.png`}/>
                  <img src={`${baseUrl}img/black/10.png`}/>
                  <img src={`${baseUrl}img/black/11.png`}/>
                  <img src={`${baseUrl}img/black/12.png`}/>
                  <img src={`${baseUrl}img/black/13.png`}/>
                  <img src={`${baseUrl}img/black/14.png`}/>
              </div>
              <div className="tokens-line">
                  <img src={`${baseUrl}img/black/15.png`}/>
                  <img src={`${baseUrl}img/black/16.png`}/>
                  <img src={`${baseUrl}img/black/17.png`}/>
                  <img src={`${baseUrl}img/black/18.png`}/>
                  <img src={`${baseUrl}img/black/19.png`}/>
                  <img src={`${baseUrl}img/black/20.png`}/>
                  <img src={`${baseUrl}img/black/21.png`}/>
              </div>
          </div>
      )

      const Wraponomics = () => (
          <React.Fragment>
              <div className="pTop">
              <Block background={'light'} align="left">
                  {[
                      {
                          title: '',
                          content:
                              "## Wraponomics " +
                              "\n $WRAP is the governance token that allows the community of users of Wrap to interact and modify the protocol." +
                              "\n $WRAP token holders can vote on key parameters of the protocol and receive a share of wrapping and unwrapping fees." +
                              "\n - Max supply: 100,000,000 $WRAPS" +
                              "\n - Distribution: Weekly" +
                              "\n - Allocation: 50% Quorum / 40% Users / 10% Dev Pool",
                          image: `${baseUrl}img/logo.png`,
                          imageAlt: 'The problem (picture of a question mark)',
                          imageAlign: 'right',
                      },
                  ]}
              </Block>
              </div>
          </React.Fragment>
      )



      return (
        <Layout
          permalink="/"
          title={siteConfig.title}
          description={siteConfig.tagline}
        >
          <HomePlace siteConfig={siteConfig} />
            <div className='mainContainer'>
                <SecondTagline />
                <About />
                <Tokens />
                <Wraponomics />

            </div>
        </Layout>
    )
  }
}



