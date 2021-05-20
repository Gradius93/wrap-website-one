import React from 'react'
import classNames from 'classnames'
import { MarkdownBlock } from '../MarkdownBlock'

const renderBlockImage = (image, imageLink, imageAlt) => {
    if (!image) {
        return null
    }

    return (
        <div className="blockImage">
            {imageLink ? (
                <a href={imageLink}>
                    <img src={image} alt={imageAlt} />
                </a>
            ) : (
                <img src={image} alt={imageAlt} />
            )}
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
            imageAlignSide:
                block.image &&
                (block.imageAlign === 'left' || block.imageAlign === 'right'),
            imageAlignTop: block.image && block.imageAlign === 'top',
            imageAlignRight: block.image && block.imageAlign === 'right',
            imageAlignBottom: block.image && block.imageAlign === 'bottom',
            imageAlignLeft: block.image && block.imageAlign === 'left',
            threeByGridBlock: props.layout === 'threeColumn',
            twoByGridBlock: props.layout === 'twoColumn',
        })

        const topLeftImage =
            (block.imageAlign === 'top' || block.imageAlign === 'left') &&
            renderBlockImage(block.image, block.imageLink, block.imageAlt)

        const bottomRightImage =
            (block.imageAlign === 'bottom' || block.imageAlign === 'right') &&
            renderBlockImage(block.image, block.imageLink, block.imageAlt)

        return (
            <div className={blockClasses} key={block.title}>
                {topLeftImage}
                <div className="blockContent">
                    {renderBlockTitle(block.title)}
                    <MarkdownBlock>{block.content}</MarkdownBlock>
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