import React from 'react'
import classNames from 'classnames'
import { MarkdownBlock } from '../MarkdownBlock'


const Button = (props) => (
    <a
        className={props.className}
        href={props.href}
        target={props.target}
    >
        {props.children}
    </a>
)


const renderBlockImage = (image, imageLink, imageAlt) => {
    if (!image) {
        return null
    }

    return (
        <div className="blockImage">
            <img src={image} alt={imageAlt} />
        </div>
    )
}

const renderBlockTitle = title => {
    if (!title) {
        return null
    }

    return (
        <h2>
            <MarkdownBlock>{title}</MarkdownBlock>
        </h2>
    )
}

export const Grid = props => {
    const renderBlock = origBlock => {
        const blockDefaults = {
            imageAlign: 'left',
        }

        const block = {
            ...blockDefaults,
            ...origBlock,
        }

        const blockClasses = classNames('blockElement', props.className, {
            alignCenter: props.align === 'center',
            alignRight: props.align === 'right',
            fourByGridBlock: props.layout === 'fourColumn',
            fiveByGridBlock: props.layout === 'fiveColumn',
            sevenByGridBlock: props.layout === 'sevenColumn',
            imageAlignSide:
                block.image &&
                (block.imageAlign === 'left' || block.imageAlign === 'right'),
            imageAlignTop: block.image && block.imageAlign === 'top',
            imageAlignRight: block.image && block.imageAlign === 'right',
            imageAlignBottom: block.image && block.imageAlign === 'bottom',
            imageAlignLeft: block.image && block.imageAlign === 'left',
            threeByGridBlock: props.layout === 'threeColumn',
            twoByGridBlock: props.layout === 'twoColumn'
        })

        const topLeftImage =
            (block.imageAlign === 'top' || block.imageAlign === 'left') &&
            renderBlockImage(block.image, block.imageAlt)

        const bottomRightImage =
            (block.imageAlign === 'bottom' || block.imageAlign === 'right') &&
            renderBlockImage(block.image, block.imageAlt)

        return (
            <div className={blockClasses} key={block.title}>
                {topLeftImage}
                <div className="blockContent">
                    {renderBlockTitle(block.title)}
                    <MarkdownBlock>{block.content}</MarkdownBlock>
                    {props.whitepaperButton && <div>
                        <Button className="aboutWhitepaperButton" target="_blank" href={'https://uploads-ssl.webflow.com/605b954cee75fc72dfcdf42e/6062c8a1202d848191213859_Wrap%20Protocol%20-%20Whitepaper%20(1).pdf'}>WHITEPAPER</Button>
                    </div>}
                    {props.wraponomicsButton && <div className="pTop">
                        <Button className="wraponomicsButton" target="_blank" href={'https://www.benderlabs.io/wrap-token'}>LEARN MORE ABOUT $WRAP</Button>
                    </div>}
                </div>
                {bottomRightImage}
            </div>
        )
    }

    return (
        <div className="gridBlock">{props.contents.map(renderBlock, this)}</div>
    )
}

Grid.defaultProps = {
    align: 'left',
    contents: [],
    layout: 'twoColumn',
}