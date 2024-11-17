import './card-vue-style.css';
export const CardVue = ({product}) => {
    return (
    <div
        className='card-view'
        style={{background: `url(${product.img}) center center/cover no-repeat`}}
        >
        <h3 className="card-view__name">{product.name}</h3>
        <span className="card-view__color">{product.color}</span>
        <span className="card-view__price">${product.price}</span>
        <button className="card-view__btn">Add to cart</button>
    </div>
    )
}