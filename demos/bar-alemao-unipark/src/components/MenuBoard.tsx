import { useMemo, useState } from "react";
import {
  CATEGORIES,
  itemMatchesCategory,
  itemMatchesQuery,
  MENU_ITEMS,
  type MenuCategory,
} from "../data/menu";
import { ProductCard } from "./ProductCard";

export function MenuBoard() {
  const [category, setCategory] = useState<MenuCategory>("todos");
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
          placeholder="Buscar litrão, mocotó, buffet…"
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
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="menu-empty">Nada por aqui. Tenta outro termo.</p>
      )}
    </>
  );
}
