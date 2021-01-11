import React, { useEffect, useState } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

const ItemDetailContainer = () => {
    const { id }  = useParams()
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const itemCollection = db.collection('items')
        const item = itemCollection.doc(id)

        item.get().then((doc) => {
            if (!doc.exists) {
                console.log('Item does not exist! :(')
                return true
            }
            console.log('Item found!')
            setItem({id: doc.id, ...doc.data()})
        }).catch((error) => {
            console.log("Error searching items", error)
        }).finally(() => {
            setLoading(false)
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    return (
        <div>
            <ItemDetail item={item} loading={loading} counter={counter} setCounter={setCounter}/>
        </div>
    );

};

export default ItemDetailContainer;