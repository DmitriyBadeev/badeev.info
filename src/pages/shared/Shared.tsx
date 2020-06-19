import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const Shared: React.FC = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>

    )
}

export default Shared