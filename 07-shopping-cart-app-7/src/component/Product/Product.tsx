import { useContext } from 'react';
import type { ProductDataType, ShoppingCartTypeWithFunctions } from '../../Data/Data';
import { CartContext } from '../../store/shopping-cart-context';

type Props = ProductDataType;

const Product = ({ id, image, title, price, description }: Props) => {

  const { addItemsToCart } = useContext<ShoppingCartTypeWithFunctions>(CartContext);
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
            <button onClick={() => addItemsToCart(id)}>Add to Cart</button>
          </p>
        </div>
      </article>
    </>
  )
};

export default Product;