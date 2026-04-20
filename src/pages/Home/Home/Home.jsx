import { useEffect, useState } from "react";
import FloorSelector from "../../../components/FloorSelector";
import CarouselSection from "../Carousel/CarouselSection";
import useAuth from "../../../hooks/useAuth";

const HOME_CONTENT_KEY = "home-page-editable-content-v1";

const defaultContent = {
  banner: {
    bgImage:
      "https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/banner-1.jpg",
    titlePrefix: "Buil",
    titleSuffix: "ding",
    subtitle: "Vision In",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here normal distribution",
    ctaText: "Discover More",
    ctaLink: "/about-us",
  },
  welcome: {
    title: "Construction Company With Strategy In Business Growth",
    lead: "We have been the trusted name in heating, air conditioning and plumbing businesses. Throughout the years, our number one goal.",
    description:
      "For over 80 years, We have been the trusted name in heating, air conditioning and plumbing businesses. Throughout the years, our number one goal has been to accurately.",
  },
  keyPoints: {
    title: "Why Choose Us",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    points: [
      "Experienced Construction Professional",
      "Committted to Helping Our Clients",
      "Building Maintenance & Renovation",
      "Innovative Eco Power Technologies",
    ],
  },
  services: [
    {
      title: "Architecture Design",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Building Renovation",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Flooring & Roofing",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Building Construction",
      image:
        "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  works: [
    {
      image:
        "https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/gallery-1.jpg",
      cat: "Alfa Projects",
      title: "Renovation Of Roof",
    },
    {
      image:
        "https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/gallery-2.jpg",
      cat: "Alfa Projects",
      title: "Construction Projects",
    },
    {
      image:
        "https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/gallery-3.jpg",
      cat: "Alfa Projects",
      title: "General Construction",
    },
    {
      image:
        "https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/gallery-4.jpg",
      cat: "Alfa Projects",
      title: "Home Construction",
    },
  ],
  testimonials: [
    {
      quote:
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.",
      name: "Albert Joe",
      role: "Ceo of Finda",
      image:
        "https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/testimonial-6-70x70.jpg",
    },
    {
      quote:
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.",
      name: "Adam Jumpa",
      role: "Ceo of Finda",
      image:
        "https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/testimonial-4-70x70.jpg",
    },
  ],
  blogPosts: [
    {
      image:
        "https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/blog-12-370x272.jpg",
      comments: "0 Comments",
      title: "Normal that has evolved from generation on",
    },
    {
      image:
        "https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/blog-13-370x272.jpg",
      comments: "3 Comments",
      title: "How to hire a Contractor Home Renovation",
    },
    {
      image:
        "https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/blog-14-370x272.jpg",
      comments: "0 Comments",
      title: "Know the secreat of buildnox work",
    },
  ],
  contact: {
    address: "54B, Tailstoi Town 5238 MT",
    email: "info@example.com",
    phone: "+1800-456-7890",
  },
};

const Home = () => {
  const { user } = useAuth();
  const [content, setContent] = useState(defaultContent);
  const [draft, setDraft] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const [msg, setMsg] = useState("");

  const isAdmin =
    user?.role === "admin" ||
    localStorage.getItem("userRole") === "admin" ||
    (typeof user?.email === "string" && user.email.toLowerCase().includes("admin"));

  useEffect(() => {
    try {
      const raw = localStorage.getItem(HOME_CONTENT_KEY);
      if (!raw) return;
      setContent({ ...defaultContent, ...JSON.parse(raw) });
    } catch {
      // ignore malformed local storage
    }
  }, []);

  useEffect(() => {
    setDraft(JSON.stringify(content, null, 2));
  }, [content]);

  const saveDraft = () => {
    try {
      const parsed = JSON.parse(draft);
      const merged = { ...defaultContent, ...parsed };
      setContent(merged);
      localStorage.setItem(HOME_CONTENT_KEY, JSON.stringify(merged));
      setMsg("Home content saved.");
    } catch {
      setMsg("JSON format invalid. Please fix and save again.");
    }
  };

  const resetContent = () => {
    localStorage.removeItem(HOME_CONTENT_KEY);
    setContent(defaultContent);
    setMsg("Home content reset to default.");
  };

  return (
    <div className="space-y-0">
      {isAdmin && (
        <div className="sticky top-20 z-40 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setShowEditor((prev) => !prev)}
                className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800"
              >
                {showEditor ? "Hide Home Editor" : "Edit Home Content"}
              </button>
              <button
                type="button"
                onClick={saveDraft}
                className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={resetContent}
                className="rounded-lg bg-rose-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-rose-600"
              >
                Reset Default
              </button>
              {msg && <p className="text-xs text-slate-600">{msg}</p>}
            </div>
            {showEditor && (
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                className="mt-3 h-72 w-full rounded-lg border border-slate-300 bg-slate-50 p-3 font-mono text-xs text-slate-800"
              />
            )}
          </div>
        </div>
      )}

      <section
        className="relative overflow-hidden bg-cover bg-center pb-20 pt-40 text-white lg:pb-28 lg:pt-72"
        style={{
          backgroundImage: `url(${content.banner.bgImage})`,
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-[10%] top-0 h-full w-px bg-white/15" />
          <span className="absolute left-[30%] top-0 h-full w-px bg-white/15" />
          <span className="absolute left-1/2 top-0 h-full w-px bg-white/15" />
          <span className="absolute left-[70%] top-0 h-full w-px bg-white/15" />
          <span className="absolute left-[90%] top-0 h-full w-px bg-white/15" />
        </div>

        <img
          src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/image-2.png"
          alt="Building visual"
          className="pointer-events-none absolute bottom-0 right-0 hidden max-w-[42%] lg:block"
        />
        <img
          src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/image-1.png"
          alt="Worker visual"
          className="pointer-events-none absolute bottom-0 right-[16%] hidden max-w-[28%] lg:block"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:ml-24">
            <h6 className="text-xs font-black uppercase tracking-[0.7em] text-white/90">{content.banner.subtitle}</h6>
            <h1 className="mt-3 mb-6 text-6xl font-black uppercase leading-none sm:text-7xl lg:text-[176px]">
              {content.banner.titlePrefix}
              <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.55)]">
                {content.banner.titleSuffix}
              </span>
            </h1>
            <p className="max-w-md text-sm leading-7 text-white/90 sm:text-base">
              {content.banner.description}
            </p>
            <a
              href={content.banner.ctaLink}
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-rose-200"
            >
              {content.banner.ctaText}
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 text-white lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="relative inline-block">
                <img
                  src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/image-1.jpg"
                  alt="Awesome Image"
                  className="h-[430px] w-full max-w-md object-cover"
                />
                <div className="absolute bottom-0 right-0">
                  <img
                    src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/shape-1.png"
                    alt="Awesome Image"
                    className="h-28 w-28 object-contain"
                  />
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
                <span className="inline-block h-[2px] w-8 bg-rose-500" />
                welcome to company
              </h6>
              <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl">
                {content.welcome.title}
              </h2>
              <p className="mb-6 text-lg font-medium text-slate-200">
                {content.welcome.lead}
              </p>
              <p className="mb-8 text-base text-slate-300">
                {content.welcome.description}
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <img
                  src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/author-1.jpg"
                  alt="Awesome Image"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-slate-100">Robert Joe Kerry</p>
                  <p className="text-sm text-slate-300">Founder</p>
                </div>
                <img
                  src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/signature.png"
                  alt="Awesome Image"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f3f8] py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h6 className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
              <span className="inline-block h-[2px] w-8 bg-rose-500" />
              What we do
            </h6>
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Our Services That We Provide</h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              If you need to repair or replace your Plumbing system, call today and talk to one of our
              Plumbing specialists. They&apos;ll answer all your questions and arrange an appointment at your
              convenience.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-6">
              {content.services.map((card) => (
                <article key={card.title} className="w-[270px] overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
                  <div className="p-4">
                    <h3 className="text-[28px] leading-8 font-semibold text-slate-900">
                      {card.title.split(" ")[0]} <br /> {card.title.split(" ").slice(1).join(" ")}
                    </h3>
                  </div>
                  <div className="relative">
                    <img src={card.image} alt={card.title} className="h-[138px] w-full object-cover" />
                    <a
                      href="/services"
                      className="absolute bottom-2 left-2 inline-flex items-center gap-2 rounded bg-slate-950/80 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                    >
                      Read More
                      <span>➜</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-400 text-slate-700 hover:bg-white">
              ←
            </button>
            <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-400 text-slate-700 hover:bg-white">
              →
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] py-12 lg:py-16">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <div className="space-y-5 bg-white p-6 sm:p-8">
            <h6 className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
              <span className="inline-block h-[2px] w-8 bg-rose-500" />
              Our Key points
            </h6>
            <h2 className="text-4xl font-black text-slate-900">{content.keyPoints.title}</h2>
            <p className="text-sm leading-7 text-slate-600">
              {content.keyPoints.description}
            </p>

            <ul className="space-y-2 text-base font-medium text-slate-800">
              {content.keyPoints.points.map((point) => (
                <li key={point} className="flex items-center gap-2"><span className="text-rose-500">◉</span>{point}</li>
              ))}
            </ul>

            <div className="space-y-4 pt-2">
              <div>
                <div className="mb-1 flex justify-between text-sm font-semibold text-slate-700">
                  <span>Construction</span><span>96%</span>
                </div>
                <div className="h-2 w-full bg-slate-200">
                  <div className="h-2 bg-rose-500" style={{ width: "96%" }} />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm font-semibold text-slate-700">
                  <span>Renovation</span><span>82%</span>
                </div>
                <div className="h-2 w-full bg-slate-200">
                  <div className="h-2 bg-rose-500" style={{ width: "82%" }} />
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/author-2.jpg"
                  alt="Awesome Image"
                  className="h-16 w-16 rounded-sm object-cover"
                />
                <span className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs text-white">
                  ☎
                </span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-rose-400">call for contractor now</p>
                <a href="tel:+1800-(676)-5432" className="text-2xl font-bold text-slate-900 hover:text-rose-500">
                  +1800-(676)-5432
                </a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop"
              alt="Awesome Image"
              className="h-full min-h-[540px] w-full object-cover opacity-60"
            />
            <a
              href="https://www.youtube.com/watch?v=XHOmBV4js_E"
              target="_blank"
              rel="noreferrer"
              className="absolute right-0 top-0 inline-flex h-20 w-20 -translate-y-1/3 items-center justify-center bg-rose-500 text-2xl text-white"
            >
              ▶
            </a>
            <div className="absolute inset-x-0 bottom-0 bg-slate-950/90 p-6 text-white">
              <h6 className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-rose-300">
                <span className="inline-block h-[2px] w-8 bg-rose-500" />
                Bigger, Better, Faster
              </h6>
              <h3 className="mt-3 text-3xl font-black">
                Leading Way In Civil
                <br />
                Construction
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Bring to the table win-win survival strategies to ensure proactive domination.
              </p>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white hover:text-rose-300"
              >
                request a call back
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-10 text-white lg:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-end">
          <div className="space-y-2">
            <h6 className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-rose-300">
              <span className="inline-block h-[2px] w-8 bg-rose-500" />
              our work
            </h6>
            <h2 className="text-3xl font-black">Explore Recent Projects</h2>
          </div>
          <div className="lg:justify-self-end">
            <a href="/services" className="btn rounded-md border-none bg-rose-500 px-6 text-white hover:bg-rose-600">
              View All Projects
            </a>
          </div>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-6">
          {content.works.map((item) => (
            <article key={item.title} className="group relative w-[438px] overflow-hidden">
              <img src={item.image} alt={item.title} className="h-[422px] w-full object-cover" />
              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/45" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-sm text-slate-100/90">{item.cat}</p>
                <h4 className="text-2xl font-semibold text-white">{item.title}</h4>
              </div>
            </article>
          ))}
          </div>
        </div>
        </div>
      </section>

      <section className="bg-slate-100 py-6 lg:py-10">
        <div className="mx-auto w-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
          <h1 className="text-[34px] font-black uppercase leading-none text-transparent [ -webkit-text-stroke:1.5px_rgba(15,23,42,0.15)] sm:text-[56px] lg:text-[92px]">
            Technology Civil Construction
          </h1>
        </div>
      </section>

      <section className="bg-slate-100 py-10 lg:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-block">
                <img
                  src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/03/roller.png"
                  alt="Awesome Image"
                  className="h-[380px] w-full max-w-md object-cover"
                />
              </div>
            </div>
            <div>
              <h6 className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
                <span className="inline-block h-[2px] w-8 bg-rose-500" />
                About company
              </h6>
              <h2 className="mb-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                We Provide the Guaranteed
                <br />
                Quality in Construction
              </h2>
              <p className="mb-6 text-sm leading-7 text-slate-600">
                Bring to the table win-win survival strategies to ensure proactive domination. At the end
                of the day, going forward, a new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-500">👷</span>
                    <h4 className="text-xl font-semibold text-slate-900">
                      Professional
                      <br />
                      Team
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    Our gutter protection simply works better than any other product.
                  </p>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-500">🏗</span>
                    <h4 className="text-xl font-semibold text-slate-900">
                      Quality
                      <br />
                      Service
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    Simply works our gutter protection better than any other product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-10 text-white lg:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h6 className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-rose-300">
                <span className="inline-block h-[2px] w-8 bg-rose-500" />
                Testimonials
              </h6>
              <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                What They&apos;re
                <br />
                Talking About
                <br />
                Comapany ?
              </h2>
            </div>

            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <article className="relative bg-white p-5 text-slate-800">
                  <p className="text-2xl text-rose-300">❝</p>
                  <p className="mt-2 text-sm leading-7">
                    {content.testimonials[0]?.quote}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src={content.testimonials[0]?.image}
                      alt="Author"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{content.testimonials[0]?.name}</p>
                      <p className="text-xs text-slate-500">{content.testimonials[0]?.role}</p>
                    </div>
                  </div>
                </article>

                <article className="relative bg-white p-5 text-slate-800">
                  <p className="text-2xl text-rose-300">❝</p>
                  <p className="mt-2 text-sm leading-7">
                    {content.testimonials[1]?.quote}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src={content.testimonials[1]?.image}
                      alt="Author"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{content.testimonials[1]?.name}</p>
                      <p className="text-xs text-slate-500">{content.testimonials[1]?.role}</p>
                    </div>
                  </div>
                </article>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 text-slate-200 hover:bg-slate-800">
                  ←
                </button>
                <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 text-slate-200 hover:bg-slate-800">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <h6 className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
                <span className="inline-block h-[2px] w-8 bg-rose-500" />
                From the blog
              </h6>
              <h2 className="text-4xl font-black text-slate-900">New &amp; Articles</h2>
            </div>
            <p className="max-w-lg text-sm text-slate-600 lg:justify-self-end">
              Going forward, a new normal that has evolved from generation is on the runway
              heading towards a streamlined.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.blogPosts.map((post) => (
              <article key={post.title} className="group">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[272px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="relative border border-slate-200 bg-white p-5">
                  <div className="absolute -top-10 right-5 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-rose-500 text-white">
                    <span className="text-2xl font-bold leading-none">29</span>
                    <span className="text-sm">Mar</span>
                  </div>
                  <p className="text-sm font-medium text-slate-500">admin <span className="mx-1">/</span> {post.comments}</p>
                  <h4 className="mt-3 text-xl font-semibold leading-8 text-slate-900">{post.title}</h4>
                  <a href="/contact" className="mt-5 inline-block text-sm font-bold uppercase tracking-wide text-rose-500 hover:text-rose-600">
                    continue reading
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-slate-200" />
            <div className="relative text-center">
              <h5 className="inline-block bg-white px-6 text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
                We worked with royal clients
              </h5>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
            <div className="flex justify-center">
              <img src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/04/brand-logo-1.png" alt="Awesome Image" className="h-8 w-auto object-contain opacity-80" />
            </div>
            <div className="flex justify-center">
              <img src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/04/brand-logo-2.png" alt="Awesome Image" className="h-8 w-auto object-contain opacity-80" />
            </div>
            <div className="flex justify-center">
              <img src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/04/brand-logo-3.png" alt="Awesome Image" className="h-8 w-auto object-contain opacity-80" />
            </div>
            <div className="flex justify-center">
              <img src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/04/brand-logo-4.png" alt="Awesome Image" className="h-8 w-auto object-contain opacity-80" />
            </div>
            <div className="flex justify-center">
              <img src="https://wp1.themevibrant.com/newwp/buildnox2/wp-content/uploads/2023/04/brand-logo-5.png" alt="Awesome Image" className="h-8 w-auto object-contain opacity-80" />
            </div>
          </div>

          <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
            contact
          </p>
          
          <div className="mt-4 grid grid-cols-1 gap-3 bg-slate-950 p-4 text-sm text-slate-200 sm:grid-cols-3">
            <p>Address: {content.contact.address}</p>
            <p>Email: {content.contact.email}</p>
            <p>Call: {content.contact.phone}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-10 lg:py-14">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-3">
          <div className="border border-slate-200 bg-white p-4 shadow-sm">
            <FloorSelector />
          </div>
        </div>
        <div className="lg:col-span-9">
          <div className="border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            <CarouselSection />
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Home;
