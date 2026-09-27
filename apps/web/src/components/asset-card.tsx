"use client";

export default function AssetCard({ asset }: { asset: any }) {
  return (
    <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-3 hover:border-zinc-700 transition">
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-zinc-100 truncate max-w-[200px]">{asset.name}</h3>
        <span className={`text-xs px-2 py-1 rounded-full font-mono ${asset.status === 'ready' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
          {asset.status}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {asset.tags.map((tag: string) => (
          <span key={tag} className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">#{tag}</span>
        ))}
      </div>
    </div>
  );
}
