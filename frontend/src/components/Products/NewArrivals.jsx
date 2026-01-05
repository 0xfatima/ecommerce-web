import React, { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const NewArrivals = () => {

    const scrollRef =useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [canScrollLeft, setCanScrollLeft] = useState(false)

    const newArrivals = [
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
    },{
        _id :"5",
        name:"stylish jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=5",
                altText:"Stylish jacket"
            }
        ]
    },{
        _id :"6",
        name:"stylish jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=6",
                altText:"Stylish jacket"
            }
        ]
    },{
        _id :"7",
        name:"stylish jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=7",
                altText:"Stylish jacket"
            }
        ]
    },{
        _id :"8",
        name:"stylish jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=8",
                altText:"Stylish jacket"
            }
        ]
    }
    
    ]

    const handleOnMouseDown=(e)=>{
        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.offsetLeft)
    }

    const handleOnMouseMove=(e)=>{
        if(!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft =scrollLeft - walk
    };

    const handleOnMouseUpOrLeave = ()=>{
        setIsDragging(false)
    }

    const scroll=(direction)=>{
        const scrollAmount = direction ==='left'?-300:300;
        scrollRef.current.scrollBy({left: scrollAmount, behaviour:"smooth"})
    }

    const updateScrollButtons=()=>{
        const container = scrollRef.current;
        if(container){
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth>leftScroll+container.clientWidth;
            setCanScrollLeft(leftScroll>0);
            setCanScrollRight(rightScrollable)
        }

        // console.log({
        //     scrollLeft: container.scrollLeft,
        //     clientWidth: container.clientWidth,
        //     containerScrollWidth: container.scrollWidth,
        //     offset: scrollRef.current.offsetLeft
        // });
        
    }


    useEffect(()=>{
        const container = scrollRef.current
        if(container){
            container.addEventListener("scroll", updateScrollButtons);
            updateScrollButtons();
            return container.removeEventListener("scroll", updateScrollButtons)
        }
    },[])
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto text-center mb-10 relative'>
            <h2 className='text-3xl font-bold mb-3'>Explore new arrivals</h2>
            <p className='text-lg text-gray-600 mb-8'>
                Discover the latest styles straight off the runway, feshly added to keep your 
                wardrobe on the cutting edge of fashion.
            </p>
            {/* scroll buttons */}
            <div className='absolute right-0 bottom-[-30px]  flex space-x-2 '>
                <button onClick={()=>scroll("left")} className={`p-2 rounded border
                  cursor-pointer ${canScrollLeft?"bg-white text-black":"bg-gray-200 text-gray-400 cursor-not-allowed"}`} disabled={!canScrollLeft}>
                    <FiChevronLeft className='text-2xl'/>
                </button>
                <button onClick={()=>scroll("right")} className={`p-2 rounded border
                cursor-pointer ${canScrollRight?"bg-white text-black":"bg-gray-200 text-gray-400 cursor-not-allowed"}`} disabled={!canScrollRight}>
                    <FiChevronRight className='text-2xl'/>
                </button>
            </div>
            
        </div>
        {/* scrollable content  */}
        <div ref={scrollRef} 
        onMouseDown={handleOnMouseDown}
        onMouseMove={handleOnMouseMove}
        onMouseUp={handleOnMouseUpOrLeave}
        onMouseLeave={handleOnMouseUpOrLeave}

        className={`container mx-auto overflow-x-scroll  flex space-x-6 relative ${isDragging?"cursor-grabbing":"cursor-grab"}`}>
            {newArrivals.map((product)=>(
                <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                    
                    <img 
                    src={product.images[0].url} 
                    alt={product.images[0].altText || product.name}
                    draggable="false"
                    className='w-full h-[500px] object-cover rounded-lg'/>

                    <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md
                    text-white p-4 rounded-b-lg'>
                        <Link to={`/product/${product._id}`} className="block" >
                        <h4 className='font-medium'>
                            {product.name}
                        </h4>
                        <p className='mt-1'>
                            {product.price}
                        </p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default NewArrivals