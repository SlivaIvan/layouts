/* eslint-disable array-callback-return */
import { useState } from 'react'
import { CardVue } from "../CardVue/CardVue"
import { products } from "../data/products"
import { IconSwitch } from '../iconSwitch/iconSwitch';
import { ListWiew } from '../listView/listView';

import './store-style.css';

export const Store = () => {
    const [ viewList, setViewlist ] = useState(false)

    return (
        <div>
            <IconSwitch 
                icon = {viewList ? "view_list" : "view_module"}
                onSwitch = {()=> setViewlist(prev => !prev)}
            />
            <div className="products">
                {
                products.map((product) => {
                return(
                    viewList
                    ? <ListWiew product={product} /> 
                    : <CardVue product={product}/> 
                )
                })
                }
            </div>
        </div>
    )
}
