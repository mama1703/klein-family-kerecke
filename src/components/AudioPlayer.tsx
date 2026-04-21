import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

interface AudioPlayerProps {
  src: string;
  title?: string;
}

export function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(audio.duration);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => setPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const durationMinutes = duration ? Math.ceil(duration / 60) : null;

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    // RTL: progress bar goes right to left
    const clickX = rect.right - e.clientX;
    const ratio = clickX / rect.width;
    audio.currentTime = ratio * duration;
  };

  return (
    <div className="not-prose mb-10 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 shadow-sm">
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Header row */}
      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={togglePlay}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-800 text-white shadow transition hover:bg-stone-700 active:scale-95"
          aria-label={playing ? "השהה" : "הפעל"}
        >
          {playing ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" className="translate-x-0.5" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <Volume2 size={14} className="text-stone-400 shrink-0" />
            <span className="text-sm font-semibold text-stone-800 truncate">
              {title ?? "האזנה לפרק"}
            </span>
            {durationMinutes && (
              <span className="text-xs text-stone-400 shrink-0">
                {durationMinutes} דק׳
              </span>
            )}
          </div>

          {/* Progress bar */}
          <div
            className="relative h-2 w-full cursor-pointer rounded-full bg-stone-200 overflow-hidden"
            onClick={handleSeek}
            dir="rtl"
          >
            <div
              className="absolute right-0 top-0 h-full rounded-full bg-stone-700 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Times */}
          <div className="flex justify-between mt-1 text-xs text-stone-400" dir="ltr">
            <span>{formatTime(currentTime)}</span>
            {duration && <span>{formatTime(duration)}</span>}
          </div>
        </div>
      </div>

      {/* CTA text */}
      <p className="text-sm font-medium text-stone-700 text-center">
        לחץ להאזנה לפרק
        {durationMinutes && ` · ${durationMinutes} דקות האזנה`}
      </p>

      {/* Attribution */}
      <p className="mt-2 text-center text-xs text-stone-400 leading-relaxed">
        כל קבצי הסאונד הוקלטו על ידי הנינים — דור ההמשך של חיים ואווי (רחל) קליין
      </p>
    </div>
  );
}
