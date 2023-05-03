import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "./ProductCard";
import {getProduct} from "../../redux/reducer/reducer";

const Product = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.main)
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    console.log(product)
    return (
        <div className="container basis-3/12">
            <div className="flex  my-10 flex-wrap justify-center gap-5">
                {
                    product.map((el) => (
                        <ProductCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;