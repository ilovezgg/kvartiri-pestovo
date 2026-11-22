const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function myImageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `${base}${src}`;
}
