import React from "react";

import Promo from 'modules/Promo';
import Peer from 'modules/Peer';
import Platform from 'modules/Platform';
import Marketplace from 'modules/Marketplace';
import Solutions from 'modules/Solutions';
import What from 'modules/What';
import Case from 'modules/Case';
import Team from 'modules/Team';
import Partners from 'modules/Partners';
import Faq from 'modules/Faq';
import Stay from 'modules/Stay';
import Footer from 'modules/Footer';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import 'styles/App.css';

const IndexPage = () => (
  <Layout> 
    {(lang, setLang) => (
      <>
        <SEO 
          lang={lang.name.toLowerCase()} 
          title={'seo.title'} 
          description={'seo.description'} 
        />
        <main>
          <Promo activeLang={lang} changeLang={setLang} /> 
          <Peer />
          <Platform />
          <Marketplace />
          <Solutions />
          <What />
          <Case />
          <Team />
          <Partners />
          <Faq />
          <Stay />
          <Footer activeLang={lang} changeLang={setLang} />
        </main>
      </>
    )}
  </Layout>
)

export default IndexPage;
