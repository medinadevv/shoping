import React from 'react';
import {useSelector} from "react-redux";
import BasketTable from "./BasketTable";


const Basket = () => {
    const {basket} = useSelector(state => state.basket)
    const total = basket.reduce((acc,el) => {
        return acc + el.count * el.price
    },0)
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        img
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Count
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map((el) => (
                        <BasketTable el={el}/>
                    ))
                }
                </tbody>
            </table>
            <div className="">
                {
                    total === 0 ? null : <h1 className="text-2xl text-end my-5 mx-9 ">Total : {total} </h1>
                }
            </div>
        </div>
    );
};

export default Basket;