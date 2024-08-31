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
                            <h1 className='dancing-script-font'>Traverse</h1>
                            <p style={{fontSize:"2rem"}}>Map Out your adventure</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="Hero-section">
                    <h1 id="Main-Head">DEALS FOR THE WEEKEND</h1>
                    <div class='boxes'>
                        <img src="/istock-487516034.jpg" alt="" id='image' />
                        <div id="content">
                            <h3>EXPERIENCE THE NORTHERN LIGHTS</h3>
                            <p id="destination">NORWAY</p>
                            <div id='review'>
                                <p id='review-box'>8.3</p>
                                <p id='greyish-text'>Very good</p>
                                <p>. 119 reviews</p>
                            </div>
                            <div id='price-box'>
                                <p id='greyish-text'>8 Nights</p>
                                <p id='review-box-2'>₹ 2,22,721</p>
                                <p id='original-price'>₹ 1,99,402</p>
                            </div>
                        </div>
                    </div>
                    <div class='boxes'>
                        <img src="/AustraliaBestBeaches__HERO_shutterstock_747984628.jpg" alt="" id='image' />
                        <div id="content">
                            <h3>SUPERDEAL AUSTRALIA</h3>
                            <p id="destination">AUSTRALIA</p>
                            <div id='review'>
                                <p id='review-box'>8.7</p>
                                <p id='greyish-text'>Very good</p>
                                <p>. 143 reviews</p>
                            </div>
                            <div id='price-box'>
                                <p id='greyish-text'>6 Nights</p>
                                <p id='review-box-2'>₹ 2,45,345</p>
                                <p>₹ 2,07,123</p>
                            </div>
                        </div>
                    </div>
                    <div class='boxes'>
                        <img src="/img-canals-in-amsterdam.jpg" alt="" id='image' />
                        <div id="content">
                            <h3>AMSTERDAM</h3>
                            <p id="destination">NETHERLAND</p>
                            <div id='review'>
                                <p id='review-box'>7.4</p>
                                <p id='greyish-text'>Good</p>
                                <p>. 111 reviews</p>
                            </div>
                            <div id='price-box'>
                                <p id='greyish-text'>7 Nights</p>
                                <p id='review-box-2'>₹ 2,13,231</p>
                                <p>₹ 2,45,767</p>
                            </div>
                        </div>
                    </div>
                    <div class='boxes'>
                        <img src="/56828-Dubai.jpg" alt="" id='image' />
                        <div id="content">
                            <h3>LUXURY DUBAI</h3>
                            <p id="destination">DUBAI</p>
                            <div id='review'>
                                <p id='review-box'>9.2</p>
                                <p id='greyish-text'>Excellent</p>
                                <p>. 239 reviews</p>
                            </div>
                            <div id='price-box'>
                                <p id='greyish-text'>5 Nights</p>
                                <p id='review-box-2'>₹ 71,342</p>
                                <p>₹ 57,348</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Hero-section2">
                    <h1 id="Main-Head">Explore India</h1>
                    <div class='boxes'>
                        <img src="/shutterstock_2044050407.jpg" alt="" id='image' />
                        <div id="content">
                            <h3>WINTER KASHMIR</h3>
                            <p id="destination">Kashmir, India</p>
                            <div id='review'>
                                <p id='review-box'>8.3</p>
                                <p id='greyish-text'>Very good</p>
                                <p>. 119 reviews</p>
                            </div>
                            <div id='price-box'>
                                <p id='greyish-text'>4 Nights</p>
                                <p id='review-box-2'>₹ 34,199</p>
                                <p>₹ 24,999</p>
                            </div>
                        </div>
                    </div>
                    <div class='boxes'>
                        <img src="/z1tgc3i2qx25wrw1o5ijvtpf024x_1575445399_pangong2.jpg" alt="" id='image' />
                        <div id="content">
                            <h3>LADAKH</h3>
                            <p id="destination">Ladakh, India</p>
                            <div id='review'>
                                <p id='review-box'>8.7</p>
                                <p id='greyish-text'>Very good</p>
                                <p>. 143 reviews</p>
                            </div>
                            <div id='price-box'>
                                <p id='greyish-text'>8 Nights</p>
                                <p id='review-box-2'>₹ 39,999</p>
                                <p>₹ 29,999</p>
                            </div>
                        </div>
                    </div>
                    <div class='boxes'>
                        <img src="/zostel-kasol-katagla-20230509095735.jpg" alt="" id='image' />
                        <div id="content">
                            <h3>KASOL</h3>
                            <p id="destination">Himachal Pradesh</p>
                            <div id='review'>
                                <p id='review-box'>7.4</p>
                                <p id='greyish-text'>Good</p>
                                <p>. 111 reviews</p>
                            </div>
                            <div id='price-box'>
                                <p id='greyish-text'>4 Nights</p>
                                <p id='review-box-2'>₹ 19,999</p>
                                <p>₹ 13,799</p>
                            </div>
                        </div>
                    </div>
                    <div class='boxes'>
                        <img src="/image.jpg" alt="" id='image' />
                        <div id="content">
                            <h3>Goa</h3>
                            <p id="destination">Goa,India</p>
                            <div id='review'>
                                <p id='review-box'>9.2</p>
                                <p id='greyish-text'>Excellent</p>
                                <p>. 239 reviews</p>
                            </div>
                            <div id='price-box'>
                                <p id='greyish-text'>5 Nights</p>
                                <p id='review-box-2'>₹ 34,199</p>
                                <p>₹ 26,999</p>
                            </div>
                        </div>
                    </div>
                </div>
            <footer>
                <div class="foot-panel1">
                    Back to Top
                </div>

                <div class="foot-panel2">
                    <ul>
                        <p>SUPPORT</p>
                        <a href="">Contact Us</a>
                        <a href="">Help</a>
                        <a href="">FAQ</a>
                    </ul>
                    <ul>
                        <p>SUPPORT</p>
                        <a href="">Contact Us</a>
                        <a href="">Help</a>
                        <a href="">FAQ</a>
                    </ul>
                    <ul>
                        <p>SUPPORT</p>
                        <a href="">Contact Us</a>
                        <a href="">Help</a>
                        <a href="">FAQ</a>
                    </ul>
                    <ul>
                        <p>SUPPORT</p>
                        <a href="">Contact Us</a>
                        <a href="">Help</a>
                        <a href="">FAQ</a>
                    </ul>
                </div>

                <div class="foot-panel3">
                    <div class="logo">
                        <svg width="150.19001907880204" height="50.7062622070313" viewBox="0 0 217.99918455987802 146" class="looka-1j8o68f"><defs id="SvgjsDefs6114"><linearGradient id="SvgjsLinearGradient6121"><stop id="SvgjsStop6122" stop-color="#2d388a" offset="0"></stop><stop id="SvgjsStop6123" stop-color="#00aeef" offset="1"></stop></linearGradient></defs><g id="SvgjsG6115" featurekey="symbolFeature-0" transform="matrix(0.09523810138928297,0,0,0.09523810138928297,60.60000007104622,-3.676191658218088)" fill="url(#SvgjsLinearGradient6121)"><path xmlns="http://www.w3.org/2000/svg" fill="url(#SvgjsLinearGradient6121)" d="M902 920.6H146c-8.7 0-15.8-7-15.8-15.7s7-15.7 15.8-15.7h756c8.7 0 15.7 7.1 15.7 15.7 0 8.7-7 15.7-15.7 15.7z"></path><path xmlns="http://www.w3.org/2000/svg" fill="url(#SvgjsLinearGradient6121)" d="M902 920.6H146c-8.7 0-15.8-7-15.8-15.7s7-15.7 15.8-15.7h756c8.7 0 15.7 7.1 15.7 15.7 0 8.7-7 15.7-15.7 15.7zM902 983.6H146c-8.7 0-15.8-7.1-15.8-15.7 0-8.7 7-15.7 15.8-15.7h756c8.7 0 15.7 7 15.7 15.7 0 8.6-7 15.7-15.7 15.7zM854.6 70c2.7 0 5.3 0.2 8 0.5 16.7 2.1 31.7 10.6 42 23.9 10.3 13.4 14.9 29.9 12.8 46.7-3.9 31.5-30.9 55.3-62.5 55.3-2.6 0-5.3-0.2-8-0.5-16.7-2.1-31.6-10.6-42-23.9-10.3-13.3-14.9-29.9-12.8-46.6 4-31.6 30.8-55.4 62.5-55.4m0-31.4c-46.9 0-87.6 34.9-93.6 82.7-6.5 51.8 30.2 99.1 82 105.6 4 0.5 8 0.7 11.9 0.7 46.9 0 87.6-34.9 93.6-82.7 6.5-51.8-30.2-99-82-105.6-4-0.4-8-0.7-11.9-0.7zM222.3 167.3c79.2 7.4 133 30 157.1 66.7 20.1 30.6 16.4 66.6 11.3 88.1h-40V259h-63v-63h-46.2l-19.2-28.7m-60.6-34.2l63 94.5h31.5v63h63v63.1h94.5c0.1-0.1 97.8-220.6-252-220.6z"></path><path xmlns="http://www.w3.org/2000/svg" fill="url(#SvgjsLinearGradient6121)" d="M250.2 362.2c47.3 0 77.2 29.5 92.1 49.6l-39.1 38.4-22.4-22.5-22.3-22.3-22.3 22.3L214 450l-22.3-22.3-19.4-19.5-21.9 16.6-26.2 19.8L97 436c56.9-48.4 109.3-73.8 153.2-73.8m0-31.5c-53.2 0-123.9 28.7-214.5 119.3l94.5 29.6 39.2-29.6 44.6 44.5 44.5-44.5 44.6 44.5 79.2-77.8c-0.1-0.1-39.9-86-132.1-86zM532.9 421.5c40.6 0 71.3 30.1 91.5 89.7h-7.7l-22.3-22.3-9.2-9.3h-35.5l-6.9-14-9.9-19.9-22.2 2.7-19.6 2.4-6.3-18c12.6-5.7 29.9-11.3 48.1-11.3m0-31.5c-46.9 0-86.8 28-86.8 28l23.5 67.3 44.9-5.6 15.6 31.5h42l31.5 31.5h62.1C638.1 420 581.7 390 532.9 390zM798.4 385.4c10.7 0 22.1 0.9 34.4 2.6l-1.6 3.7-35.2 13-13.2 4.8-5.2 12.9-7.2 17.7-10-0.1-15.3-0.2-9.5 12-22.1 27.7h-15.9c1.3-19.7 6.5-46.4 23.4-65.8 16.4-18.7 42.4-28.3 77.4-28.3m0-31.5c-153.6 0-131.5 157.2-131.5 157.2h61.8l31.5-39.6 31.5 0.2 15.1-37.5 47.9-17.7 22.4-51.7c-30.4-7.5-56.4-10.9-78.7-10.9z"></path><path xmlns="http://www.w3.org/2000/svg" fill="url(#SvgjsLinearGradient6121)" d="M842.6 492.1c25.4 0 54.5 14.2 85.2 41.7l-12.3 6.2-21.7-7.4-15.2-5.3-13.2 9.3-12.8 9-19.7-10.7-17.5-9.5-16 11.7-16.1 11.7-13.7-12.2c13.8-18.8 39-44.5 73-44.5m0-31.5c-74.7 0-113.9 82-113.9 82l52.5 46.6 36.7-26.6 36.8 20 28.9-20.3 34.1 11.8 63-31.5c-54.5-61.5-100.7-82-138.1-82zM286 530.1c12.7 0 24.2 1.8 33.2 4v40h-63v63h-63v46.2l-28.9 19.3c8.3-88.7 38.1-172.5 121.7-172.5m0-31.5c-65.1 0-155.8 40.2-155.8 264.6l94.5-63.1v-31.5h63v-63h63v-94.5c0 0.1-28.3-12.5-64.7-12.5zM730.5 624.6c83.6 0 113.4 83.9 121.6 172.4l-28.9-19.2v-46.2h-63v-63.1h-63v-40c9-2.1 20.6-3.9 33.3-3.9m0-31.5c-36.4 0-64.7 12.6-64.7 12.6v94.4h63v63.1h63v31.5l94.5 63c-0.1-224.4-90.8-264.6-155.8-264.6zM643.6 198.2l-15.7 29.5h-56.7v63h-63v63.1h-28.7c-6.5-21.5-13.2-58.9 6-90.1 22.7-36.7 76.8-59 158.1-65.5m53.6-33.5c-349.8 0-239.5 220.5-239.5 220.5h82v-63h63v-63.1h44.1l50.4-94.4zM520.2 787c13.8-29.3 40.4-77.8 83.6-127.9-18.2 56.2-32.5 141.4-32.5 261.5h31.5c-6.5-213.9 60.5-321.1 61.2-322.3 4.2-6.6 2.9-15.3-3.1-20.4-6-5-14.7-5.1-20.6 0-71.3 61.7-114.8 129.9-138.6 175.4l6.5 9.8 12 23.9z"></path><path xmlns="http://www.w3.org/2000/svg" fill="url(#SvgjsLinearGradient6121)" d="M400.2 920.6h31.9c12.2-80.7 24-212.9 4.8-363.8 28.2 79.6 61.5 201 71.3 363.8h31.5c-19.5-329.5-124.1-489.9-128.6-496.9-4.2-6.4-12.5-8.8-19.5-5.8-7 3.1-10.8 10.8-9 18.2 49.1 200.5 33.1 385.7 17.6 484.5z"></path></g><g id="SvgjsG6116" featurekey="nameLeftFeature-0" transform="matrix(2.39364965991916,0,0,2.39364965991916,-2.393365598697507,98.0671619076993)" fill="#000000"><path d="M3.54 17.82 c0.02 0.62 0.02 1.24 0.04 1.86 c0 0.28 0.02 0.32 0.3 0.32 l1.8 0 c0.38 0 0.3 -0.64 0.28 -0.98 l0.06 -11.2 c0 -0.3 0.1 -0.4 0.5 -0.4 l1.76 0 c0.42 0 0.32 -0.72 0.32 -1.22 c0 -0.44 0.16 -1.2 -0.32 -1.2 c-0.34 0 -3.6 0 -4.94 0.02 c-0.66 0 -1.2 -0.02 -1.86 -0.02 c-0.5 0 -0.48 0.4 -0.48 1.28 c0 0.56 -0.02 1.12 0.46 1.12 c0.28 0 1.42 0 1.74 0.02 c0.2 0 0.34 0.06 0.38 0.28 c0 0.06 0.02 0.12 0.02 0.18 c0 1.44 -0.1 8.14 -0.06 9.94 z M13.100000000000001 18.5 c0 -0.52 0 -3.8 0.02 -4.06 c0.02 -0.06 0.06 -0.18 0.14 -0.18 s0.12 0.04 0.14 0.1 c0.8 1.56 1.5 3.12 2.22 4.64 c0.1 0.22 0.32 0.86 0.38 0.92 c0.08 0.12 0.22 0.08 0.34 0.08 l2.2 0.02 c0.26 0 0.32 -0.16 0.26 -0.38 c-0.16 -0.6 -1.3 -2.72 -1.56 -3.24 c-0.18 -0.4 -1.38 -2.72 -1.42 -2.9 c-0.04 -0.08 0.26 -0.22 0.3 -0.28 c0.96 -0.86 1.82 -1.74 2 -3.08 c0.2 -1.32 -0.1 -2.76 -0.96 -3.82 c-0.66 -0.78 -1.52 -1.24 -2.54 -1.3 c-0.62 -0.04 -1.22 0.02 -1.84 0 c-0.54 -0.02 -0.92 -0.02 -1.6 -0.02 c-0.32 0 -0.52 0.18 -0.54 0.52 l0 0.24 c-0.04 1.54 0 3.08 0.02 4.6 c0 2.32 -0.04 8.44 -0.04 9.32 c0 0.26 0.04 0.32 0.28 0.32 c0.14 0 0.3 0.02 0.44 0.02 c0.56 0 0.9 -0.02 1.48 -0.02 c0.44 0 0.28 -0.72 0.28 -1.5 z M13.100000000000001 10.7 l0.02 -2.02 c0.02 -0.3 -0.08 -0.9 0.2 -1.12 c0.38 -0.28 1.16 0 1.5 0.24 c1 0.68 0.92 2.36 0.38 3.3 c-0.26 0.44 -0.7 0.7 -1.2 0.84 c-0.3 0.08 -0.86 0.18 -0.88 -0.3 c0 -0.32 -0.02 -0.94 -0.02 -0.94 z M22.66 19.84 c0.06 0.02 0.24 0.02 0.42 0.02 c0.4 0 0.52 -1.44 0.56 -1.74 c0.02 -0.24 0.08 -0.26 0.28 -0.3 c1 -0.12 1.5 -0.04 2.5 -0.02 c0.22 0 0.34 0.1 0.4 0.28 l0.14 0.46 c0.12 0.34 0.22 0.76 0.34 1.1 c0.08 0.24 0.1 0.22 0.34 0.22 c0.32 0 1.48 0 1.82 -0.02 c0.46 0 0.14 -0.94 0.08 -1.1 c-0.18 -0.56 -0.22 -1.14 -0.4 -1.7 c-0.08 -0.24 -2.36 -11.06 -2.46 -11.66 c-0.14 -0.36 -0.02 -0.38 -0.34 -0.38 c-0.68 0 -1.4 0.04 -2.1 0 c-0.28 0 -0.26 0.08 -0.3 0.38 c-0.04 0.28 -0.76 3.46 -1.04 4.78 c-0.36 1.66 -0.68 3.26 -1.08 4.9 c-0.14 0.58 -1.1 4.76 -0.98 4.78 c0.06 0.04 0.16 0.02 0.24 0.02 c0.5 0 0.96 0 1.58 -0.02 z M25.28 15.3 l-0.42 0 c-0.56 0 -0.58 0 -0.44 -0.58 c0.1 -0.44 0.64 -2.82 0.76 -3.4 c0.02 -0.04 0.06 -0.08 0.08 -0.08 c0.04 0 0.08 0.04 0.1 0.06 c0.08 0.24 0.16 0.84 0.24 1.08 c0.18 0.76 0.3 1.4 0.48 2.22 c0.18 0.72 0.1 0.72 -0.26 0.72 c-0.18 0 -0.36 -0.02 -0.54 -0.02 z M36.080000000000005 20.02 c0.3 0 1.4 0.02 1.62 -0.02 c0.14 -0.04 0.22 -0.4 0.26 -0.52 c0.12 -0.38 0.2 -0.78 0.3 -1.16 c0.22 -1 2.44 -9.4 3.22 -12.54 c0.04 -0.14 0.08 -0.3 0.04 -0.44 c-0.06 -0.3 -0.24 -0.34 -0.48 -0.34 c-0.46 0.02 -0.92 0 -1.38 0 c-0.52 0 -0.72 0.06 -0.88 0.64 c-0.78 2.68 -1.3 5.88 -2.02 8.6 l-0.12 0.32 c0 0.02 -0.08 0 -0.08 0 c-0.04 -0.1 -0.1 -0.18 -0.12 -0.28 c-0.72 -2.86 -1.9 -8.52 -2.1 -9.06 c-0.12 -0.32 -0.42 -0.22 -0.7 -0.22 c-0.56 0 -1.08 0.02 -1.62 0.02 c-0.2 0.02 -0.34 0.1 -0.32 0.3 c0 0.16 0.22 1.04 0.26 1.28 l0.22 0.84 c0.14 0.64 0.34 1.44 0.48 2.06 c0.76 3.18 1.58 6.36 2.48 9.5 c0.08 0.28 0.14 0.76 0.34 0.92 c0.16 0.14 0.42 0.08 0.6 0.1 z"></path></g><g id="SvgjsG6117" featurekey="nameRightFeature-0" transform="matrix(2.482405958710321,0,0,2.482405958710321,101.46613424564424,95.86704183049999)" fill="#137dc5"><path d="M10.01 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z M20.478471875 20 l-3.6719 -6.2109 l-0.84961 0 l0 6.2109 l-2.9297 0 l0 -14.111 l5.1172 0 c3.1934 0 4.541 1.8848 4.541 4.2188 c0 1.8945 -1.0742 3.125 -2.9883 3.5352 l4.248 6.3574 l-3.4668 0 z M15.957071875 8.32 l0 3.3691 l1.7285 0 c1.5625 0 2.1973 -0.66406 2.1973 -1.6797 c0 -1.0059 -0.63477 -1.6895 -2.1973 -1.6895 l-1.7285 0 z M30.781278125 20.19531 c-3.0273 0 -5.3906 -1.4551 -5.8203 -4.1016 l3.0273 -0.69336 c0.19531 1.582 1.3574 2.4023 2.9102 2.4023 c1.1914 0 2.1387 -0.52734 2.1289 -1.7188 c-0.0097656 -1.3281 -1.5723 -1.748 -3.291 -2.2754 c-2.0703 -0.64453 -4.2871 -1.4063 -4.2871 -4.0039 c0 -2.627 2.1484 -4.1113 4.9805 -4.1113 c2.4805 0 4.9805 1.0059 5.5469 3.7109 l-2.832 0.70313 c-0.26367 -1.4063 -1.2109 -2.0215 -2.5391 -2.0215 c-1.1816 0 -2.1875 0.48828 -2.1875 1.6504 c0 1.084 1.3867 1.4453 2.9883 1.9238 c2.1289 0.64453 4.6484 1.4648 4.6484 4.2773 c0 2.998 -2.5098 4.2578 -5.2734 4.2578 z M46.94359375 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z"></path></g></svg>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home
