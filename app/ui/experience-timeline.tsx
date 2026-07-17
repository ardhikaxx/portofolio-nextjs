"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experiences } from "../data/experience_data";

export default function ExperienceTimeline() {
  if (experiences.length === 0) return null;

  const sorted = [...experiences].sort((a, b) => {
    const aStart = a.period.split(" - ")[0];
    const bStart = b.period.split(" - ")[0];
    return new Date(bStart).getTime() - new Date(aStart).getTime();
  });

  return (
    <div className="w-full max-w-xl mx-auto mt-4 mb-4 text-left">
      {/* Section Header - Rata Kiri */}
      <div className="flex flex-col items-start text-left mb-3">
        <h3 className="text-white font-semibold text-sm sm:text-base tracking-wide text-left">Pengalaman Kerja</h3>
      </div>

      {/* Experience Cards - Warna Hitam, Ultra-Compact, Layout image.png, Rata Kiri, Tanpa Hover */}
      <div className="space-y-3 text-left">
        {sorted.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
          >
            <div className="relative rounded-xl bg-black/85 backdrop-blur-2xl border border-white/20 p-3.5 sm:p-4 shadow-xl flex flex-col sm:flex-row items-start gap-4 text-left">
              {/* Left Box: Logo Lebih Besar (w-16 h-16 sm:w-20 sm:h-20) */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl bg-white/10 border border-white/15 p-2 sm:p-2.5 flex items-center justify-center shadow-md">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  fill
                  className="object-contain p-1 sm:p-1.5"
                  sizes="80px"
                />
              </div>

              {/* Right Box: Ultra-Compact Stacked Text */}
              <div className="relative z-10 flex-1 min-w-0 w-full text-left">
                {/* Title (Role) - Compact */}
                <h4 className="text-white font-bold text-sm sm:text-base tracking-tight text-left leading-tight">
                  {exp.role}
                </h4>

                {/* Subtitle & Description - Compact */}
                <p className="text-white/90 font-medium text-[11px] sm:text-xs mt-0.5 text-left">
                  {exp.company} {exp.locationShort ? `· ${exp.locationShort}` : exp.location ? `· ${exp.location}` : ""}
                </p>
                <p className="text-white/70 text-[11px] sm:text-xs leading-normal mt-1 text-left">
                  {exp.description}
                </p>

                {/* Tanggung Jawab Utama - Ultra-Compact & Rata Kiri */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-white/15 w-full text-left">
                    <p className="text-[10px] sm:text-[11px] font-semibold text-white/90 uppercase tracking-wider mb-1 text-left">
                      Tanggung Jawab Utama
                    </p>
                    <ul className="space-y-0.5 text-left">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-white/75 text-left leading-snug">
                          <span className="w-1 h-1 rounded-full bg-white mt-1.5 shrink-0" />
                          <span className="leading-normal text-left">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Teknologi - Ultra-Compact Tags & Rata Kiri */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-white/15 flex flex-wrap items-center justify-start gap-1 text-left w-full">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono rounded bg-white/10 border border-white/20 text-white/90 text-left leading-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bottom Row - Ultra-Compact Period & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 mt-2 pt-2 border-t border-white/15 w-full text-left">
                  <span className="text-white/90 font-medium text-[10px] sm:text-[11px] font-mono text-left">
                    {exp.period}
                  </span>

                  <span className="px-2.5 py-0.5 rounded-md bg-white/15 border border-white/25 text-white font-mono text-[10px] sm:text-[11px] font-medium shadow-sm leading-tight">
                    Magang / Internship
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
