import React from 'react'; 
import style from './recipe.module.css'; 

const Recipe = ({title, calories, image, ingredients, totalWeight}) => {
    return(
        <div className = {style.recipe}>
            <img className = {style.image} src = {image} alt = "" />
            <h1 > {title} </h1>
            <o1>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </o1>
            <p> Calories: {calories} <br /> Total Weight: {totalWeight} </p>
        </div>
    )
}

export default Recipe; 