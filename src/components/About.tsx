
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  const facts = [
    {
      k: 'Education',
      v: 'Bachelor of Technology',
      s: 'Civil Engineering',
    },
    {
      k: 'Specialization',
      v: 'Interior Design',
      s: 'Residential & Commercial Spaces',
    },
    {
      k: 'Design Software',
      v: 'AutoCAD & SketchUp',
      s: '2D Drafting · 3D Modeling',
    },
    {
      k: 'Visualization',
      v: 'D5 Rendering',
      s: 'Realistic Renders · Lighting & Materials',
    },
  ];

  const skills = [
    'Interior Design',
    'Space Planning',
    'AutoCAD',
    'SketchUp',
    'D5 Rendering',
    '2D Drafting',
    '3D Modeling',
    'Material Selection',
    'Lighting Design',
    'Furniture Layout',
  ];

  return (
    <>
      <SectionHeading kicker="The Designer" title="About Me" />

      <div className="gutter grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        {/* Portrait */}
        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-none"
          initial={{
            opacity: 0,
            scale: 0.88,
            filter: 'blur(12px)',
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Tilt max={5} className="rounded-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#5a0b1b,#14060a_60%,#07070a)]" />

              <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />

              <img
                src="/assets/portrait-720.webp"
                srcSet={profile.portrait.srcSet}
                sizes="(max-width: 1024px) 90vw, 40vw"
                alt={profile.portrait.alt}
                loading="lazy"
                className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
              />

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">
                    INTERIOR DESIGNER
                  </p>

                  <p className="font-display text-3xl leading-none text-bone">
                    {profile.displayName}
                  </p>
                </div>

                <span className="rounded border border-white/30 px-1.5 text-[10px] font-bold text-bone">
                  DESIGN
                </span>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* About content */}
        <div>
          <motion.p
            className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] italic leading-[1.15] text-bone"
            initial={{
              opacity: 0,
              y: 24,
              filter: 'blur(8px)',
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            “{profile.intro}”
          </motion.p>

          <p className="mt-4 text-sm text-mist">
            — {profile.fullName}
          </p>

          {/* Education and design facts */}
          <motion.dl
            className="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {facts.map((fact) => (
              <motion.div
                key={fact.k}
                className="bg-ink-2 p-5"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 16,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: EASE,
                    },
                  },
                }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">
                  {fact.k}
                </dt>

                <dd className="mt-2 text-base font-semibold text-bone">
                  {fact.v}
                </dd>

                <dd className="mt-0.5 text-xs leading-relaxed text-mist">
                  {fact.s}
                </dd>
              </motion.div>
            ))}
          </motion.dl>

          {/* Professional skills */}
          <div className="mt-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">
              Design Skills
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="glass rounded-full px-3 py-1.5 text-xs font-medium text-bone"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Areas of interest */}
          <div className="mt-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">
              Design Interests
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                'Modern Interiors',
                'Residential Design',
                'Commercial Interiors',
                '3D Visualization',
              ].map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-mist"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
