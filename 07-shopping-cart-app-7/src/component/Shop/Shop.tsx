type Props = {
  children: React.ReactNode;
}

const Shop = ({children}: Props) => {
  return (
    <>
      <section id="shop">
        <h2>Elegant Clothing For Everyone</h2>
        <ul id="products">
          {children}
        </ul>
      </section>
    </>
  )
};

export default Shop;