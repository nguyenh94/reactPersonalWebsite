import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import About from '@components/About'
import Projects from '@components/Projects'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Huong Nguyen's Personal Site</title>
      </Head>

      <main>
        <Nav about="About" projects="Projects" about_link="#about" projects_link="#projects" />
        <Header statement="Hello, my name is" name="Huong Bao Nguyen" />
        <About about_link="about" />
        <Projects projects_link="projects" />
      </main>

      <Footer />
    </div>
  )
}
