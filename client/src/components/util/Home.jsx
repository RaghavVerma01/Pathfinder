import React from 'react'

const Home = () => {
    return (
        <>
            <section>

                <div className='mainSection'>
                    <div class="video-background-container">
                        <video autoPlay muted loop id="background-video">
                            <source src={`/Timeline 1.mp4`} type="video/mp4"/>
                                Your browser does not support the video tag.
                        </video>

                        <div class="video-overlay">
                            <h1>Adventure Awaits – Let Pathfinder Show You the Way</h1>
                            <p>Additional text or a call to action</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
