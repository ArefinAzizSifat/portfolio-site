export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-white dark:bg-slate-950"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-70 dark:opacity-40"></div>
      {/* Radial glow spots */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_60%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.22),transparent_60%)]"></div>
      <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.16),transparent_60%)] dark:bg-[radial-gradient(circle,rgba(99,102,241,0.2),transparent_60%)]"></div>
    </div>
  );
}
