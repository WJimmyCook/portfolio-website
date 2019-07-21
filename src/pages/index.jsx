import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Jimmy Cook.
        </BigTitle>
        <Subtitle>I create software for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Ultimate 531"
            link="https://ultimate531.com"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A niche fitness app based on the 5/3/1 weightlifting program.
          </ProjectCard>
          <ProjectCard
            title="React Native Number Input"
            link="https://www.github.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Coming soon
          </ProjectCard>
          <ProjectCard
            title="Smart TDEE"
            link="https://www.github.com"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Coming soon
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>I'm a software developer with a love for all things JavaScript. React Native</AboutSub>
        </AboutHero>
        <AboutDesc>
          Prior to teaching myself to create software, I spent over 4 years as a professional online poker poker player.
          In-between poker and learning to code I spent a couple years working as a contractor in Afghanistan including
          on the Blast Gauge DARPA program.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:wjimmycook@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/WJimmyCook">GitHub</a> &{' '}
            <a href="https://www.linkedin.com/in/jimmy-cook/">Linkedin</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 by Jimmy Cook. </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
