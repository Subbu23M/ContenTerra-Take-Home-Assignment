import React from 'react';
import {decode} from 'html-entities';

const MapData = (props) => {
    // Object Destructuring - ES6
    const{data} = props;

    return(
        <>
            <div className='container'>

                <div className='row card-main-two'>

                    {/* Embed Expression */}
                    {
                        data.map((ele,i) => {
                            // Object Destructuring - ES6
                            const{title,selftext_html,url,score} = ele.data;
                            // console.log(selftext_html);

                            return(
                                <div className='col-lg-5 mx-auto my-2 card-body' key={i}>
                                    <h4 className='text-dark font-weight-bold'>
                                        {title}
                                    </h4>

                                    <p className='lead' dangerouslySetInnerHTML= {{ __html: decode(selftext_html)}}/>

                                    <a 
                                        href={url}
                                        target='_blank'
                                    >
                                        URL : Web URL Address
                                    </a>

                                    <h5>
                                        Score - {score}
                                    </h5>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default MapData;