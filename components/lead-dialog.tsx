"use client";

import { useEffect } from "react";
import {
  AtSign,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  X,
} from "lucide-react";
import type { Lead } from "@/lib/types";
import { categoryLabel } from "@/data/leads";
import { instagramUrl, mapsUrl, telUrl, whatsappUrl } from "@/lib/format";
import { Badge } from "@/components/ui/badge";

type LeadDialogProps = {
  lead: Lead | null;
  onClose: () => void;
};

export function LeadDialog({ lead, onClose }: LeadDialogProps) {
  useEffect(() => {
    if (!lead) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [lead, onClose]);

  if (!lead) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Fechar briefing"
        className="absolute inset-0 bg-foreground/35 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-dialog-title"
        className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-card shadow-2xl ring-1 ring-foreground/10 sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-3 border-b px-5 py-4">
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
                {lead.priority === "alta" ? "Prioridade alta" : "Prioridade média"}
              </Badge>
              <Badge variant="outline">{categoryLabel[lead.category]}</Badge>
              <span className="text-xs text-muted-foreground">Score {lead.score}</span>
            </div>
            <h2
              id="lead-dialog-title"
              className="font-heading text-3xl tracking-tight"
            >
              {lead.name}
            </h2>
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {lead.address}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label="Fechar"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="space-y-5 overflow-y-auto px-5 py-5">
          <LeadBrief lead={lead} />
        </div>
      </section>
    </div>
  );
}

function LeadBrief({ lead }: { lead: Lead }) {
  const linkClass =
    "inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-background px-3 text-sm font-medium hover:bg-muted";

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {lead.whatsapp ? (
          <a
            href={whatsappUrl(lead.whatsapp, lead.pitch)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[oklch(0.38_0.08_155)] px-3 text-sm font-medium text-[oklch(0.97_0.02_95)] hover:opacity-90"
          >
            <MessageCircle className="size-4" />
            Abrir WhatsApp
          </a>
        ) : null}
        {lead.phone ? (
          <a href={telUrl(lead.phone)} className={linkClass}>
            <Phone className="size-4" />
            {lead.phone}
          </a>
        ) : null}
        <a
          href={mapsUrl(lead.mapsQuery)}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          <MapPin className="size-4" />
          Ver no mapa
        </a>
        {lead.instagram ? (
          <a
            href={instagramUrl(lead.instagram)}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            <AtSign className="size-4" />
            @{lead.instagram}
          </a>
        ) : null}
      </div>

      <dl className="grid gap-3 rounded-xl bg-muted/60 p-4 text-sm sm:grid-cols-2">
        {lead.googleRating ? (
          <Fact
            label="Google"
            value={`${lead.googleRating.toFixed(1)}${
              lead.googleReviews ? ` · ${lead.googleReviews} avaliações` : ""
            }`}
          />
        ) : lead.googleReviews ? (
          <Fact label="Avaliações" value={`${lead.googleReviews} menções`} />
        ) : null}
        {lead.founded ? <Fact label="Tempo de casa" value={lead.founded} /> : null}
        {lead.hours ? <Fact label="Horário" value={lead.hours} /> : null}
      </dl>

      <Section title="Identidade">
        <p>{lead.identity}</p>
      </Section>
      <Section title="Lacuna digital">
        <p>{lead.digitalGap}</p>
      </Section>
      <Section title="Por que converte">
        <p>{lead.conversionWhy}</p>
      </Section>
      <Section title="Como abordar">
        <p>{lead.approach}</p>
      </Section>

      <blockquote className="relative rounded-xl border border-[oklch(0.38_0.08_155_/_0.18)] bg-[oklch(0.38_0.08_155_/_0.06)] p-4">
        <Quote className="absolute top-3 right-3 size-5 text-[oklch(0.38_0.08_155_/_0.35)]" />
        <p className="mb-2 text-xs font-medium tracking-wide text-[oklch(0.38_0.08_155)] uppercase">
          Pitch sugerido
        </p>
        <p className="pr-6 text-sm leading-relaxed">{lead.pitch}</p>
      </blockquote>

      {lead.notes ? (
        <p className="text-xs text-muted-foreground">{lead.notes}</p>
      ) : null}

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
        {lead.sources.map((source) => (
          <a
            key={source.url}
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[oklch(0.38_0.08_155)] underline-offset-4 hover:underline"
          >
            {source.label}
            <ExternalLink className="size-3" />
          </a>
        ))}
      </div>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-1.5">
      <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-pretty">{children}</div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
