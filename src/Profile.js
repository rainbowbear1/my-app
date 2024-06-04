import React from 'react'

export default function Profile(props) {
    return (
        <div>
            <div className='profile'>
                <div className='pfppos'>
                    <div className='pfp'>
                        <div>
                            <img src='pfp.jpg' width={200} />
                        </div>
                        <div>
                            <p id='name'>{props.name}</p>
                            <p id='login'>{props.login}</p>
                        </div>
                    </div>
                </div>
                <div className='options'>
                    <a href="">Friends</a>
                    <a href="">Following</a>
                    <a href="">Message</a>
                    <a href="">More...</a>
                </div>
                <div className='description'>
                    <p>Human at Liberty</p>
                    <p>Lives in Queens, NY</p>
                    <p>From the USA</p>
                </div>
            </div>
        </div>
    )
}
