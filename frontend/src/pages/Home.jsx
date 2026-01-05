import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollections from '../components/Products/FeaturedCollections'
import FeatureSection from '../components/Products/FeatureSection'


const placeholderProducts = [
        {
        _id :"1",
        name:"stylish jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=1",
                altText:"Stylish jacket"
            }
        ]
    },
    {
        _id :"2",
        name:"stylish jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=2",
                altText:"Stylish jacket"
            }
        ]
    },{
        _id :"3",
        name:"stylish jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=3",
                altText:"Stylish jacket"
            }
        ]
    },{
        _id :"4",
        name:"stylish jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=4",
                altText:"Stylish jacket"
            }
        ]
    },
]

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrivals/>

        {/* Best sellers */}
        <h2 className="text-3xl text-center font-bold mb-4 ">
            Best Seller
        </h2>
        <ProductDetails/>
        <div className='container mx-auto'>
            <h2 className="text-3xl text-center font-bold mb-4">
                    Top Wears for Women
            </h2>
            <ProductGrid products={placeholderProducts}/>
        </div>
        <FeaturedCollections/>
        <FeatureSection/>
    </div>
  )
}

export default Home