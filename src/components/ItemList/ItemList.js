import React, {useEffect, useState} from 'react';
import Item from "../Item/Item";
import './itemList.css';
import { getFirestore } from "../../firebase";

const ItemList = () => {
        const [products, setProducts] = useState([]);
        const [, setIsLoaded] = useState(false);

        useEffect(() => {
            setIsLoaded(true)
            const db = getFirestore()
            const itemCollection = db.collection('items')
            itemCollection.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('no results!')
                }
                setProducts(querySnapshot.docs.map(doc => doc.data()))
                console.log(querySnapshot.docs.map(doc => doc.data()))
            }).catch((error) => {
                console.log("Error searching items", error)
            }).finally(() => {
                setIsLoaded(false)
            })
        }, [])


    return (
        <Item products={products}/>
        );

}

export default ItemList;