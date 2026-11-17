import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export type TechCategoryName =
  | "Frontend Development"
  | "Backend Development"
  | "Database"
  | "Cloud & Deployment"
  | "System Design"
  | "Mobile Development"
  | "UI/UX Design"
  | "AI & Automation"
  | "DevOps & Security";

export interface TechItem {
  name: string;
  svg: React.ReactNode;
}

export const techStackData: Record<TechCategoryName, TechItem[]> = {
  "Frontend Development": [
    {
      name: "React.js",
      svg: (
        <svg viewBox="0 0 115 100" className="w-8 h-8">
          <ellipse cx="57.5" cy="50" rx="9" ry="9" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="4.5" fill="none">
            <ellipse cx="57.5" cy="50" rx="52" ry="20" />
            <ellipse cx="57.5" cy="50" rx="52" ry="20" transform="rotate(60 57.5 50)" />
            <ellipse cx="57.5" cy="50" rx="52" ry="20" transform="rotate(120 57.5 50)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Next.js",
      svg: (
        <svg viewBox="0 0 180 180" className="w-8 h-8">
          <circle cx="90" cy="90" r="90" fill="#000" />
          <path fill="#fff" d="M149.5 146.5L72.2 46.5H54.5v87h15V66.2l67.8 87.8c4.2-2.3 8.3-4.8 12.2-7.5z" />
          <rect x="110.5" y="46.5" width="15" height="87" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "Angular",
      svg: (
        <svg viewBox="0 0 250 250" className="w-8 h-8">
          <polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" />
          <polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2" />
          <polygon fill="#FFFFFF" points="125,52.1 66,183.8 88.5,183.8 100.8,153.4 149.2,153.4 161.5,183.8 184,183.8" />
          <polygon fill="#DD0031" points="125,94.5 110.4,130.4 139.6,130.4" />
        </svg>
      ),
    },
    {
      name: "Vue.js",
      svg: (
        <svg viewBox="0 0 261 226" className="w-8 h-8">
          <path fill="#42b883" d="M161 0H214L130.5 144.5L47 0H100L130.5 53z" />
          <path fill="#35495e" d="M100 0H47L130.5 144.5L214 0H161L130.5 53z" />
          <path fill="#42b883" d="M0 0l130.5 226L261 0h-47L130.5 144.5L47 0z" />
          <path fill="#35495e" d="M47 0l83.5 144.5L214 0h-37L130.5 81L84 0z" />
        </svg>
      ),
    },
    {
      name: "HTML5",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#E44D26" d="M19 116L9 4h110l-10 112-45 12z" />
          <path fill="#F16529" d="M64 117l36-10 8-94H64z" />
          <path fill="#EBEBEB" d="M64 53H46l-1-15h19V24H30l4 43h30zm0 37l-15-4-1-11H34l2 24 28 8z" />
          <path fill="#FFF" d="M64 53h18l-2 20-16 4v14l28-8 3-45H64zm0-29v14h32l1-14z" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#1572B6" d="M19 116L9 4h110l-10 112-45 12z" />
          <path fill="#33A9DC" d="M64 117l36-10 8-94H64z" />
          <path fill="#EBEBEB" d="M64 53H47l-1-14h18V24H31l3 43h30zm0 37l-15-4-1-11H34l2 24 28 8z" />
          <path fill="#FFF" d="M64 53h18l-2 20-16 4v14l28-8 3-45H64zm0-29v14h32l1-14z" />
        </svg>
      ),
    },
    {
      name: "JavaScript (ES6+)",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="16" fill="#F7DF1E" />
          <path fill="#000" d="M34 100c4 3 9 5 15 5 11 0 17-6 17-17V46H52v42c0 5-2 8-7 8-3 0-6-1-8-3l-3 7zm58-1c4 2 8 4 13 4 8 0 12-4 12-9 0-6-4-8-12-12-13-5-19-10-19-20 0-10 8-18 20-18 6 0 11 1 15 4l-4 9c-3-2-7-3-11-3-6 0-9 3-9 7 0 5 4 7 11 10 14 6 20 11 20 21 0 12-9 20-23 20-7 0-13-2-17-4l5-9z" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path fill="#FFF" d="M60.5 50.2H46.4V98H35.8V50.2H21.7v-9h38.8v9zm19.8 48.6c-7.3 0-13.1-2.2-17.5-6.6-4.3-4.4-6.5-10.4-6.5-17.9v-2.2h10.4v2c0 4.8 1.3 8.6 3.9 11.4 2.6 2.8 6.1 4.2 10.5 4.2 3.8 0 6.9-1.1 9.2-3.2 2.3-2.1 3.5-4.9 3.5-8.3 0-2.8-.9-5.1-2.8-6.9-1.8-1.8-5-3.3-9.5-4.5l-6.1-1.6c-7.1-1.8-12.2-4.4-15.4-7.8-3.1-3.4-4.7-7.9-4.7-13.4 0-6.6 2.2-12 6.6-16.1 4.4-4.2 10.3-6.2 17.6-6.2 7.1 0 12.7 2 16.9 6.1 4.2 4.1 6.3 9.7 6.3 16.8v2.3H87.9v-2.2c0-4.3-1.2-7.7-3.6-10.1-2.4-2.4-5.6-3.6-9.6-3.6-3.5 0-6.4 1-8.5 3-2.1 2-3.2 4.6-3.2 7.9 0 2.5.9 4.6 2.6 6.2 1.7 1.6 4.7 2.9 8.9 4.1l6.1 1.6c7.5 1.9 12.8 4.6 16.1 8.2 3.2 3.6 4.9 8.2 4.9 14 0 6.8-2.2 12.2-6.7 16.4-4.5 4.1-10.4 6.2-17.7 6.2z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#38BDF8" d="M64 36c-16 0-26 8-30 24 6-8 13-11 21-9 5 1 8 4 12 8 6 6 13 13 27 13 16 0 26-8 30-24-6 8-13 11-21 9-5-1-8-4-12-8-6-6-13-13-27-13zm-30 28c-16 0-26 8-30 24 6-8 13-11 21-9 5 1 8 4 12 8 6 6 13 13 27 13 16 0 26-8 30-24-6 8-13 11-21 9-5-1-8-4-12-8-6-6-13-13-27-13z" />
        </svg>
      ),
    },
    {
      name: "Bootstrap",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="28" fill="#7952B3" />
          <path fill="#FFF" d="M48 38h20c10 0 16 5 16 12 0 5-3 9-8 11 7 2 10 7 10 13 0 8-7 14-17 14H48V38zm13 19h7c4 0 6-2 6-5s-2-5-6-5h-7v10zm0 20h8c4 0 7-2 7-6s-3-6-7-6h-8v12z" />
        </svg>
      ),
    },
    {
      name: "Material UI",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#007FFF" d="M64 8l52 30v60L64 128 12 98V38L64 8z" />
          <path fill="#FFF" opacity="0.3" d="M64 8l52 30-52 30-52-30 52-30z" />
          <path fill="#FFF" opacity="0.5" d="M64 68l52-30v60l-52 30V68z" />
          <path fill="#FFF" opacity="0.8" d="M12 38l52 30v60l-52-30V38z" />
        </svg>
      ),
    },
    {
      name: "Framer Motion",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="16" fill="#0055FF" />
          <path fill="#FFF" d="M34 26h60v38H64L34 26zm0 38h30l30 38H64L34 64zm0 0l30 38H34V64z" />
        </svg>
      ),
    },
  ],

  "Backend Development": [
    {
      name: "Node.js",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#539E43" d="M64 4.5l54.8 31.6v63.3L64 123.5 9.2 99.4V36.1L64 4.5z" />
          <path fill="#FFF" d="M64 36c-13.2 0-21.7 7.5-21.7 19.3 0 12.2 8.7 18.2 20.2 20.3l5.5 1c7.2 1.3 10.8 3.5 10.8 7.5 0 4.5-4 7.6-10.4 7.6-6.8 0-11.4-3.3-12-8.8h-9.2c.7 10.6 8.7 16.8 21.3 16.8 13.5 0 22.3-7.5 22.3-19.1 0-12.7-8.9-18.7-20.7-20.9l-5.4-1c-6.8-1.2-10.2-3.4-10.2-7 0-4.4 3.7-7.4 9.6-7.4 5.9 0 9.8 2.8 10.6 7.5h8.9c-.8-9.4-7.9-15.8-19.6-15.8z" />
        </svg>
      ),
    },
    {
      name: "Express.js",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#000" />
          <text x="64" y="73" fill="#FFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="24" textAnchor="middle" letterSpacing="-1">
            ex
          </text>
        </svg>
      ),
    },
    {
      name: "Spring Boot",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#6DB33F" />
          <path fill="#FFF" d="M64 26c-21 0-38 17-38 38 0 18 12 33 29 37 3-12 11-21 21-25 1-13-5-26-17-31 15 3 24 16 23 31 11-4 18-14 20-26 0-1 0-2 .1-3-4-12-16-21-30-21z" />
          <circle cx="78" cy="84" r="8" fill="#FFF" />
        </svg>
      ),
    },
    {
      name: "Java",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#5382A1" d="M46.7 93.8c7.4 1.8 16.4 2.1 23.4.3 0 0-4.2 2.3-11.2 2.7-7 .4-12.2-3-12.2-3zM42.4 83.2c12.2 2.2 28.5 2.5 39.8-.7 0 0-3.3 1.9-8.7 2.5-9.8 1-22.3-.3-31.1-1.8z" />
          <path fill="#E76F00" d="M65.4 46.2c4.7 5.5-1.3 10.9-1.3 10.9s11.8-6.1 6.4-14c-5.5-8-9.6-11.9 13.3-25.1 0 0-27.7 7.5-18.4 28.2zm19.8 28.2c6.1-4.9 3.2-9.6 3.2-9.6s.8 2.2-1.9 4.3c-7.3 5.7-18.2 5.5-25.4 5.3-14.4-.4-22.9-4.2-22.9-4.2s3.6 2.2 12.6 3.8c12.7 2.3 27.6 1.7 34.4-.4z" />
          <path fill="#5382A1" d="M78.6 63.8c12.2-14.2-6.5-20.9-6.5-20.9s4.8 5-2.2 12.5c-8.9 9.5-1.5 14.6 8.7 8.4zM36.1 104.8c15.7 1 32.5.6 47.9-1.7 0 0-3.8 2.2-11.5 2.8-14.2 1.1-28.7.4-36.4-1.1z" />
        </svg>
      ),
    },
    {
      name: "PHP",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <ellipse cx="64" cy="64" rx="60" ry="38" fill="#777BB4" />
          <ellipse cx="64" cy="64" rx="55" ry="33" fill="#4F5B93" />
          <text x="64" y="74" fill="#FFF" fontFamily="Arial, sans-serif" fontWeight="900" fontStyle="italic" fontSize="32" textAnchor="middle">
            php
          </text>
        </svg>
      ),
    },
    {
      name: "Laravel",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#FF2D20" />
          <path fill="#FFF" d="M30 46l24-14 24 14-24 14-24-14zm0 24l24 14v28l-24-14V70zm48 42l24-14V70l-24 14v28zm-20-40l24-14 24 14-24 14-24-14z" />
        </svg>
      ),
    },
    {
      name: "Python",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#3776AB" d="M63.5 8c-26 0-24.3 11.3-24.3 11.3l.1 11.7h24.7v3.5H30.4S15.6 32.8 15.6 59c0 26.2 13 25.4 13 25.4h7.8V72.9s-.4-13.5 13.3-13.5h22.8s12.8.2 12.8-12.6V20.7S87 8 63.5 8zm-13.2 7.3c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z" />
          <path fill="#FFD43B" d="M64.5 120c26 0 24.3-11.3 24.3-11.3l-.1-11.7H64v-3.5h33.6s14.8 1.7 14.8-24.5c0-26.2-13-25.4-13-25.4h-7.8v11.5s.4 13.5-13.3 13.5H55.5s-12.8-.2-12.8 12.6v26.1s-1.8 12.7 21.8 12.7zm13.2-7.3c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z" />
        </svg>
      ),
    },
    {
      name: "FastAPI",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#009688" />
          <path fill="#FFF" d="M66 22L36 68h24l-4 38 34-48H66l4-36z" />
        </svg>
      ),
    },
    {
      name: ".NET",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="58" fill="#512BD4" />
          <circle cx="28" cy="74" r="6" fill="#FFF" />
          <path fill="#FFF" d="M42 44h10.5l14 26.5V44H77v40H66.5L52.5 57.5V84H42V44zm40 0h19.5v8H89v8h11v8H89v8h13.5v8H82V44z" />
        </svg>
      ),
    },
  ],

  Database: [
    {
      name: "MySQL",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#00758F" d="M64 16C37.5 16 16 37.5 16 64s21.5 48 48 48 48-21.5 48-48S90.5 16 64 16zm0 18c18 0 32.8 13.5 35.4 31.1-7.8-8-19.1-13.1-31.4-13.1-13.2 0-25.1 5.9-33.1 15C36.8 48.7 49.1 34 64 34z" />
          <path fill="#F29111" d="M82 64c0 9.9-8.1 18-18 18s-18-8.1-18-18 8.1-18 18-18c5 0 9.5 2 12.7 5.3L71 55c-1.8-1.8-4.3-3-7-3-5.5 0-10 4.5-10 10s4.5 10 10 10c4.8 0 8.8-3.4 9.8-8H64v-6h18z" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#336791" d="M64 12c-28.7 0-52 23.3-52 52 0 17.5 8.7 33 22.1 42.4 1.8-5.3 4.2-11.4 6.8-17.2-4.1-3.6-7-8.6-8.2-14.4-1.6-7.8.4-16.1 5.4-22.3 6.8-8.4 17.5-12.8 28.2-11.8 11.2 1 21.2 7.7 26.5 17.5 4.3 8 4.7 17.6 1.1 25.9-2.8 6.5-7.8 11.7-14.1 14.8 2.6 5.8 5 11.9 6.8 17.2 13.4-9.4 22.1-24.9 22.1-42.4 0-28.7-23.3-52-52.7-41.7z" />
          <path fill="#FFF" d="M52 56c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm20 0c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#47A248" d="M64 6.5c-4 5.3-26.5 35.8-26.5 60.5 0 23.5 14.8 44.5 25.5 50.5 1.5.8 2 1.2 2.5 2V6.5h-1.5z" />
          <path fill="#499D4A" d="M64 6.5c4 5.3 26.5 35.8 26.5 60.5 0 23.5-14.8 44.5-25.5 50.5-1.5.8-2 1.2-2.5 2V6.5h1.5z" />
        </svg>
      ),
    },
    {
      name: "SQL Server",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="16" fill="#CC292B" />
          <path fill="#FFF" d="M34 42c0-7 13-12 30-12s30 5 30 12-13 12-30 12-30-5-30-12zm0 18c0 7 13 12 30 12s30-5 30-12v12c0 7-13 12-30 12s-30-5-30-12V60zm0 24c0 7 13 12 30 12s30-5 30-12v12c0 7-13 12-30 12s-30-5-30-12V84z" />
        </svg>
      ),
    },
    {
      name: "Firebase Firestore",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#FFA000" d="M26 95l18-72c.8-3 5-3.8 6.9-1.2l15 21L26 95z" />
          <path fill="#F57C00" d="M84 41l-19-19c-2-2-5.4-1.2-6.2 1.5L26 95l58-54z" />
          <path fill="#FFCA28" d="M102 95L90 28c-.5-3-4.2-4.2-6.4-2.1L26 95l34 19c2.4 1.3 5.4 1.3 7.8 0l34.2-19z" />
        </svg>
      ),
    },
    {
      name: "Supabase",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#1C1C1C" />
          <path fill="#3ECF8E" d="M68 18L26 72h36l-4 38 44-54H66l4-38z" />
        </svg>
      ),
    },
    {
      name: "Redis",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#D82C20" d="M14 42l50-24 50 24-50 24-50-24z" />
          <path fill="#A32017" d="M14 42l50 24v22L14 64V42zm100 0L64 66v22l50-24V42z" />
          <path fill="#D82C20" d="M14 64l50 24 50-24v22l-50 24-50-24V64z" />
          <circle cx="64" cy="42" r="6" fill="#FFF" opacity="0.8" />
        </svg>
      ),
    },
  ],

  "Cloud & Deployment": [
    {
      name: "AWS",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#232F3E" d="M38.6 62.5l-6-20.7-6 20.7H16l14.2-43.2h12.5l14.2 43.2H38.6zm-6-29.3l-2.4 9.6h4.8l-2.4-9.6zm41.2 29.3l-5.3-25.2-5.4 25.2h-9.8l-9.3-43.2h10.8l5.2 26.8 5.4-26.8h7.4l5.4 26.8 5.2-26.8h10.8l-9.3 43.2h-11.1zm33.4-1.2c-5.8 0-10.4-1.9-13.8-5.7l6.6-6c2.2 2.6 4.6 3.9 7.2 3.9 2.5 0 3.8-1 3.8-2.5 0-1.4-.9-2.3-3.8-3.1l-5.6-1.5c-6.2-1.7-9.3-5-9.3-10.1 0-6.8 5.3-11.2 13.9-11.2 5.1 0 9.2 1.5 12.3 4.5l-6 6c-2-1.8-4.2-2.7-6.3-2.7-2.3 0-3.6.9-3.6 2.3 0 1.2.9 2.1 3.6 2.8l5.6 1.5c6.6 1.8 9.9 5.2 9.9 10.3 0 7.4-5.6 11.5-14.5 11.5z" />
          <path fill="#FF9900" d="M22.8 84.8C42.4 98.7 70.3 102 96.5 91.8c2.9-1.1 5.7-2.6 8.4-4.2 1.4-.9 2.9.8 1.9 2.2-6.5 9.1-17.7 15.2-30.8 16.7-19.8 2.2-39.7-5-54.8-18.7-.9-.8-.1-2.1 1.6-3z" />
          <path fill="#FF9900" d="M109.8 82.2c1.2-1.5 7.1-3.4 9.9-1.2 1.3 1 1.2 3.6-.3 5.4-2.8 3.5-7.7 5.4-11.9 5.8-.8.1-1.3-.7-1-1.4 1-2.4 2.1-6.8 3.3-8.6z" />
        </svg>
      ),
    },
    {
      name: "Microsoft Azure",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#0089D6" d="M37.3 18.5l36.5 54.8-32.8 36.2H12l25.3-91z" />
          <path fill="#005BA1" d="M60.6 85.5L84.8 61.2 116 109.5H60.6z" />
          <path fill="#0078D4" d="M116 109.5H41l25.8-28.5 49.2 28.5z" />
        </svg>
      ),
    },
    {
      name: "Google Cloud Platform",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#EA4335" d="M47.7 44.8L61.6 30.9C55 24.3 45.8 20.2 35.7 20.2 19.3 20.2 5.5 31.6 2 46.9l19.1 3.5c1.8-8.1 9.1-14.2 17.8-14.2 3.2 0 6.2.8 8.8 8.4z" />
          <path fill="#4285F4" d="M103.8 62.3c0-1.8-.2-3.6-.5-5.3-2.1-12.7-12.9-22.5-26.1-22.5-8.5 0-16.1 4.1-20.8 10.4L42.5 58.8c.8 1.6 1.3 3.4 1.3 5.3 0 6.6-5.4 12-12 12-1.8 0-3.5-.4-5.1-1.2L8.2 92.5c6.2 6.5 15 10.5 24.8 10.5h69.2c14.2 0 25.8-11.6 25.8-25.8 0-12.8-9.4-23.4-21.7-25.2l-2.5.3z" />
          <path fill="#FBBC05" d="M32.8 103c-8.9 0-16.9-3.6-22.7-9.5L8.2 92.5l18.5-17.6c1.6.8 3.3 1.2 5.1 1.2 6.6 0 12-5.4 12-12 0-1.9-.5-3.7-1.3-5.3l13.9-13.9c2.3-3.1 5.3-5.6 8.8-7.3L47.7 44.8c-2.6-7.6-5.6-8.4-8.8-8.4-8.7 0-16 6.1-17.8 14.2L2 46.9C.7 52.4 0 58.1 0 64c0 21.5 17.5 39 39 39h-6.2z" />
          <path fill="#34A853" d="M102.2 103H32.8c-8.9 0-16.9-3.6-22.7-9.5l23.8-23c1.6 1.4 3.7 2.2 6 2.2h62.3c8.8 0 16-7.2 16-16 0-3.3-1-6.4-2.8-8.9l10.4-10.4c4.6 5.3 7.4 12.2 7.4 19.8 0 14.2-11.6 25.8-25.8 25.8z" />
        </svg>
      ),
    },
    {
      name: "DigitalOcean",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#0080FF" />
          <path fill="#FFF" d="M64 26v22c15.5 0 28 12.5 28 28h22c0-27.6-22.4-50-50-50zm0 76c-15.5 0-28-12.5-28-28h-22c0 27.6 22.4 50 50 50v-22z" />
          <rect x="24" y="64" width="12" height="12" fill="#FFF" />
          <rect x="36" y="76" width="10" height="10" fill="#FFF" />
        </svg>
      ),
    },
    {
      name: "Hostinger VPS",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#673DE6" />
          <path fill="#FFF" d="M40 34h14v60H40V34zm34 0h14v60H74V34zM54 58h20v12H54V58z" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#000" />
          <polygon fill="#FFF" points="64,28 100,90 28,90" />
        </svg>
      ),
    },
    {
      name: "Netlify",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#00C7B7" />
          <path fill="#FFF" d="M38 52l18 12-18 12 10 16 26-18V48l-26-18-10 16zm52 0l-18 12 18 12-10 16-26-18V48l26-18 10 16z" />
        </svg>
      ),
    },
    {
      name: "Render",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#1A1F2C" />
          <path fill="#46E3B7" d="M64 24a40 40 0 00-40 40v40h32V64a8 8 0 0116 0v40h32V64a40 40 0 00-40-40z" />
        </svg>
      ),
    },
    {
      name: "Railway",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#0B0D0E" />
          <path fill="#FFF" d="M28 40h72v12H28V40zm0 24h72v12H28V64zm0 24h72v12H28V88z" />
          <path fill="#F43F5E" d="M46 30v68h12V30H46zm24 0v68h12V30H70z" />
        </svg>
      ),
    },
    {
      name: "Docker",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#2496ED" d="M124 55.4c-2.7-.4-10.8-.9-16.6 3.6-4.6-3.8-11.1-4.7-17-2.6-3.8 1.3-6.9 4-9.3 7.3H12c-2.2 0-4 1.8-4 4 0 11.2 4.1 22.1 11.5 30.3 9.4 10.4 22.8 16.4 36.8 16.4 28.5 0 52.2-18.1 59.9-44.4 7.2-.6 12.5-4.8 13.8-6.1-1.7-3.9-6-7.7-12-8.5zM27.2 56h10.4v10.4H27.2V56zm13.6 0h10.4v10.4H40.8V56zm13.6 0h10.4v10.4H54.4V56zm0-13.6h10.4v10.4H54.4V42.4zm13.6 13.6h10.4v10.4H68V56zm0-13.6h10.4v10.4H68V42.4zm13.6 13.6H92v10.4H81.6V56zm0-13.6H92v10.4H81.6V42.4zm-40.8 0h10.4v10.4H40.8V42.4z" />
        </svg>
      ),
    },
    {
      name: "Nginx",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <polygon fill="#009639" points="64,8 116,36 116,92 64,120 12,92 12,36" />
          <path fill="#FFF" d="M42 42h12l32 44V42h12v44H86L54 42v44H42V42z" />
        </svg>
      ),
    },
    {
      name: "Cloudflare",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#F38020" d="M96 52c-2.4-13.5-14.2-24-28.5-24-11.4 0-21.2 6.6-25.9 16.3C39.5 45 37 47 35.5 50c-13.2 1.3-23.5 12.5-23.5 26 0 14.4 11.6 26 26 26h58c11 0 20-9 20-20 0-10.4-8-18.9-18-19.8-.7-.1-1.3-.1-2-.2z" />
        </svg>
      ),
    },
    {
      name: "GitHub Actions",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#181717" d="M64 12C35.3 12 12 35.3 12 64c0 23 14.9 42.4 35.6 49.3 2.6.5 3.6-1.1 3.6-2.5v-9c-14.5 3.1-17.5-6.9-17.5-6.9-2.4-6-5.8-7.6-5.8-7.6-4.7-3.2.4-3.1.4-3.1 5.2.4 8 5.3 8 5.3 4.6 8 12.2 5.7 15.2 4.3 1.3-4.8 3.5-7.7 5.8-9.5-11.6-1.3-23.7-5.8-23.7-25.7 0-5.7 2-10.3 5.3-13.9-.5-1.3-2.3-6.6.5-13.8 0 0 4.4-1.4 14.3 5.3 4.1-1.1 8.6-1.7 13.1-1.7s9 0.6 13.1 1.7c9.9-6.7 14.3-5.3 14.3-5.3 2.8 7.1 1.1 12.4.5 13.8 3.3 3.6 5.3 8.2 5.3 13.9 0 20-12.2 24.4-23.8 25.7 2.4 2 4.5 6 4.5 12.2v18c0 1.4 1 3 3.6 2.5C101.1 106.4 116 87 116 64c0-28.7-23.3-52-52-52z" />
        </svg>
      ),
    },
  ],

  "System Design": [
    {
      name: "Monolithic Architecture",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect x="24" y="24" width="80" height="80" rx="14" fill="#0284C7" />
          <rect x="36" y="36" width="56" height="14" rx="4" fill="#FFF" />
          <rect x="36" y="56" width="56" height="14" rx="4" fill="#BAE6FD" />
          <rect x="36" y="76" width="56" height="14" rx="4" fill="#38BDF8" />
        </svg>
      ),
    },
    {
      name: "Microservices",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#F0FDF4" stroke="#22C55E" strokeWidth="4" />
          <rect x="30" y="30" width="22" height="22" rx="6" fill="#16A34A" />
          <rect x="76" y="30" width="22" height="22" rx="6" fill="#16A34A" />
          <rect x="30" y="76" width="22" height="22" rx="6" fill="#16A34A" />
          <rect x="76" y="76" width="22" height="22" rx="6" fill="#16A34A" />
          <path d="M52 41h24M52 87h24M41 52v24M87 52v24" stroke="#22C55E" strokeWidth="3" strokeDasharray="3 3" />
        </svg>
      ),
    },
    {
      name: "REST APIs",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#6366F1" />
          <text x="64" y="74" fill="#FFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="28" textAnchor="middle">
            API
          </text>
        </svg>
      ),
    },
    {
      name: "API Gateway",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#0F172A" />
          <path d="M30 64h24m20 0h24M64 30v20m0 28v20" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" />
          <circle cx="64" cy="64" r="14" fill="#0284C7" stroke="#FFF" strokeWidth="3" />
        </svg>
      ),
    },
    {
      name: "Authentication",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#ECFDF5" stroke="#10B981" strokeWidth="4" />
          <rect x="42" y="56" width="44" height="38" rx="8" fill="#10B981" />
          <path d="M50 56v-14a14 14 0 0128 0v14" fill="none" stroke="#047857" strokeWidth="6" strokeLinecap="round" />
          <circle cx="64" cy="74" r="4" fill="#FFF" />
        </svg>
      ),
    },
    {
      name: "Caching",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#EF4444" />
          <path d="M68 24L38 70h24l-4 34 34-46H68l4-34z" fill="#FFF" />
        </svg>
      ),
    },
    {
      name: "CDN",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#F8FAFC" stroke="#F97316" strokeWidth="4" />
          <circle cx="64" cy="64" r="32" fill="none" stroke="#F97316" strokeWidth="3" />
          <ellipse cx="64" cy="64" rx="14" ry="32" fill="none" stroke="#F97316" strokeWidth="3" />
          <line x1="32" y1="64" x2="96" y2="64" stroke="#F97316" strokeWidth="3" />
          <circle cx="64" cy="32" r="5" fill="#C2410C" />
          <circle cx="64" cy="96" r="5" fill="#C2410C" />
          <circle cx="32" cy="64" r="5" fill="#C2410C" />
          <circle cx="96" cy="64" r="5" fill="#C2410C" />
        </svg>
      ),
    },
    {
      name: "Message Queues",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#8B5CF6" />
          <rect x="24" y="50" width="20" height="28" rx="4" fill="#FFF" />
          <rect x="54" y="50" width="20" height="28" rx="4" fill="#DDD6FE" />
          <rect x="84" y="50" width="20" height="28" rx="4" fill="#C4B5FD" />
          <path d="M24 88h80M88 82l8 6-8 6" stroke="#FFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "WebSockets",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#0284C7" />
          <path d="M38 52h44M74 42l12 10-12 10M90 76H46M54 66l-12 10 12 10" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Scalability",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#10B981" />
          <path d="M32 96l24-24 16 16 32-36M84 52h20v20" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      name: "High Availability",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#F59E0B" />
          <circle cx="64" cy="64" r="36" fill="none" stroke="#FFF" strokeWidth="6" strokeDasharray="12 6" />
          <path d="M64 42v22l14 14" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Monitoring",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#3B82F6" />
          <path d="M26 68h18l12-24 16 44 14-26 10 10 16-4" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      name: "Security",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#0F172A" d="M64 12L24 28v36c0 26 17 48 40 54 23-6 40-28 40-54V28L64 12z" />
          <path d="M54 64l8 8 18-18" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
  ],

  "Mobile Development": [
    {
      name: "Android Development",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#3DDC84" d="M38 52c-4 0-8 3-8 8v36c0 4 4 8 8 8s8-4 8-8V60c0-5-4-8-8-8zm52 0c-4 0-8 3-8 8v36c0 4 4 8 8 8s8-4 8-8V60c0-5-4-8-8-8zm-26-28l6-11c.6-1.2.1-2.6-1-3.2-1.2-.6-2.6-.1-3.2 1l-6.5 12c-5-2-10.4-3.2-16.3-3.2s-11.3 1.2-16.3 3.2L32.2 11c-.6-1.1-2-1.6-3.2-1-1.1.6-1.6 2-1 3.2l6 11C20.6 31.8 12 44.5 12 59h104c0-14.5-8.6-27.2-22-35zM41 42c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm46 0c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
        </svg>
      ),
    },
    {
      name: "iOS Development",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#000" d="M88.5 67.8c-.2-15 12.2-22.3 12.7-22.6-7-10.2-17.8-11.6-21.7-11.8-9.2-.9-18.1 5.5-22.7 5.5-4.8 0-12-5.3-19.7-5.2-10.1.2-19.5 5.9-24.7 15-10.6 18.3-2.7 45.4 7.5 60.2 5 7.3 11 15.4 18.9 15.1 7.5-.3 10.4-4.8 19.5-4.8 9 0 11.6 4.8 19.5 4.7 8.1-.1 13.2-7.4 18.2-14.7 5.7-8.4 8.1-16.5 8.2-16.9-.2-.1-15.6-6-15.8-24.5zM77.4 23.9c4.1-5 6.9-12 6.1-18.9-5.9.2-13.1 4-17.4 8.9-3.7 4.3-7 11.4-6.1 18.2 6.6.5 13.3-3.2 17.4-8.2z" />
        </svg>
      ),
    },
    {
      name: "React Native",
      svg: (
        <svg viewBox="0 0 115 100" className="w-8 h-8">
          <ellipse cx="57.5" cy="50" rx="9" ry="9" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="4.5" fill="none">
            <ellipse cx="57.5" cy="50" rx="52" ry="20" />
            <ellipse cx="57.5" cy="50" rx="52" ry="20" transform="rotate(60 57.5 50)" />
            <ellipse cx="57.5" cy="50" rx="52" ry="20" transform="rotate(120 57.5 50)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Flutter",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#02569B" d="M78 8L22 64l18 18L96 26z" />
          <path fill="#0175C2" d="M78 68l-36 36 18 18 36-36z" />
          <path fill="#29B6F6" d="M96 86l-18-18-18 18 18 18z" />
        </svg>
      ),
    },
    {
      name: "Expo",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#000" />
          <path fill="#FFF" d="M34 94l28-44 14 22-14 22H34zm30-48l16-24h28L64 94 48 70l16-24z" />
        </svg>
      ),
    },
    {
      name: "Kotlin",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#7F52FF" d="M12 12h104L64 64 12 12z" />
          <path fill="#C711E1" d="M12 12l52 52L12 116V12z" />
          <path fill="#E4485D" d="M64 64l52 52H12l52-52z" />
        </svg>
      ),
    },
    {
      name: "Java (Android)",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#3DDC84" d="M64 12C37.5 12 16 33.5 16 60v8h96v-8c0-26.5-21.5-48-48-48z" />
          <circle cx="44" cy="40" r="5" fill="#FFF" />
          <circle cx="84" cy="40" r="5" fill="#FFF" />
          <path fill="#E76F00" d="M42 80c10 2 24 2 34 0v16c-10 2-24 2-34 0V80z" />
          <path fill="#5382A1" d="M36 100c14 2 32 2 46 0v6c-14 2-32 2-46 0v-6z" />
        </svg>
      ),
    },
    {
      name: "Swift (iOS)",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="28" fill="#F05138" />
          <path fill="#FFF" d="M102 85c-15-18-36-26-58-24 16 8 26 22 26 22s-28-14-50 4c28 22 68 18 82-2z" />
        </svg>
      ),
    },
    {
      name: "App Store Deployment",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="28" fill="#1E90FF" />
          <path fill="#FFF" d="M64 24l8 16h24l-12 18 8 24-20-14-20 14 8-24-12-18h24z" />
          <circle cx="64" cy="88" r="8" fill="#FFF" />
        </svg>
      ),
    },
    {
      name: "Google Play Deployment",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#4285F4" d="M22 18v92l52-46-52-46z" />
          <path fill="#EA4335" d="M74 64l18 16 16-10L22 18l52 46z" />
          <path fill="#FBBC04" d="M108 70c3-2 3-6 0-8l-16-10-18 12 18 12 16-6z" />
          <path fill="#34A853" d="M74 64L22 110l86-52-16-10-18 16z" />
        </svg>
      ),
    },
  ],

  "UI/UX Design": [
    {
      name: "Figma",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#0ACF83" d="M44 114c11 0 20-9 20-20V74H44c-11 0-20 9-20 20s9 20 20 20z" />
          <path fill="#A259FF" d="M24 54c0-11 9-20 20-20h20v40H44c-11 0-20-9-20-20z" />
          <path fill="#F24E1E" d="M24 14c0-11 9-20 20-20h20v40H44C33 34 24 25 24 14z" />
          <path fill="#FF7262" d="M64-6h20c11 0 20 9 20 20s-9 20-20 20H64V-6z" />
          <path fill="#1ABCFE" d="M104 54c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20z" />
        </svg>
      ),
    },
    {
      name: "Adobe XD",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="24" fill="#470137" />
          <text x="36" y="80" fill="#FF61F6" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="42">
            X
          </text>
          <text x="68" y="80" fill="#FF61F6" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="42">
            d
          </text>
        </svg>
      ),
    },
    {
      name: "Responsive Design",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#2563EB" />
          <rect x="22" y="32" width="56" height="42" rx="4" fill="none" stroke="#FFF" strokeWidth="4" />
          <rect x="68" y="50" width="38" height="48" rx="6" fill="#1D4ED8" stroke="#FFF" strokeWidth="4" />
          <circle cx="87" cy="90" r="3" fill="#FFF" />
        </svg>
      ),
    },
    {
      name: "Wireframing",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#475569" />
          <rect x="24" y="24" width="80" height="80" rx="8" fill="none" stroke="#CBD5E1" strokeWidth="4" strokeDasharray="6 4" />
          <line x1="24" y1="48" x2="104" y2="48" stroke="#CBD5E1" strokeWidth="4" />
          <line x1="56" y1="48" x2="56" y2="104" stroke="#CBD5E1" strokeWidth="4" />
        </svg>
      ),
    },
    {
      name: "Prototyping",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#7C3AED" />
          <path d="M44 38l44 26-44 26V38z" fill="#FFF" />
          <circle cx="44" cy="38" r="6" fill="#DDD6FE" />
          <circle cx="88" cy="64" r="6" fill="#DDD6FE" />
          <circle cx="44" cy="90" r="6" fill="#DDD6FE" />
        </svg>
      ),
    },
    {
      name: "Design Systems",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#0EA5E9" />
          <rect x="28" y="28" width="30" height="30" rx="8" fill="#FFF" />
          <circle cx="85" cy="43" r="15" fill="#BAE6FD" />
          <polygon points="43,72 58,100 28,100" fill="#BAE6FD" />
          <rect x="70" y="72" width="30" height="30" rx="8" fill="#FFF" />
        </svg>
      ),
    },
    {
      name: "Accessibility (WCAG)",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#059669" />
          <circle cx="64" cy="34" r="10" fill="#FFF" />
          <path d="M30 54h68M64 54v34l16 22M64 88l-16 22" stroke="#FFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
  ],

  "AI & Automation": [
    {
      name: "OpenAI API",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#10A37F" />
          <path fill="#FFF" d="M88 56a18 18 0 00-1-9 19 19 0 00-12-10 18 18 0 00-18-2 19 19 0 00-11 7 19 19 0 00-7 13 18 18 0 00-9 11 19 19 0 002 18 19 19 0 001 9 19 19 0 0012 10 18 18 0 0018 2 19 19 0 0011-7 19 19 0 007-13 18 18 0 009-11 19 19 0 00-2-18zm-24 20a12 12 0 1112-12 12 12 0 01-12 12z" />
        </svg>
      ),
    },
    {
      name: "Google Gemini API",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#1E293B" />
          <path fill="url(#gemini-grad)" d="M64 16c0 26.5-21.5 48-48 48 26.5 0 48 21.5 48 48 0-26.5 21.5-48 48-48-26.5 0-48-21.5-48-48z" />
          <defs>
            <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="50%" stopColor="#9B72CB" />
              <stop offset="100%" stopColor="#D96570" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "OCR Solutions",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#4F46E5" />
          <rect x="28" y="24" width="72" height="80" rx="8" fill="#FFF" opacity="0.15" />
          <path d="M36 44h36M36 60h56M36 76h42" stroke="#FFF" strokeWidth="5" strokeLinecap="round" />
          <path d="M22 36V22h14M92 22h14v14M22 92v14h14M106 92v14H92" stroke="#A5B4FC" strokeWidth="5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "AI Chatbots",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#8B5CF6" />
          <rect x="30" y="38" width="68" height="52" rx="14" fill="#FFF" />
          <circle cx="50" cy="62" r="6" fill="#6D28D9" />
          <circle cx="78" cy="62" r="6" fill="#6D28D9" />
          <path d="M54 74c3 3 7 4 10 4s7-1 10-4" stroke="#6D28D9" strokeWidth="4" strokeLinecap="round" />
          <path d="M64 22v16M22 64h8M98 64h8" stroke="#DDD6FE" strokeWidth="5" strokeLinecap="round" />
          <circle cx="64" cy="20" r="4" fill="#DDD6FE" />
        </svg>
      ),
    },
    {
      name: "Document Processing",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#0284C7" />
          <path d="M36 24h38l22 22v58H36V24z" fill="#FFF" />
          <path d="M74 24v22h22" fill="#BAE6FD" />
          <path d="M48 58h32M48 72h32M48 86h20" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Prescription Scanner",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#0D9488" />
          <rect x="32" y="24" width="64" height="80" rx="8" fill="#FFF" />
          <path d="M64 42v28M50 56h28" stroke="#0D9488" strokeWidth="7" strokeLinecap="round" />
          <path d="M22 64h84" stroke="#F43F5E" strokeWidth="4" strokeDasharray="6 4" />
        </svg>
      ),
    },
    {
      name: "Workflow Automation",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#EA580C" />
          <circle cx="44" cy="44" r="14" fill="#FFF" />
          <circle cx="84" cy="44" r="14" fill="#FFEDD5" />
          <circle cx="64" cy="84" r="14" fill="#FFF" />
          <path d="M58 44h12M48 58l12 16M80 58l-12 16" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ),
    },
  ],

  "DevOps & Security": [
    {
      name: "Docker",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#2496ED" d="M124 55.4c-2.7-.4-10.8-.9-16.6 3.6-4.6-3.8-11.1-4.7-17-2.6-3.8 1.3-6.9 4-9.3 7.3H12c-2.2 0-4 1.8-4 4 0 11.2 4.1 22.1 11.5 30.3 9.4 10.4 22.8 16.4 36.8 16.4 28.5 0 52.2-18.1 59.9-44.4 7.2-.6 12.5-4.8 13.8-6.1-1.7-3.9-6-7.7-12-8.5zM27.2 56h10.4v10.4H27.2V56zm13.6 0h10.4v10.4H40.8V56zm13.6 0h10.4v10.4H54.4V56zm0-13.6h10.4v10.4H54.4V42.4zm13.6 13.6h10.4v10.4H68V56zm0-13.6h10.4v10.4H68V42.4zm13.6 13.6H92v10.4H81.6V56zm0-13.6H92v10.4H81.6V42.4zm-40.8 0h10.4v10.4H40.8V42.4z" />
        </svg>
      ),
    },
    {
      name: "Docker Compose",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#1D63ED" />
          <rect x="30" y="30" width="28" height="28" rx="4" fill="#FFF" />
          <rect x="70" y="30" width="28" height="28" rx="4" fill="#93C5FD" />
          <rect x="50" y="70" width="28" height="28" rx="4" fill="#FFF" />
          <path d="M44 58v26h6M84 58v26h-6" stroke="#BFDBFE" strokeWidth="4" />
        </svg>
      ),
    },
    {
      name: "CI/CD Pipelines",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#4338CA" />
          <path d="M38 64c0-12 10-20 20-20 14 0 18 40 32 40 10 0 18-8 18-20s-8-20-18-20c-14 0-18 40-32 40-10 0-20-8-20-20z" fill="none" stroke="#FFF" strokeWidth="8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "GitHub Actions",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#181717" d="M64 12C35.3 12 12 35.3 12 64c0 23 14.9 42.4 35.6 49.3 2.6.5 3.6-1.1 3.6-2.5v-9c-14.5 3.1-17.5-6.9-17.5-6.9-2.4-6-5.8-7.6-5.8-7.6-4.7-3.2.4-3.1.4-3.1 5.2.4 8 5.3 8 5.3 4.6 8 12.2 5.7 15.2 4.3 1.3-4.8 3.5-7.7 5.8-9.5-11.6-1.3-23.7-5.8-23.7-25.7 0-5.7 2-10.3 5.3-13.9-.5-1.3-2.3-6.6.5-13.8 0 0 4.4-1.4 14.3 5.3 4.1-1.1 8.6-1.7 13.1-1.7s9 0.6 13.1 1.7c9.9-6.7 14.3-5.3 14.3-5.3 2.8 7.1 1.1 12.4.5 13.8 3.3 3.6 5.3 8.2 5.3 13.9 0 20-12.2 24.4-23.8 25.7 2.4 2 4.5 6 4.5 12.2v18c0 1.4 1 3 3.6 2.5C101.1 106.4 116 87 116 64c0-28.7-23.3-52-52-52z" />
        </svg>
      ),
    },
    {
      name: "GitLab CI",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#E24329" d="M64 116l24.5-75.5H39.5L64 116z" />
          <path fill="#FC6D26" d="M64 116L39.5 40.5H12L64 116z" />
          <path fill="#FCA326" d="M12 40.5l-8 24.8c-.8 2.5 0 5.3 2.2 6.9L64 116 12 40.5z" />
          <path fill="#E24329" d="M12 40.5h27.5L25 4.5c-1-3-5.2-3-6.2 0L12 40.5z" />
          <path fill="#FC6D26" d="M64 116l24.5-75.5H116L64 116z" />
          <path fill="#FCA326" d="M116 40.5l8 24.8c.8 2.5 0 5.3-2.2 6.9L64 116l52-75.5z" />
          <path fill="#E24329" d="M116 40.5H88.5L103 4.5c1-3 5.2-3 6.2 0l6.8 36z" />
        </svg>
      ),
    },
    {
      name: "SSL Certificates",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#10B981" />
          <rect x="40" y="54" width="48" height="42" rx="8" fill="#FFF" />
          <path d="M48 54V40a16 16 0 0132 0v14" fill="none" stroke="#FFF" strokeWidth="8" strokeLinecap="round" />
          <circle cx="64" cy="72" r="5" fill="#059669" />
          <path d="M64 77v8" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Firewall Configuration",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#DC2626" />
          <rect x="24" y="32" width="80" height="64" rx="4" fill="none" stroke="#FFF" strokeWidth="5" />
          <line x1="24" y1="53" x2="104" y2="53" stroke="#FFF" strokeWidth="4" />
          <line x1="24" y1="74" x2="104" y2="74" stroke="#FFF" strokeWidth="4" />
          <line x1="50" y1="32" x2="50" y2="53" stroke="#FFF" strokeWidth="4" />
          <line x1="78" y1="32" x2="78" y2="53" stroke="#FFF" strokeWidth="4" />
          <line x1="64" y1="53" x2="64" y2="74" stroke="#FFF" strokeWidth="4" />
          <line x1="44" y1="74" x2="44" y2="96" stroke="#FFF" strokeWidth="4" />
          <line x1="84" y1="74" x2="84" y2="96" stroke="#FFF" strokeWidth="4" />
        </svg>
      ),
    },
    {
      name: "Backup & Recovery",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#0284C7" />
          <path d="M40 64a24 24 0 1146 12M40 44v20h20" stroke="#FFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M64 52v16l10 6" stroke="#FFF" strokeWidth="5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Monitoring",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <rect width="128" height="128" rx="20" fill="#E11D48" />
          <circle cx="64" cy="64" r="38" fill="none" stroke="#FFF" strokeWidth="5" strokeDasharray="6 4" />
          <line x1="64" y1="64" x2="84" y2="44" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
          <circle cx="64" cy="64" r="6" fill="#FFF" />
        </svg>
      ),
    },
    {
      name: "Performance Optimization",
      svg: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <circle cx="64" cy="64" r="56" fill="#D97706" />
          <path d="M30 84a44 44 0 1168 0" fill="none" stroke="#FFF" strokeWidth="8" strokeLinecap="round" />
          <line x1="64" y1="64" x2="82" y2="46" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
          <circle cx="64" cy="64" r="6" fill="#FFF" />
        </svg>
      ),
    },
  ],
};

