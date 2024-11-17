/* eslint-disable jsx-a11y/img-redundant-alt */
import './list-view-style.css';
export const ListWiew = ({product}) => {
    return (
        <div className='list-view'>
            <img className='list-view__image' src={product.img} alt="image" />
            <h3 className="list-view__name">{product.name}</h3>
            <span className="list-view__color">{product.color}</span>
            <span className="list-view__price">${product.price}</span>
            <button className="list-view__btn">Add to cart</button>
      </div>
    )
}