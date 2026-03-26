"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";
import { cn } from "@/lib/utils";

const LAWYER_NAME = "Dr. Richard";
const WHATSAPP_NUMBER = "5581986431654";
const WHATSAPP_MESSAGE = "Olá, Dr. Richard. Quero tirar uma dúvida. Meu assunto é:";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 rounded-xl border bg-white p-4 shadow-sm">
      <span
        className="mt-0.5 grid size-7 place-items-center rounded-lg border border-emerald-700/30 bg-emerald-700/10 text-emerald-800"
        aria-hidden="true"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-slate-900">{children}</span>
    </li>
  );
}

export default function Page() {
  const waHref = getWhatsAppLink({
    phoneE164Digits: WHATSAPP_NUMBER,
    message: WHATSAPP_MESSAGE,
  });

  return (
    <div className="min-h-dvh bg-slate-50 text-slate-950">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:border focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-slate-950"
      >
        Pular para o conteúdo
      </a>

      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <div
              className="size-10 rounded-xl bg-gradient-to-br from-blue-800 to-emerald-700 shadow-sm"
              aria-hidden="true"
            />
            <div className="leading-tight">
              <div className="font-extrabold text-slate-950">{LAWYER_NAME}</div>
              <div className="text-[16px] text-slate-800">Advocacia • Atendimento por WhatsApp</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "font-extrabold")}
            >
              Tirar dúvida agora
            </a>
          </div>
        </div>
      </header>

      <main id="conteudo" className="mx-auto max-w-5xl px-5">
        <section className="py-10 md:py-14" aria-label="Apresentação">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-2xl border bg-white p-6 shadow-sm md:p-8">
              <div className="inline-flex items-center rounded-full border bg-blue-50 px-3 py-1.5 text-[16px] font-bold text-blue-950">
                Atendimento claro. Resposta direta.
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                Explique seu caso. Fale comigo no WhatsApp.
              </h1>
              <p className="mt-3 text-[19px] text-slate-800">
                Linguagem simples, transparência e próximos passos claros.
              </p>

              <ul className="mt-5 grid gap-3 text-[18px] text-slate-900">
                <li className="flex gap-3">
                  <span className="mt-2 size-2 rounded-full bg-emerald-700" aria-hidden="true" />
                  <span>Mensagens objetivas e fáceis de entender</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-2 rounded-full bg-emerald-700" aria-hidden="true" />
                  <span>Orientação direta sobre o que fazer</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-2 rounded-full bg-emerald-700" aria-hidden="true" />
                  <span>Atendimento respeitoso</span>
                </li>
              </ul>

              <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "min-h-14 font-extrabold")}
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="#areas"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "min-h-14 border-slate-300 bg-white font-extrabold text-slate-950"
                  )}
                >
                  Ver áreas
                </a>
              </div>

              <div className="mt-6 border-t pt-4 text-[16px] text-slate-800">
                <strong className="text-slate-950">Para começar:</strong> assunto + cidade + resumo.
              </div>
            </div>

            <figure className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <Image
                src="/hero-office.svg"
                alt="Imagem profissional ilustrativa de um ambiente de trabalho em escritório."
                width={1200}
                height={820}
                priority
                className="h-auto w-full"
              />
              <figcaption className="border-t px-4 py-3 text-[16px] text-slate-800">
                Imagem ilustrativa (pode ser substituída por foto profissional).
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-10 md:py-14" aria-label="Benefícios rápidos">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
            O que você ganha com este atendimento
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2" aria-label="Lista de benefícios">
            <CheckItem>
              <strong>Atendimento claro</strong>
            </CheckItem>
            <CheckItem>
              <strong>Sem juridiquês</strong>
            </CheckItem>
            <CheckItem>
              <strong>Orientação direta</strong>
            </CheckItem>
            <CheckItem>
              <strong>Transparência total</strong>
            </CheckItem>
          </ul>
        </section>

        <section id="areas" className="py-10 md:py-14" aria-label="Áreas de atuação">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
              Áreas de atuação
            </h2>
            <p className="text-[18px] text-slate-800">Escolha o tema e me chame no WhatsApp.</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Direito Civil</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-[18px] text-slate-900">
                  <li>Contratos</li>
                  <li>Cobranças</li>
                  <li>Indenizações</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Direito Trabalhista</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-[18px] text-slate-900">
                  <li>Verbas rescisórias</li>
                  <li>Horas extras</li>
                  <li>Vínculo e acordos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Direito Previdenciário</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-[18px] text-slate-900">
                  <li>Aposentadoria</li>
                  <li>Benefícios</li>
                  <li>Recursos e revisão</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "min-h-14 font-extrabold")}
            >
              Conversar com advogado
            </a>
          </div>
        </section>

        <section className="py-10 md:py-14" aria-label="Por que escolher">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
            Por que escolher este atendimento
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Explicação simples</CardTitle>
              </CardHeader>
              <CardContent className="text-[18px] text-slate-900">
                Você entende o que está acontecendo.
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Próximos passos claros</CardTitle>
              </CardHeader>
              <CardContent className="text-[18px] text-slate-900">
                O que fazer agora, sem confusão.
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Atendimento respeitoso</CardTitle>
              </CardHeader>
              <CardContent className="text-[18px] text-slate-900">
                Comunicação humana e objetiva.
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Transparência</CardTitle>
              </CardHeader>
              <CardContent className="text-[18px] text-slate-900">
                Limites, riscos e possibilidades bem explicados.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="como-funciona" className="py-10 md:py-14" aria-label="Como funciona">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
            Como funciona
          </h2>
          <p className="mt-2 text-[18px] text-slate-800">3 passos. Sem enrolação.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">1. Você entra em contato</CardTitle>
              </CardHeader>
              <CardContent className="text-[18px] text-slate-900">
                Envie assunto e um resumo do caso.
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">2. O caso é analisado</CardTitle>
              </CardHeader>
              <CardContent className="text-[18px] text-slate-900">
                Se preciso, peço os documentos essenciais.
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">3. Você recebe orientação</CardTitle>
              </CardHeader>
              <CardContent className="text-[18px] text-slate-900">
                Próximos passos claros e opções bem explicadas.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-10 md:py-14" aria-label="Chamada final">
          <div className="rounded-2xl border bg-blue-50 p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-blue-950">
              Fale agora pelo WhatsApp
            </h2>
            <p className="mt-2 text-[18px] text-slate-900">
              Clique e envie uma mensagem. Eu retorno em horário comercial.
            </p>
            <div className="mt-5">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "min-h-14 font-extrabold")}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <p className="mt-5 text-[16px] text-slate-800">
            <strong className="text-slate-950">Observação:</strong> conteúdo informativo. Cada caso
            exige análise específica.
          </p>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-5 py-8">
          <div className="font-extrabold text-slate-950">{LAWYER_NAME} — Advocacia</div>
          <div className="mt-1 text-[16px] text-slate-800">
            © {new Date().getFullYear()} • Todos os direitos reservados
          </div>
        </div>
      </footer>

      <WhatsAppFloatingButton phoneE164Digits={WHATSAPP_NUMBER} message={WHATSAPP_MESSAGE} />
    </div>
  );
}