export const technologyCategories: TechCategoryName[] = [
  "Frontend Development",
  "Backend Development",
  "Database",
  "Cloud & Deployment",
  "System Design",
  "Mobile Development",
  "UI/UX Design",
  "AI & Automation",
  "DevOps & Security",
];

interface TechnologyStackSectionProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  showPortfolioLink?: boolean;
  className?: string;
}

export const TechnologyStackSection: React.FC<TechnologyStackSectionProps> = ({
  badgeText = "TECHNOLOGY STACK",
  title = "Technology Stack",
  subtitle = "Modern technologies for modern business challenges.",
  showPortfolioLink = true,
  className = "py-12 lg:py-16 bg-white border-y border-slate-100",
}) => {
  const [activeTechCategory, setActiveTechCategory] =
    useState<TechCategoryName>("Frontend Development");

  const activeTechItems = techStackData[activeTechCategory] || [];

  return (
    <section className={className}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 mb-1.5">
              <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                {badgeText}
              </span>
              <ArrowRight size={13} className="text-blue-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1435] tracking-tight mb-1.5">
              {title}
            </h2>
            <p className="text-slate-500 text-sm">{subtitle}</p>
          </div>

          {showPortfolioLink && (
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-blue-700 transition-colors"
            >
              View All Technologies
              <ArrowRight size={13} />
            </Link>
          )}
        </div>

        {/* Filter Pills with Horizontal Scroll on mobile */}
        <div className="flex items-center gap-2 mb-6 pb-2.5 border-b border-slate-100 overflow-x-auto no-scrollbar scroll-smooth">
          {technologyCategories.map((category) => {
            const isActive = activeTechCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveTechCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer ${isActive
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <motion.div
          key={activeTechCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3"
        >
          {activeTechItems.map((tech, idx) => (
            <div
              key={idx}
              className="py-3.5 px-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-blue-400 hover:-translate-y-0.5 transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-xs">
                {tech.svg}
              </div>
              <h4 className="text-[12px] font-bold text-slate-800 leading-tight">
                {tech.name}
              </h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
