import React from 'react'
import './home.css'
const Home = () => {
    return (
        <section className='home' id='home'>
            <div className='home__container container'>
                <div className='home__content'>
                    <span className="home__subtitle">Welcome to Last Mug Coffee!</span>
                    <h1 className="home__title">
                        Discover our best coffee of the town
                    </h1>
                    <p className="home__description">There are many varieties of passeges available but the majority have suffered alteration in some form by injected humor or randomised words.</p>

                    <div className='home__btns'>
                        <a href="#menu" className='btn'> Check our Menu</a>
                        <a href="#menu" className='btn home__btn'>Book table</a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home