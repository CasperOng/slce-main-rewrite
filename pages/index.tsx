import { Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'



function Home() {
  return (
    <Page>
      <link rel="stylesheet" type="text/css" href="./styles.css" />
      <section>
        <Text variant="h1">Xiri</Text> 
      </section>

      <section>
        <Text >試著輸入一些東西！</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>

      <footer>
        <Text>Hosted on <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a></Text>
        <Text>Licensed under the <a href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank" rel="noopener noreferrer">Mozilla Public License 2.0</a></Text>
        <Text>App icon was made by <a href="https://www.flaticon.com/authors/juicy-fish" target="_blank" rel="noopener noreferrer">juicy_fish</a></Text>
      </footer>
    </Page>

  )
}


export default Home
