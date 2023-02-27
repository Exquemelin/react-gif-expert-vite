import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// Usamos la importación de toda la carpeta, gracias al index.js, no es necesario a puntar al index
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";




export const GifExpertApp = () => {

  // Vamos a crear un useState para mantener actualizado el estado
  const [categories, setCategories] = useState(['One Punch']);

  // Función para agregar una nueva categoría
  const onAddCategory = ( newCategory ) => {

    // Si la categoría ya existe no hará nada
    if ( categories.includes(newCategory) ) return;

    // // Añadimos una nueva categoría
    // categories.push('Valorant');
    setCategories([ newCategory, ...categories ]);

  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={ (value) => onAddCategory( value ) }
      />
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
      {/* <ol> */}
        {
          categories.map( (category) => (
              <GifGrid key={ category } category={ category }/>
              // <div>
              //   <h3>{category}</h3>
              //   <li key={category}>{category}</li>
              // </div>
            )
          )
        }
      {/* </ol> */}
    </>
  )
}
