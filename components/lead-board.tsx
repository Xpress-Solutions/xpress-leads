"use client";

import { useMemo, useState } from "react";
import {
  Leaf,
  MapPin,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import type { Category, City, Lead, Neighborhood, Priority } from "@/lib/types";
import {
  categoryLabel,
  cityLabel,
  cityOrder,
  excluded,
  leads,
  methodology,
  neighborhoodCity,
  neighborhoodLabel,
  neighborhoodOrder,
  RESEARCH_DATE,
} from "@/data/leads";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LeadDialog } from "@/components/lead-dialog";
import { cn } from "@/lib/utils";

const categories: Array<Category | "todas"> = [
  "todas",
  "gastronomia",
  "beleza",
  "comercio",
  "automotivo",
  "casa-obra",
];

export function LeadBoard() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "todas">("todas");
  const [city, setCity] = useState<City | "todas">("todas");
  const [neighborhood, setNeighborhood] = useState<Neighborhood | "todas">("todas");
  const [priority, setPriority] = useState<Priority | "todas">("todas");
  const [selected, setSelected] = useState<Lead | null>(null);

  const visibleNeighborhoods = useMemo(() => {
    return neighborhoodOrder.filter((item) => {
      if (city === "todas") {
        return leads.some((lead) => lead.neighborhood === item);
      }
      return neighborhoodCity[item] === city;
    });
  }, [city]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads
      .filter((lead) => (category === "todas" ? true : lead.category === category))
      .filter((lead) => (city === "todas" ? true : lead.city === city))
      .filter((lead) =>
        neighborhood === "todas" ? true : lead.neighborhood === neighborhood
      )
      .filter((lead) => (priority === "todas" ? true : lead.priority === priority))
      .filter((lead) => {
        if (!q) return true;
        return [
          lead.name,
          lead.address,
          lead.identity,
          categoryLabel[lead.category],
          cityLabel[lead.city],
          neighborhoodLabel[lead.neighborhood],
        ]
          .join(" ")
          .toLowerCase()
          .includes(q);
      })
      .sort((a, b) => b.score - a.score);
  }, [category, city, neighborhood, priority, query]);

  const highCount = leads.filter((lead) => lead.priority === "alta").length;
  const cityCount = new Set(leads.map((lead) => lead.city)).size;

  return (
    <div className="flex flex-1 flex-col">
      <header className="relative overflow-hidden border-b border-[oklch(0.38_0.08_155_/_0.12)] bg-[oklch(0.28_0.055_155)] text-[oklch(0.97_0.02_95)]">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_18%_20%,oklch(0.72_0.12_95_/_0.35),transparent_36%),radial-gradient(circle_at_88%_10%,oklch(0.62_0.1_150_/_0.28),transparent_32%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase">
              <Leaf className="size-3.5" />
              Mapa de conversão · {RESEARCH_DATE}
            </p>
            <p className="text-xs text-[oklch(0.9_0.03_95_/_0.75)]">
              Porto Alegre · Canoas · Gravataí · NH · São Leopoldo
            </p>
          </div>
          <div className="max-w-3xl space-y-4">
            <h1 className="font-heading text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Negócios ativos, com identidade — e sem site.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[oklch(0.93_0.02_95_/_0.86)] sm:text-lg">
              Capital e região metropolitana: casas abertas, com nome próprio e
              sinal recente de operação. Nenhuma controla o próprio endereço na
              web. Sem repetir negócio.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat value={String(leads.length)} label="Leads qualificados" />
            <Stat value={String(highCount)} label="Prioridade alta" />
            <Stat value="0" label="Com site oficial" />
            <Stat value={String(cityCount)} label="Cidades" />
          </dl>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por nome, cidade, rua ou ofício"
                aria-label="Buscar leads"
                className="h-11 w-full rounded-lg border border-input bg-card pr-3 pl-9 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            </div>
            <div className="flex rounded-lg bg-muted p-1" role="tablist" aria-label="Prioridade">
              {(
                [
                  ["todas", "Todas"],
                  ["alta", "Alta"],
                  ["media", "Média"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  role="tab"
                  aria-selected={priority === value}
                  onClick={() => setPriority(value)}
                  className={cn(
                    "h-8 flex-1 rounded-md px-3 text-sm font-medium lg:flex-none",
                    priority === value
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            <button
              type="button"
              onClick={() => {
                setCity("todas");
                setNeighborhood("todas");
              }}
              className={cn(
                "h-8 shrink-0 rounded-lg border px-3 text-sm font-medium",
                city === "todas"
                  ? "border-transparent bg-[oklch(0.38_0.08_155)] text-[oklch(0.97_0.02_95)]"
                  : "border-border bg-card hover:bg-muted"
              )}
            >
              Todas as cidades
            </button>
            {cityOrder.map((item) => {
              const active = city === item;
              const count = leads.filter((lead) => lead.city === item).length;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setCity(item);
                    setNeighborhood("todas");
                  }}
                  className={cn(
                    "h-8 shrink-0 rounded-lg border px-3 text-sm font-medium",
                    active
                      ? "border-transparent bg-[oklch(0.38_0.08_155)] text-[oklch(0.97_0.02_95)]"
                      : "border-border bg-card hover:bg-muted"
                  )}
                >
                  {cityLabel[item]}
                  <span className="ml-1.5 text-xs opacity-70">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            <button
              type="button"
              onClick={() => setNeighborhood("todas")}
              className={cn(
                "h-8 shrink-0 rounded-lg border px-3 text-sm font-medium",
                neighborhood === "todas"
                  ? "border-transparent bg-[oklch(0.32_0.06_155)] text-[oklch(0.97_0.02_95)]"
                  : "border-border bg-card hover:bg-muted"
              )}
            >
              Todos os bairros
            </button>
            {visibleNeighborhoods.map((item) => {
              const active = neighborhood === item;
              const count = leads.filter((lead) => lead.neighborhood === item).length;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setNeighborhood(item)}
                  className={cn(
                    "h-8 shrink-0 rounded-lg border px-3 text-sm font-medium",
                    active
                      ? "border-transparent bg-[oklch(0.32_0.06_155)] text-[oklch(0.97_0.02_95)]"
                      : "border-border bg-card hover:bg-muted"
                  )}
                >
                  {neighborhoodLabel[item]}
                  <span className="ml-1.5 text-xs opacity-70">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {categories.map((item) => {
              const active = category === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={cn(
                    "h-8 shrink-0 rounded-lg border px-3 text-sm font-medium",
                    active
                      ? "border-transparent bg-[oklch(0.38_0.08_155)] text-[oklch(0.97_0.02_95)]"
                      : "border-border bg-card hover:bg-muted"
                  )}
                >
                  {item === "todas" ? "Todos os ofícios" : categoryLabel[item]}
                </button>
              );
            })}
          </div>
        </section>

        <p className="text-sm text-muted-foreground">
          Mostrando {filtered.length} de {leads.length} casas
        </p>

        {filtered.length === 0 ? (
          <EmptyState
            onReset={() => {
              setQuery("");
              setCategory("todas");
              setCity("todas");
              setNeighborhood("todas");
              setPriority("todas");
            }}
          />
        ) : (
          <section className="grid gap-4 md:grid-cols-2">
            {filtered.map((lead) => (
              <LeadCard key={lead.id} lead={lead} onOpen={setSelected} />
            ))}
          </section>
        )}

        <section className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                Como esses leads foram escolhidos
              </CardTitle>
              <CardDescription>
                Recorte de {methodology.place}. Pesquisa em {methodology.date}.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-relaxed">
              <p className="text-muted-foreground">{methodology.streets}</p>
              <ol className="space-y-2">
                {methodology.criteria.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[oklch(0.38_0.08_155)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Fora da lista</CardTitle>
              <CardDescription>
                Ativos, mas sem encaixe para um site autoral agora.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {excluded.map((item) => (
                <div key={item.name} className="border-b border-border/70 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-medium">{item.name}</p>
                    <Badge variant="outline">{item.reason}</Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t bg-card/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            Dados públicos cruzados em {RESEARCH_DATE}. Confirme no balcão antes
            de fechar proposta.
          </p>
          <p>RMPA · Porto Alegre e cidades vizinhas</p>
        </div>
      </footer>

      <LeadDialog lead={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <dt className="text-xs tracking-wide text-[oklch(0.9_0.03_95_/_0.7)] uppercase">
        {label}
      </dt>
      <dd className="font-heading text-3xl">{value}</dd>
    </div>
  );
}

function LeadCard({
  lead,
  onOpen,
}: {
  lead: Lead;
  onOpen: (lead: Lead) => void;
}) {
  return (
    <Card data-lead-card={lead.id} className="bg-card transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant={lead.priority === "alta" ? "default" : "secondary"}
                className={
                  lead.priority === "alta"
                    ? "bg-[oklch(0.38_0.08_155)] text-[oklch(0.97_0.02_95)]"
                    : undefined
                }
              >
                {lead.priority === "alta" ? "Alta" : "Média"}
              </Badge>
              <Badge variant="outline">{cityLabel[lead.city]}</Badge>
              <Badge variant="outline">{neighborhoodLabel[lead.neighborhood]}</Badge>
              <Badge variant="outline">{categoryLabel[lead.category]}</Badge>
            </div>
            <CardTitle className="font-heading text-2xl tracking-tight">
              {lead.name}
            </CardTitle>
          </div>
          <div className="rounded-full bg-[oklch(0.38_0.08_155_/_0.08)] px-2.5 py-1 text-sm font-medium text-[oklch(0.32_0.07_155)]">
            {lead.score}
          </div>
        </div>
        <CardDescription className="flex items-start gap-1.5">
          <MapPin className="mt-0.5 size-3.5 shrink-0" />
          {lead.address}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="line-clamp-3 text-sm leading-relaxed">{lead.identity}</p>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          {lead.googleRating ? (
            <span className="inline-flex items-center gap-1">
              <Star className="size-3.5 fill-[oklch(0.72_0.14_85)] text-[oklch(0.72_0.14_85)]" />
              {lead.googleRating.toFixed(1)}
              {lead.googleReviews ? ` · ${lead.googleReviews}` : null}
            </span>
          ) : lead.googleReviews ? (
            <span>{lead.googleReviews} avaliações</span>
          ) : null}
          {lead.founded ? <span>{lead.founded}</span> : null}
          <span className="inline-flex items-center gap-1">
            <Sparkles className="size-3.5" />
            Sem site oficial
          </span>
        </div>
      </CardContent>
      <CardFooter className="justify-between gap-3">
        <p className="line-clamp-2 text-xs text-muted-foreground">
          {lead.digitalGap}
        </p>
        <button
          type="button"
          className="h-8 shrink-0 rounded-lg bg-[oklch(0.38_0.08_155)] px-3 text-sm font-medium text-[oklch(0.97_0.02_95)] hover:opacity-90"
          onClick={() => onOpen(lead)}
        >
          Abrir briefing
        </button>
      </CardFooter>
    </Card>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <Card className="items-center py-12 text-center">
      <CardHeader>
        <CardTitle>Nenhum lead nesse recorte</CardTitle>
        <CardDescription>
          Ajuste a busca ou volte para a lista completa da região.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <button
          type="button"
          onClick={onReset}
          className="h-8 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted"
        >
          Limpar filtros
        </button>
      </CardContent>
    </Card>
  );
}
