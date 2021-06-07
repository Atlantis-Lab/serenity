import Document        from 'next/document'
import compose         from 'recompose/compose'
import { withEmotion } from '@atls/next-document-with-emotion'
import { withHelmet }  from '@atls/next-document-with-helmet'

const withProviders = compose(withEmotion(), withHelmet())

export default withProviders(Document)
