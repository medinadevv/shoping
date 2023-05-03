import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
    const {favorites} = useSelector(s => s.favorites)
    return (
        <div className="container basis-3/12">
            <div className="flex  my-10 flex-wrap justify-center gap-5">
                {
                    favorites.map(el => <ProductCard el={el}/> )
                }
            </div>
        </div>
    );
};

export default Favorite;