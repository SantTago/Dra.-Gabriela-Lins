import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Toggle Play/Pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Update Progress Bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  // Seek video
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const seekTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  return (
    <section className="py-20 bg-brand-pink/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entenda a Osteopatia Pediátrica
          </h2>
          <p className="text-gray-600">
            Veja como o tratamento pode transformar a qualidade de vida do seu bebê.
          </p>
        </div>

        {/* Custom JS Player Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-black group">
          <video
            ref={videoRef}
            className="w-full h-auto aspect-video object-cover cursor-pointer"
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            poster="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" // Placeholder poster
            playsInline
          >
             {/* Using a sample generic video for demonstration purposes as no specific video file was provided */}
            <source src="https://videos.pexels.com/video-files/3256542/3256542-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>

          {/* Overlay Play Button (Big) - Disappears when playing */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity duration-300"
              onClick={togglePlay}
            >
              <div className="w-20 h-20 bg-brand-pink/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg backdrop-blur-sm">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>
          )}

          {/* Controls Bar */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
            <div className="flex flex-col gap-2">
              {/* Progress Bar */}
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer accent-brand-pink hover:h-1.5 transition-all"
              />
              
              <div className="flex justify-between items-center text-white">
                <div className="flex items-center gap-4">
                  <button onClick={togglePlay} className="hover:text-brand-pink transition-colors">
                    {isPlaying ? <Pause size={24} /> : <Play size={24} fill="currentColor" />}
                  </button>
                  <button onClick={toggleMute} className="hover:text-brand-pink transition-colors">
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                </div>
                <div className="text-sm font-medium">
                  Assista ao vídeo explicativo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
