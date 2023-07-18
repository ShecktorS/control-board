import styles from "./index.module.scss";

const BranchProductItem = ({ product }) => {
  return (
    <div className={styles.BranchProductItem}>
      <img src={product.image} alt="product Image" />
      <div className={styles.textContainer}>
        <p className={styles.title}>
          {product.title.length > 36
            ? product.title.slice(0, 34) + "..."
            : product.title}
        </p>
        {/* <p className={styles.description}>
          {product.description.length > 100 &&
            product.description.slice(0, 60) + "..."}
        </p> */}
      </div>

      <p>€ {product.price.toString().replace(".", ",")}</p>
    </div>
  );
};

export default BranchProductItem;

const object = {
  id: 7,
  title: "White Gold Plated Princess",
  price: 9.99,
  /* 100 length */
  description:
    "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  category: "jewelery",
  image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  rating: {
    rate: 3,
    count: 400,
  },
};
