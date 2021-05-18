import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'About Wrap',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Through Wrap, users issue wTokens (wrapped tokens) which are representations
          of ERC20 and ERC721 tokens on the Tezos blockchain. wTokens can then be used
          on the Tezos blockchain, and their value is pegged to the original tokens.
          Wrap is a decentralized protocol, relying on a strong federation (the Signers
          Quorum) that guarantees the stability of the protocol, and a community of
          $WRAP governance token holders.
      </>
    ),
  },
  {
    title: 'Wraponomics',
    Svg: require('../../static/img/wrap.svg').default,
    description: (
      <>
          $WRAP is the governance token that allows the community of users of Wrap to interact and modify the protocol.

          $WRAP token holders can vote on key parameters of the protocol and receive a share of wrapping and unwrapping fees.

          Max supply: 100,000,000 $WRAPS
          Distribution: Weekly
          Allocation: 50% Quorum / 40% Users / 10% Dev Pool
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
