import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import ProductGrid from './ProductGrid'
const selectedProduct = {
        name:"stylish jacket",
        price:20,
        originalPrice:40,
        description:"best sellnig one",
        brand:'Fashion',
        material:'Leather',
        sizes:['S', 'M', 'L', 'XL'],
        colors:["Red", "Black"],
        images:[
            {
                url:'https://picsum.photos/500/500?random=1',
                altText:"stylish jacket 1"
            },
            {
                url:'https://picsum.photos/500/500?random=2',
                altText:"stylish jacket 2"
            },
        ]
    }

const similarProducts = [
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
const ProductDetails = () => {

    const [mainImage, setMainImage] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [isCartButtonDisabled, setIsCartButtonDisabled] = useState(false)

    useEffect(()=>{
        if(selectedProduct?.images?.length>0){
            setMainImage(selectedProduct.images[0].url)
        }
    }, [selectedProduct])

    const handleQuantityChange = (action)=>{
        if(action ==="plus") setQuantity((prev)=>prev+1)
        if(action ==="minus" && quantity>1) setQuantity((prev)=>prev-1)
    }

    const handleAddToCart = ()=>{
        if(!selectedColor || !selectedSize){
            toast.error("please select size and color.", {duration:'1000'})
            return
        }
        setIsCartButtonDisabled(true)

        setTimeout(() => {
            toast.success("Product added to cart",{
                duration:'1000'
            })
        });
        setIsCartButtonDisabled(false)
    }
  return (
    <div className='p-6'> 
        <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg '>
            <div className="flex flex-col md:flex-row">

                {/* left thumbnails */}
                <div className="hidden md:flex flex-col space-y-4 mr-6 ">
                    {selectedProduct.images.map((image, index)=>(
                        <img key={index} 
                        src={image.url} 
                        alt={image.altText ||  `Thumbnail ${index}`} 
                        className={`w-20 h-20 object-cover rounded-lg cursor-pointer border 
                            ${mainImage === image.url? "border-r-black":"border-gray-300"}`}
                        onClick={()=>setMainImage(image.url)}/>
                    ))}
                </div>

                {/* Main image */}
                <div className='md:w-1/2'>
                <div className='mb-4'>
                    <img src={mainImage} alt="main product" 
                    className='w-fit object-cover h-auto rounded-lg'
                    />
                    </div>
                    </div>

                    {/* mobile image */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                        {selectedProduct.images.map((image, index)=>(
                        <img key={index} src={image.url} alt={image.altText ||  `Thumbnail ${index}`} 
                         className={`w-20 h-20 object-cover rounded-lg cursor-pointer border 
                            ${mainImage === image.url? "border-r-black":"border-gray-300"}`}
                            onClick={()=>setMainImage(image.url)}
                            />
                    ))}
                    </div>

                    {/* Right side */}

                    <div className="md:w-1/2 md:ml-10">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                        {selectedProduct.name}
                    </h1>
                    <p className='text-lg text-gray-600 mb-1 line-through'>
                        {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}</p>
                        <p className='text-lg text-gray-600 mb-1 '>
                       $ {selectedProduct.price}</p>
                        <p className='text-lg text-gray-600 mb-1 '>
                        {selectedProduct.description}</p>

                        <div className="mb-4">
                            <p className="text-gray-700">
                                Color:
                            </p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.colors.map((color)=>(
                                    <button key={color}
                                    className={`w-8 h-8 rounded-full border cursor-pointer ${selectedColor===color?
                                        "border-black border-4":"border-gray-300"
                                    }`}
                                    style={{backgroundColor: color.toLocaleLowerCase(),
                                        filter:"brightness(0.5)"
                                    }}
                                    onClick={()=>setSelectedColor(color)}
                                    >

                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-gray-700">Size:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.sizes.map((size)=>(
                                    <button key={size} 
                                    className= {`px-4 py-2 rounded border cursor-pointer ${selectedSize === size?
                                        "bg-black text-white":""
                                    }`}
                                    onClick={()=>setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-700">
                                Quantity:
                            </p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button className='px-3 py-1 bg-gray-200 rounded text-lg cursor-pointer'
                                onClick={()=>handleQuantityChange("minus")}
                                >
                                    -
                                </button>
                                <span className='text-lg'>{quantity}</span>
                                <button className='px-2.5 py-1 bg-gray-200 rounded text-lg cursor-pointer'
                                onClick={()=>handleQuantityChange("plus")}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button disabled={isCartButtonDisabled}
                        className={`bg-black cursor-pointer text-white py-2 px-6 rounded w-full mb-4
                            ${isCartButtonDisabled?"cursor-not-allowed opacity-50":"hover:bg-gray-900"}`}
                        onClick={handleAddToCart}
                        >
                            {isCartButtonDisabled?"Adding...": "ADD TO CART"}
                        </button>
                        <div className='mt-10 text-gray-700'>
                                <h3 className="text-xl font-bold mb-4">
                                    Characteristics:
                                </h3>
                                <table className='w-full text-left text-sm text-gray-600'>
                                    <tbody>
                                        <tr>
                                            <td className='py-1'>Brand</td>
                                            <td className='py-1'>{selectedProduct.brand}</td>
                                        </tr>
                                        <tr>
                                            <td className='py-1'>Material</td>
                                            <td className='py-1'>{selectedProduct.material}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
            </div>
        <div className='mt-20'>
            <h2 className="text-2xl text-center font-medium mb-4">
                You May Also Like
            </h2>
            <ProductGrid products ={similarProducts} />
        </div>
        </div>
    </div>
  )
}

export default ProductDetails