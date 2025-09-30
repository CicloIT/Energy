// components/Videos.jsx
import { videos } from "./data/video";
import { VideoCard } from "./VideoCard";

const Videos = () => {
  return (
    <section className="max-w-7xl mx-auto m-5 p-6">
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
         Las Energías renovables son el futuro 
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
};

export default Videos;
