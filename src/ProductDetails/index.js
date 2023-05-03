import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const [details, setDetails] = useState({})
    const {id} = useParams()
    const getDetails = () => {
        return axios(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setDetails(res.data))
    }
    useEffect(() => {
       getDetails()
    }, [])
    console.log(details)
    return (
        <div className="flex items-start rounded-2xl bg-gray-800 justify-center  ">
           <div className="bg-blue-200 w-2/3 h-2/5   mt-36 mb-2.5 rounded-3xl ml-8">
               <div
                   className="flex  w-2/3 py-32 ">
                   <img className="bg-black ml-8"
                        src={details.image} width={200} height={200}   alt=""/>

                   <div className="flex flex-col justify-between p-4 leading-normal ">
                       <h1 className="mb-2 text-3xl ml-8 font-bold tracking-tight  dark:text-black">
                           {details.title}
                       </h1>
                       <h3 className="mb-2 text-3xl  ml-8 font-bold tracking-tight  dark:text-black">
                           {details.category}
                       </h3>

                       <p className="mb-3 font-normal ml-8 text-gray-700 dark:text-black">
                           {details.description}
                       </p>
                       <div className="flex items-center justify-between ml-8">
                           <p className="mb-3 font-normal text-gray-700 dark:text-black">
                               {details.price} $
                           </p>
                           <Link to={"/product"}>
                               <button type="button"
                                       className="text-black bg-emerald-600 from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                   cancel
                               </button>
                           </Link>
                       </div>

                   </div>
               </div>
           </div>
        </div>
    );
};

export default ProductDetails;