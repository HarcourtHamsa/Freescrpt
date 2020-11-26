import React, { lazy, Suspense } from 'react'

import logo from './img/me.png'
import './App.scss'
import ErrorBoundary from './ErrorBoundary'

const Navbar = lazy(() => import('./components/Navbar'))
const Card = lazy(() => import('./components/Card'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <main>
            <img src={logo} alt="emoji of hamsa harcourt" width='200' height='200' />
            <h1 id="hero-text">Freescript</h1>
            <p>I’m a frontend engineer and technical writer based in the Nigeria.
          I create great user experiences using tools like HTML 5, CSS 3 <a href="https://sass-lang.com/">Sass</a>,
          <a href='https://reactjs.org/'>React</a>, <a href="https://gulpjs.com/docs/en/getting-started/quick-start/">Gulp</a>,
          <a href='https://nodejs.org/en/'>Node.js</a> </p>

            <details open={false}>
              <summary>
                Let's connect
          </summary>
              <a href="https://www.linkedin.com/in/hamsa-harcourt-2b10131b6/">Linkedin</a>
              <a href="https://github.com/HarcourtHamsa">Github</a>
              <a href="https://twitter.com/freescrpt">Twitter</a>
              <a href="https://www.instagram.com/freescrpt/">Instagram</a>

            </details>
          </main>

          <section>
            <h2>About Me</h2>
            <p>
              My name is Hamsa Harcourt, also called Freescript. I'm a Frontend Engineer enthusiastic about accessibility on the web. I am currently an author at <a href="https://www.a11yproject.com/">a11yProject.com</a> where I
          document my research about accessibility on the web. Also, I run a <a href="https://harcourt.hashnode.dev/">blog</a> where I write about topics ranging from tech, to books,
          to life in general. When I'm not coding you can find me watching tons of animes and playing football.
       </p>
          </section>

          <section>
            <div id="info">
              <p>💡</p>
              <p>I am open to remote jobs and I am always interested in fun projects and activities</p>
            </div>
          </section>

          <section>
            <h2>Featured Articles</h2>
            <div id="row">
              <Card title="Introduction to the Web Accessibility Initiative" date="October 2, 2020" url="https://www.a11yproject.com/posts/2020-10-02-introduction-to-wai/" />
              <Card title="Create accessible forms" date="September 16, 2020" url="https://www.a11yproject.com/posts/2020-09-19-how-to-write-accessible-forms/" />
            </div>
          </section>


          <section>
            <h2>Get In Touch</h2>
            <div>
              <p>I am always interested in fun projects and activities,
so feel free to drop me a line<a href="mailto:hamsaharcourt@gmail.com">hamsaharcourt(@)gmail(dot)com</a></p>
              <a href="mailto:hamsaharcourt@gmail.com" style={{ margin: 0 }}><button>Say hello</button></a>
            </div>
          </section>

          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App