import React               from 'react'
import Document            from 'next/document'
import compose             from 'recompose/compose'
import { extractCritical } from '@emotion/server'
import { withHelmet }      from '@atls/next-document-with-helmet'

export const withEmotion = () => (TargetComponent) =>
  class WithEmotion extends TargetComponent {
    static async getInitialProps(context) {
      const props = await super.getInitialProps(context)

      const { css, ids } = extractCritical(props.html)

      props.styles.push(
        <style
          key='emotion'
          data-emotion-css={ids.join(' ')}
          dangerouslySetInnerHTML={{ __html: css }}
        />
      )

      return props
    }

    static renderDocument(...args) {
      // @ts-ignore
      return Document.renderDocument(...args)
    }
  }

const withProviders = compose(withEmotion(), withHelmet())

export default withProviders(Document)
