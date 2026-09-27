import { Suspense } from "react";
import AssetCard from "@/components/asset-card";
import Dropzone from "@/components/ui/dropzone";

interface Asset {
  id: string;
  name: string;
  status: "processing" | "ready" | "failed";
  tags: string[];
}

async function getAssets(): Promise<Asset[]> {
  return [
    { id: "1", name: "cyberpunk_neon_city.mp4", status: "ready", tags: ["3D", "Sci-Fi", "Neon"] },
    { id: "2", name: "avatar_generation_model.obj", status: "processing", tags: ["AI", "Mesh"] },
  ];
}

export default async function AssetsPage() {
  const assets = await getAssets();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 min-h-screen">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
          AI Asset Pipeline
        </h1>
        <p className="text-zinc-400">Управляйте медиа-активами в реальном времени.</p>
      </header>

      <section className="border border-dashed border-zinc-800 rounded-2xl p-6 bg-zinc-900/50 backdrop-blur-xl">
        <Dropzone />
      </section>

      <main className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-200">Активные ассеты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Suspense fallback={<div className="animate-pulse h-40 bg-zinc-900 rounded-xl" />}>
            {assets.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </Suspense>
        </div>
      </main>
    </div>
  );
}
