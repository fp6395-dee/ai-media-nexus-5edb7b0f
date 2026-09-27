"use client";

export default function Dropzone() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center cursor-pointer group">
      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-3 group-hover:bg-zinc-700 transition">
        <span className="text-zinc-400 group-hover:text-zinc-200 text-xl">+</span>
      </div>
      <p className="text-sm text-zinc-300 font-medium">Перетащите файлы сюда или кликните для загрузки</p>
      <p className="text-xs text-zinc-500 mt-1">Поддерживаются видео, 3D-модели (OBJ, GLTF) и изображения до 500MB</p>
    </div>
  );
}
