import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsBasketFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai";

const ProductCard = ({el}) => {
    const dispatch = useDispatch()
    const {favorites} = useSelector(s=> s.favorites)
    const {basket} = useSelector(s=> s.basket)
    const heart = favorites.some(some => some.id === el.id)
    const bas = basket.some(some => some.id === el.id)

    const addBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const favoriteBtn = () => {
    dispatch({type: "ADD_TO_FAVORITE",payload: el})
    }
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/details/${el.id}`}><img className="rounded-t-lg" src={el.image} alt=""/></Link>

            <div className="p-5">
                <a href="#"><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5></a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>

                {
                    bas ?
                      <Link to={"/basket"}>
                          <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
                              <BsBasketFill/>
                          </button>
                      </Link>

                        : <button onClick={addBasket}
                         type="button"
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Add basket
                        </button>
                }
                <button onClick={favoriteBtn}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <AiOutlineHeart className={heart ?  "text-red-50" : "text-white" }/>
                </button>
            </div>
        </div>

    );
};

export default ProductCard;