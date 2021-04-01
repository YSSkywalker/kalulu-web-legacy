import React from 'react';
import './App.css';
import { Helmet } from "react-helmet";
// import Header from './components/molecules/Header'
import Matome from './components/molecules/Matome'
import Footer from './components/molecules/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet
        title={'コスプレイヤー暴露まとめ'}
        meta={[
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: `@UshinohiProject` },
          { property: 'og:type', content: 'article' },
          { property: 'og:image', content: 'http://drive.google.com/uc?export=view&id=1mBX7h1u5S3lWW6yc2qgMaqKexDywzIYB' },
          { property: 'og:site_name', content: 'コスプレイヤー暴露まとめ' },
          { property: 'og:title', content: '自称美少女レイヤーの雪丸かるるがヤバいw 高額月収・彼氏画像も！' },
          { property: 'og:description', content: 'こんにちは！コスプレイヤー暴露まとめ案内人です！ 最近、よくTwitterやYouTubeで見かけることが増えてきた 雪丸かるる！！' },
          { property: 'og:url', content: `https://kalulu.fans/Matome` }
        ]}
      />
      <Matome />
      <Footer />
    </div>
  );
}

export default App;
