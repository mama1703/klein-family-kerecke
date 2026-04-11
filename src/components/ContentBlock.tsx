interface TextBlockProps {
  children: React.ReactNode;
}

export function TextBlock({ children }: TextBlockProps) {
  return <div className="prose-hebrew">{children}</div>;
}

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <figure className="my-8">
      <img src={src} alt={alt} className="w-full rounded-lg" loading="lazy" />
      {caption && (
        <figcaption className="text-sm text-muted-foreground text-center mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface VideoBlockProps {
  src: string;
  title?: string;
}

export function VideoBlock({ src, title }: VideoBlockProps) {
  return (
    <div className="my-8">
      <div className="aspect-video rounded-lg overflow-hidden bg-muted">
        <iframe
          src={src}
          title={title || "סרטון"}
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
}
