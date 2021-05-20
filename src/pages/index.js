import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Grid } from '../components/Grid'
import { Container } from '../components/Container'

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
          className="button button--secondary"
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
          <div className="pluginWrapper buttonWrapper">
            <Button href={'/docs/'}>Learn More - Docs</Button>
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
              padding={['bottom', 'top']}
              id={props.id}
              background={props.background}
          >
              <Grid
                  align={props.align || 'center'}
                  imageAlign={props.imageAlign || 'center'}
                  contents={props.children}
                  layout={props.layout}
              />
          </Container>
      )

      const SecondTagline = () => (
          <Container className="" >
              <div style={{ textAlign: 'center' }}>
                  <p>
                      A decentralized bridge between Ethereum and Tezos. <br />
                      Transfer your ERC20 and ERC721 tokens from Ethereum to the Tezos blockchain in a decentralized way


                  </p>
              </div>
          </Container>

      )

      const About = () => (
          <React.Fragment>
              <Block className="about" background={'light'} align="left">
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
          </React.Fragment>
      )

      const Wraponomics = () => (
          <React.Fragment>
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
                <Wraponomics />

            </div>
        </Layout>
    )
  }
}



