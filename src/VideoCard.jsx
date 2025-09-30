// components/VideoCard.jsx
import { ExternalLink } from "lucide-react";

export function VideoCard({ video }) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-red-100">
      {/* Miniatura */}
      <img
        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.title}
        className="w-full h-48 object-cover"
      />

      {/* Contenido */}
      <div className="p-4 flex flex-col">
        <h4 className="font-semibold text-gray-900 mb-2 text-lg leading-snug line-clamp-2">
          {video.title}
        </h4>
        <p className="text-sm text-gray-500 italic mb-2">{video.canal}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {video.description}
        </p>
        <a
          href={`https://youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-red-600 hover:text-red-800 font-medium transition-colors mt-auto"
        >
          Ver en YouTube
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
