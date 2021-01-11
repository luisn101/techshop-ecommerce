import React, { useEffect, useState } from 'react';
import { getFirestore } from "../../firebase";
import Categories from "../Categories/Categories";

const CategoriesContainer = () => {
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        const db = getFirestore()
        const category = db.collection('categories')
        const getCategories = category.get()
        const sectionObj = {}
        getCategories
            .then((cat) => {
                cat.docs.map((doc) => {
                    const parent = doc.ref.parent.id
                    sectionObj[parent] = []
                })
                cat.docs.map((doc) => {
                    const parent = doc.ref.parent.id
                    sectionObj[parent].push({
                        id: doc.id,
                        items: [],
                        parent: parent,
                        ...doc.data(),
                    })
                })
                setCategorias(sectionObj)
            })
    }, [])
    return (
        <Categories list={categorias}/>
    );
};

export default CategoriesContainer;