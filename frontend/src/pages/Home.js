import React,{useState,useEffect} from 'react'
import Cardscg from '../components/Cardscg'
import CgDiv from '../components/CgDiv'
import ProductsC from '../components/ProductsC'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'


const Home = () => {
 
    return (
        <>
        <Helmet>
            <title>Bhai Chara.pk</title>
        </Helmet>
             <div>
                 <div className="cards">
                         <Cardscg title='Mobiles'/>
                         <Cardscg title='Cars'/>
                         {/* <Cardscg title='Accessoires'/>                 */}
                 </div>
                <CgDiv/>
                <ProductsC/>
        </div>
        </>
    )
}

export default Home
