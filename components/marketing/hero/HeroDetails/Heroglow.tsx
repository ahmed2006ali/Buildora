// export default function HeroGlow() {
//   return (
//     <div
//       aria-hidden
//       className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
//     >
//       {/* Left Purple */}
//       <div
//         className="
//           absolute
//           left-[-220px]
//           top-[42%]
//           h-[700px]
//           w-[700px]
//           rounded-full
//           bg-accent/10
//           blur-[180px]
//           animate-[glowFloatLeft_18s_ease-in-out_infinite]
//           [mask-image:radial-gradient(circle,black_35%,transparent_85%)]
//         "
//       />

//       {/* Right Blue */}
//       <div
//         className="
//           absolute
//           right-[-220px]
//           top-[40%]
//           h-[700px]
//           w-[700px]
//           rounded-full
//           bg-highlight/10
//           blur-[180px]
//           animate-[glowFloatRight_22s_ease-in-out_infinite]
//           [mask-image:radial-gradient(circle,black_35%,transparent_85%)]
//         "
//       />

//       {/* Main Purple */}
//       <div
//         className="
//           absolute
//           left-1/2
//           top-[76%]
//           h-[420px]
//           w-[980px]
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-accent/14
//           blur-[140px]
//           animate-[glowFloatCenter_12s_ease-in-out_infinite]
//           [mask-image:linear-gradient(to_top,black_45%,transparent)]
//         "
//       />

//       {/* Green Accent */}
//       <div
//         className="
//           absolute
//           left-1/2
//           top-[73%]
//           h-[240px]
//           w-[420px]
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-primary/16
//           blur-[95px]
//           animate-[glowPulse_6s_ease-in-out_infinite]
//         "
//       />

//       {/* Small White Highlight */}
//       <div
//         className="
//           absolute
//           left-1/2
//           top-[70%]
//           h-[150px]
//           w-[150px]
//           -translate-x-1/2
//           rounded-full
//           bg-white/5
//           blur-[70px]
//         "
//       />
//     </div>
//   );
// }