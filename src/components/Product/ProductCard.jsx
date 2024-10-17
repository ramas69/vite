function ProductCard({product}) {
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <img src={product.image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <a href="#" className="btn btn-primary">
              {`Acheter pour ${product.price} €`}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
