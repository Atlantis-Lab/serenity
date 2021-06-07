import Document            from 'next/document'
import { extractCritical } from '@emotion/server'
import { createElement }   from 'react'

export default class EmailDocument extends Document {
  static async getInitialProps({ renderPage }: any): Promise<any> {
    const page = renderPage()
    const styles = extractCritical(page.html)

    const html = page.html
      .replace('<mjml>', '')
      .replace('</mjml>', '')
      .replace('<mj-head>', `<mj-head><mj-style>${styles.css}</mj-style>`)

    return {
      html,
    }
  }

  render() {
    const { html } = this.props as any

    return createElement('mjml', {
      dangerouslySetInnerHTML: { __html: html },
    })
  }
}
