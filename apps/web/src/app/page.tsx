import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent mb-4">
        AI MEDIA NEXUS
      </h1>
      <p className="text-zinc-400 mb-8 max-w-md">Платформа управления медиа-активами нового поколения с интеграцией ИИ.</p>
      <Link href="/assets" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-xl transition">
        Открыть Dashboard Pipeline
      </Link>
    </div>
  );
}
