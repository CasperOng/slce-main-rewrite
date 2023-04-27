import { Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'



function Home() {
  return (
    <Page>
      <section>
        <Text variant="h1">Xiri</Text>
      </section>

      <section>
        <Text >Try to type something!</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>

      <footer>
        <Text>Created by Casper Ong</Text>
        <Text>Hosted on <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a></Text>
        <Text>Licensed under the <a href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank" rel="noopener noreferrer">Mozilla Public License 2.0</a></Text>
      </footer>
    </Page>

  )
}


export default Home
