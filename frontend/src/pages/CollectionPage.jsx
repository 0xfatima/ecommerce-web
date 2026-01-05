import React, { useEffect, useState } from 'react'
import {FaFilter} from 'react-icons/fa'
import FilterSideBar from '../components/Products/FilterSideBar'
import { useRef } from 'react'
import SortOptions from '../components/Products/SortOptions'
import ProductGrid from '../components/Products/ProductGrid'

const CollectionPage = () => {

    const [products, setProducts] = useState([])
    const sideBarRef = useRef(null);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)

    const toggleSideBar = ()=>{
        setIsSideBarOpen(!isSideBarOpen)
    }

    const handlClickOutside = (e)=>{
        //if user clicks outside the sidebar
        if(sideBarRef.current && !sideBarRef.current.contains(e.target)){
            setIsSideBarOpen(false)
        }

    };

    useEffect(()=>{
        // add event listener for if clicked
        document.addEventListener("mousedown", handlClickOutside) 

        // Clean event listener
        return ()=> document.removeEventListener("mousedown", handlClickOutside) 
    },[])

    // to populate products
    useEffect(()=>{
        
        setTimeout(()=>{
            const fetchedProducts = [
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
    setProducts(fetchedProducts)
}, 1000)
    },[])
  return (
    <div className="flex flex-col lg:flex-row">
        {/* mobile filter button */}
        <button onClick={toggleSideBar} className='lg:hidden border p-2 flex justify-center items-center'>
            <FaFilter className='mr-2'/> Filters
        </button>

        {/* filter sidebar */}
        <div ref={sideBarRef} className={`${isSideBarOpen?"translate-x-0":"-translate-x-full"}
            fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform
            duration-300 lg:static lg:translate-x-0 `}>
            <FilterSideBar/>
        </div> 

        <div className='flex-grow p-4'>
            <h2 className='text-2xl uppercase mb-4'>
                All Collection
            </h2>

            {/* sort options */}
            <SortOptions/>


            {/* product grid */}
            <ProductGrid products={products}/>

        </div>
    </div>
  )
}

export default CollectionPage