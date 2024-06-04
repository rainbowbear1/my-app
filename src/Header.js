import React from 'react'

export default function Header() {
    return (
        <header>
            <div class="logo">
                <h1>SnapFrame</h1>
            </div>
            <div className='links'>
                <div class="link">
                    <a href="/">Main</a>
                </div>
                <div class="link">
                    <a href="">Friends</a>
                </div>
                <div class="link">
                    <a href="/profile">Profile</a>
                </div>
            </div>
        </header>
    )
}
