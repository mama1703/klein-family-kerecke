import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  src: string;
  title?: string;
}

const SPEEDS = [1, 1.2, 1.5, 2];

export function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [showSpeeds, setShowSpeeds] = useState(false);

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
    if (playing) { audio.pause(); } else { audio.play(); }
    setPlaying(!playing);
  };

  const changeSpeed = (s: number) => {
    const audio = audioRef.current;
    if (audio) audio.playbackRate = s;
    setSpeed(s);
    setShowSpeeds(false);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = rect.right - e.clientX;
    audio.currentTime = (clickX / rect.width) * duration;
  };

  return (
    <div className="not-prose mb-10 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 shadow-sm">
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={togglePlay}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-800 text-white shadow transition hover:bg-stone-700 active:scale-95"
          aria-label={playing ? "השהה" : "הפעל"}
        >
          {playing
            ? <Pause size={16} fill="white" />
            : <Play size={16} fill="white" className="translate-x-0.5" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-sm font-semibold text-stone-800 truncate">
              {title ?? "האזנה לפרק"}
            </span>

            <div className="relative shrink-0">
              <button
                onClick={() => setShowSpeeds(!showSpeeds)}
                className="flex items-center gap-1 rounded-md border border-stone-300 bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-700 hover:bg-stone-200 transition-colors"
              >
                <span className="text-xs text-stone-500 ml-1">מהירות</span>
                {speed}×
                <span className="text-[9px]">▾</span>
              </button>
              {showSpeeds && (
                <div className="absolute left-0 top-full mt-1 z-10 rounded-lg border border-stone-200 bg-white shadow-md overflow-hidden">
                  {SPEEDS.map((s) => (
                    <button
                      key={s}
                      onClick={() => changeSpeed(s)}
                      className={`block w-full px-4 py-1.5 text-right text-sm transition-colors hover:bg-stone-100 ${
                        speed === s ? "font-semibold text-stone-900" : "text-stone-600"
                      }`}
                    >
                      {s}×
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div
            className="relative h-1.5 w-full cursor-pointer rounded-full bg-stone-200 overflow-hidden"
            onClick={handleSeek}
            dir="rtl"
          >
            <div
              className="absolute right-0 top-0 h-full rounded-full bg-stone-700 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between mt-1 text-xs text-stone-400" dir="ltr">
            <span>{formatTime(currentTime)}</span>
            {duration && <span>{formatTime(duration)}</span>}
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-stone-400 leading-relaxed">
        כל קבצי הסאונד הוקלטו על ידי הנינים — דור ההמשך של חיים ואווי (רחל) קליין
      </p>
    </div>
  );
}
