import React from 'react';
import './Top.css';

class Top extends React.Component {
    render() {
        return (
            <div>
                <div className="top-message">
                    <h1 className='top-title'>雪丸かるる</h1>
                    <h2>今までのエイプリルフール</h2>
                    <p>2021年: <a href='/Matome'>まとめサイト</a></p>
                    <p>2022年: <a href='/News'>ネットニュース</a></p>
                </div>
            </div>
        );
    }
}

export default Top