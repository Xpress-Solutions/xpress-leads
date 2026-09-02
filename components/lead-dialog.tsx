"use client";

import {
  AtSign,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
} from "lucide-react";
import type { Lead } from "@/lib/types";
import { categoryLabel } from "@/data/leads";
import { instagramUrl, mapsUrl, telUrl, whatsappUrl } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type LeadDialogProps = {
  lead: Lead | null;
  onOpenChange: (open: boolean) => void;
};

export function LeadDialog({ lead, onOpenChange }: LeadDialogProps) {
  return (
    <Dialog open={Boolean(lead)} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        {lead ? <LeadBrief lead={lead} /> : null}
      </DialogContent>
    </Dialog>
  );
}

function LeadBrief({ lead }: { lead: Lead }) {
  const pitchMessage = lead.pitch;

  return (
    <>
      <DialogHeader>
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
          <span className="text-xs text-muted-foreground">
            Score {lead.score}
          </span>
        </div>
        <DialogTitle className="font-heading text-3xl tracking-tight">
          {lead.name}
        </DialogTitle>
        <DialogDescription className="flex items-start gap-2 text-left">
          <MapPin className="mt-0.5 size-4 shrink-0" />
          {lead.address}
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-wrap gap-2">
        {lead.whatsapp ? (
          <Button
            render={
              <a
                href={whatsappUrl(lead.whatsapp, pitchMessage)}
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <MessageCircle />
            Abrir WhatsApp
          </Button>
        ) : null}
        {lead.phone ? (
          <Button variant="outline" render={<a href={telUrl(lead.phone)} />}>
            <Phone />
            {lead.phone}
          </Button>
        ) : null}
        <Button
          variant="outline"
          render={
            <a href={mapsUrl(lead.mapsQuery)} target="_blank" rel="noreferrer" />
          }
        >
          <MapPin />
          Ver no mapa
        </Button>
        {lead.instagram ? (
          <Button
            variant="outline"
            render={
              <a
                href={instagramUrl(lead.instagram)}
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <AtSign />
            @{lead.instagram}
          </Button>
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
