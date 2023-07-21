import styles from "./index.module.scss";

const MiniProductToAdd = ({ product }) => {
  return (
    <div className={styles.MiniProductToAdd}>
      <img src={product.image} alt="object image" />
      <h4>{product.title.slice(0, 34)}</h4>
    </div>
  );
};

export default MiniProductToAdd;

const object = {
  id: 9,
  title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  price: 64,
  description:
    "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  category: "electronics",
  image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  rating: {
    rate: 3.3,
    count: 203,
  },
};
