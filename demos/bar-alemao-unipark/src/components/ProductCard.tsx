import type { MenuItem } from "../data/menu";

export function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className={`product ${item.image ? "" : "product-compact"}`}>
      {item.image ? (
        <div className="product-photo">
          <img src={item.image} alt="" />
        </div>
      ) : null}
      <div className="product-body">
        <h3>{item.name}</h3>
        {item.description ? <p>{item.description}</p> : null}
        <div className="product-meta">
          <strong className="product-price">{item.price}</strong>
          <span className="price-note">Confirme na casa</span>
        </div>
        {item.tags?.length ? (
          <div className="tags">
            {item.tags.map((tag) => (
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
