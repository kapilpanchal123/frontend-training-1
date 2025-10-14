import type { ProductDataType } from '../../Data/Data';

type Props = ProductDataType & {
  onAddToCart: (id: string) => void;
}

const Product = ({ id, image, title, price, description, onAddToCart }: Props) => {
  return (
    <>
      <article className="product">
      <img src={image} alt={title} />
        <div className="product-content">
          <div>
            <h3>{title}</h3>
            <p className='product-price'>${price}</p>
            <p>{description}</p>
          </div>
          <p className='product-actions'>
            <button onClick={() => onAddToCart(id)}>Add to Cart</button>
          </p>
        </div>
      </article>
    </>
  )
};

export default Product;