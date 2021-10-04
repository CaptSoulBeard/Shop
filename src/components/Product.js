export default function Product({ data }) {
  return (
    <div className="product">
      <img src={data.image} />
      <h5>{data.name}</h5>
      <p>{data.price} KD</p>
    </div>
  );
}
