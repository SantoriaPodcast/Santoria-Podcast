export default function SantoriaPodcastWebsite() {
  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes somos', href: '#quienes-somos' },
    { label: 'Propuesta', href: '#proporcionamos' },
    { label: 'Redes', href: '#redes' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Estudio', href: '#estudio' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const benefits = [
    {
      title: 'Formato multiplataforma',
      text: 'Contenido adaptado para YouTube, Spotify, TikTok e Instagram con una estrategia pensada para ampliar alcance.',
      icon: '◉',
    },
    {
      title: 'Integración natural de marca',
      text: 'Presencia orgánica y no invasiva para que la audiencia conecte con la marca de forma auténtica.',
      icon: '◆',
    },
    {
      title: 'Alto engagement y retención',
      text: 'Conversaciones diseñadas para mantener la atención y generar recuerdo real en la audiencia.',
      icon: '▲',
    },
    {
      title: 'Potencial viral mediante clips',
      text: 'Cada episodio se transforma en piezas cortas con alto potencial de distribución y descubrimiento.',
      icon: '✦',
    },
    {
      title: 'Producción constante',
      text: '1 episodio semanal más múltiples clips para sostener presencia, frecuencia y crecimiento.',
      icon: '▣',
    },
  ];

  const socialLinks = [
    { name: 'YouTube', href: '#', icon: '▶' },
    { name: 'Instagram', href: '#', icon: '◎' },
    { name: 'TikTok', href: '#', icon: '♫' },
    { name: 'Spotify', href: '#', icon: '◌' },
  ];

  const sponsorPoints = [
    'Integración orgánica en el contenido',
    'Presencia en episodios y clips virales',
    'Alcance multiplataforma',
    'Audiencia fiel y activa',
  ];

  const studioPoints = [
    'Equipamiento profesional',
    'Ambiente preparado para podcast y entrevistas',
    'Producción optimizada',
  ];

  return (
    <div className="min-h-screen bg-[#090909] text-white selection:bg-orange-500/30 selection:text-white scroll-smooth">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease-out both; }
        .float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .pulse-glow { animation: pulseGlow 5s ease-in-out infinite; }
      `}</style>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl pulse-glow" />
        <div className="absolute top-[28%] left-[8%] h-44 w-44 rounded-full bg-orange-600/10 blur-3xl float-slow" />
        <div className="absolute bottom-[14%] right-[8%] h-52 w-52 rounded-full bg-orange-400/10 blur-3xl pulse-glow" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3 text-sm font-semibold tracking-[0.25em] text-white/90 uppercase">
            <span className="inline-flex h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.8)]" />
            Santoria Podcast
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 transition hover:border-orange-400 hover:bg-orange-500/20 hover:text-orange-200"
          >
            Contacto
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.85))]" />
            <img
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=80"
              alt="Estudio de podcast profesional con micrófonos y ambiente cinematográfico"
              className="h-full w-full object-cover opacity-35"
            />
          </div>

          <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <div className="fade-up max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-orange-300 uppercase backdrop-blur-sm">
                Media brand · Podcast · Producción premium
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-8xl">
                Santoria <span className="text-orange-500">Podcast</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                Historias reales, experiencias extremas y conversaciones que generan impacto.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
                Un entorno audiovisual pensado para construir autoridad, conversación y visibilidad en cada episodio.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#sponsors"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
                >
                  Colabora como Sponsor
                </a>
                <a
                  href="#estudio"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-orange-400/40 hover:bg-white/10"
                >
                  Alquila nuestro estudio
                </a>
              </div>
            </div>

            <div className="fade-up lg:justify-self-end">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/45">Audiencia</p>
                    <p className="mt-3 text-3xl font-black text-white">+55,000</p>
                    <p className="mt-2 text-sm text-white/60">seguidores</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/45">Impacto</p>
                    <p className="mt-3 text-3xl font-black text-white">+15M</p>
                    <p className="mt-2 text-sm text-white/60">visualizaciones</p>
                  </div>
                </div>

                <div className="mt-4 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/12 to-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-300">Producción premium</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Conversaciones diseñadas para conectar, retener y escalar marca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="quienes-somos" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Quiénes somos</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Conversaciones con producción profesional y narrativa con impacto.
              </h2>
              <p className="mt-8 text-lg leading-8 text-white/72">
                Santoria Podcast es un formato de entrevistas y conversación donde exploramos historias reales, experiencias impactantes y temas que generan curiosidad, reflexión y debate.
              </p>
              <p className="mt-6 text-base leading-7 text-white/58">
                Cada episodio está pensado para ofrecer una experiencia audiovisual cuidada, con una puesta en escena seria, creíble y visualmente potente, alineada con una marca media moderna.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-orange-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <img
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80"
                  alt="Entrevista en estudio de podcast con producción profesional"
                  className="h-[520px] w-full object-cover opacity-85"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-orange-300">Credibilidad · Producción · Presencia</p>
                  <p className="mt-3 max-w-md text-lg font-semibold text-white">
                    Un set preparado para conversaciones que transmiten autoridad y confianza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proporcionamos" className="border-y border-white/8 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Qué te proporcionamos</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Un ecosistema de contenido preparado para crecer y convertir.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group rounded-[1.75rem] border border-white/10 bg-black/40 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-black/60"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-xl text-orange-300">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">{benefit.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/60">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/12 to-black p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-orange-300">Comunidad</p>
                <p className="mt-3 text-5xl font-black text-white">+55,000</p>
                <p className="mt-3 text-base text-white/65">seguidores en crecimiento dentro de un entorno multiplataforma.</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-black/50 p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-white/45">Visualizaciones</p>
                <p className="mt-3 text-5xl font-black text-white">+15M</p>
                <p className="mt-3 text-base text-white/65">impactos generados a través de episodios y clips con potencial viral.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="redes" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 sm:p-10 lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Redes sociales</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Una audiencia activa que consume contenido largo y clips virales.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-black/40 px-6 py-5 transition hover:-translate-y-1 hover:border-orange-500/30 hover:bg-black/60"
                >
                  <div>
                    <p className="text-2xl text-orange-300">{social.icon}</p>
                    <p className="mt-3 text-lg font-semibold text-white">{social.name}</p>
                  </div>
                  <span className="text-white/35">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="sponsors" className="border-y border-white/8 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Para sponsors</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Haz crecer tu marca con Santoria
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
                Colaboramos con marcas que quieren integrarse de forma natural en contenido real, generando confianza y visibilidad.
              </p>
              <div className="mt-10 grid gap-4">
                {sponsorPoints.map((point) => (
                  <div key={point} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">✓</span>
                    <p className="text-base text-white/75">{point}</p>
                  </div>
                ))}
              </div>
              <a
                href="#contacto"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Quiero ser sponsor
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80"
                alt="Micrófono profesional y entorno premium de grabación"
                className="h-full min-h-[420px] w-full object-cover opacity-85"
              />
            </div>
          </div>
        </section>

        <section id="estudio" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=1400&q=80"
                alt="Estudio de podcast preparado para entrevistas y grabaciones profesionales"
                className="h-full min-h-[420px] w-full object-cover opacity-85"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Alquiler de estudio</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Graba tu propio contenido profesional
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
                Ofrecemos un estudio totalmente equipado para creadores, empresas y proyectos que buscan calidad profesional.
              </p>
              <div className="mt-10 grid gap-4">
                {studioPoints.map((point) => (
                  <div key={point} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">✓</span>
                    <p className="text-base text-white/75">{point}</p>
                  </div>
                ))}
              </div>
              <a
                href="#contacto"
                className="mt-10 inline-flex items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10 px-7 py-4 text-base font-semibold text-orange-200 transition hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-500/20"
              >
                Reservar estudio
              </a>
            </div>
          </div>
        </section>

        <section id="contacto" className="relative overflow-hidden border-t border-white/8 bg-[linear-gradient(180deg,rgba(249,115,22,0.07),rgba(9,9,9,1)_45%)]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Contacto</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">
                ¿Listo para colaborar o crear contenido con nosotros?
              </h2>
              <p className="mt-6 text-base text-white/60">
                O escríbenos directamente a{' '}
                <a href="mailto:management@santoriastudios.com" className="text-orange-400 hover:underline">
                  management@santoriastudios.com
                </a>
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-3xl rounded-[2rem] border border-white/10 bg-black/50 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <form
                action="https://formsubmit.co/management@santoriastudios.com"
                method="POST"
                className="grid gap-5"
              >
                <input type="hidden" name="_subject" value="Nuevo contacto desde Santoria Podcast" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_replyto" value="email" />

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-white/70">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-orange-500/50 focus:bg-white/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-orange-500/50 focus:bg-white/10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tipo" className="mb-2 block text-sm font-medium text-white/70">
                    Tipo de interés
                  </label>
                  <select
                    id="tipo"
                    name="tipo_interes"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-orange-500/50 focus:bg-white/10"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled className="bg-[#111] text-white/50">
                      Selecciona una opción
                    </option>
                    <option value="Sponsor" className="bg-[#111]">Sponsor</option>
                    <option value="Alquiler estudio" className="bg-[#111]">Alquiler estudio</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-white/70">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={6}
                    placeholder="Cuéntanos qué necesitas"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-orange-500/50 focus:bg-white/10"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
                >
                  Contactar
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
