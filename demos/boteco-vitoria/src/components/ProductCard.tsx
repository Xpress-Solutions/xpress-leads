import { portionLabel, type MenuItem } from "../data/menu";

export function ProductCard({ item }: { item: MenuItem }) {
  const serve = portionLabel(item.portion);

  return (
    <article className={`product ${item.image ? "" : "product-compact"}`}>
      {item.image ? (
        <div className="product-photo">
          <img src={item.image} alt={item.name} />
        </div>
      ) : null}
      <div className="product-body">
        <h3>{item.name}</h3>
        {item.description ? <p>{item.description}</p> : null}
        <div className="product-meta">
          <strong className="product-price">{item.price}</strong>
          {item.official === false ? (
            <span className="price-note">Preço a confirmar</span>
          ) : null}
        </div>
        {item.tags?.length || serve ? (
          <div className="tags">
            {serve ? <span className="tag">{serve}</span> : null}
            {item.tags?.map((tag) => (
              <span className={`tag ${tag === "Consulte" ? "is-demo" : ""}`} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
