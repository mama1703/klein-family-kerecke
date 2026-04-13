type ImageBlockProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <div className="my-12 text-center">
      <img
        src={src}
        alt={alt}
        className="mx-auto max-w-md rounded-2xl shadow-md"
      />
      {caption && (
        <p className="mt-3 text-sm text-stone-500">
          {caption}
        </p>
      )}
    </div>
  );
}
