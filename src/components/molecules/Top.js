import React from 'react';
import './Top.css';

class Top extends React.Component {
    render() {
        return (
            <div>
                <div className="top-message">
                    <h1 className='top-title'>雪丸かるる</h1>
                    <h2>各種SNS</h2>
                    <p><a href='https://twitter.com/kalulu_nya'>Twitter (日本語)</a></p>
                    <p><a href='https://twitter.com/kalulu_nya'>Twitter (English)</a></p>
                    <p><a href='https://www.instagram.com/kalulu_nya/'>Instagram</a></p>
                    <p><a href='http://www.youtube.com/channel/UCUTIT3Kj9mrdyMvR6EEY6IQ?sub_confirmation=1'>YouTube</a></p>
                    <p><a href='https://fantia.jp/fanclubs/65018'>Fantia</a></p>
                    <h2>今までのエイプリルフール</h2>
                    <p>2021年: <a href='/Matome'>まとめサイト</a></p>
                    <p>2022年: <a href='/News'>ネットニュース</a></p>
                    <br/>
                    <br/>
                    <br/>
                    <p>おしゃれなWEBページを作成中です🥺</p>
                </div>
            </div>
        );
    }
}

export default Top