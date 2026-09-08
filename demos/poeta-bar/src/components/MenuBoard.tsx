import { useMemo, useState } from "react";
import {
  CATEGORIES,
  itemMatchesCategory,
  itemMatchesQuery,
  MENU_ITEMS,
  type MenuCategory,
} from "../data/menu";

export function MenuBoard() {
  const [category, setCategory] = useState<MenuCategory | "todos">("todos");
  const [query, setQuery] = useState("");

  const items = useMemo(
    () =>
      MENU_ITEMS.filter(
        (item) => itemMatchesCategory(item, category) && itemMatchesQuery(item, query),
      ),
    [category, query],
  );

  return (
    <>
      <div className="menu-search">
        <i aria-hidden="true">🔎</i>
        <input
          type="search"
          placeholder="Buscar xis, petisco ou chope"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Buscar no cardápio"
        />
      </div>

      <div className="menu-cats" role="tablist" aria-label="Categorias do cardápio">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`chip ${category === cat.id ? "is-on" : ""}`}
            onClick={() => setCategory(cat.id)}
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {items.length ? (
        <div className="menu-grid">
          {items.map((item) => (
            <article className="product" key={item.id}>
              {item.image ? (
                <div className="product-photo">
                  <img src={item.image} alt={item.name} />
                </div>
              ) : null}
              <div className="product-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <strong className="product-price">{item.price}</strong>
                {item.tags?.length ? (
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span className={`tag ${item.official === false ? "is-demo" : ""}`} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="section-lead">Nada por aqui. Tenta outro termo.</p>
      )}
    </>
  );
}
