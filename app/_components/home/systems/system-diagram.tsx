import { SkeletonImage } from "@/components/ui/skeleton-image";

type Props = {
  description: string;
  height: number;
  src: string;
  width: number;
};

const maxWidth = 30;
const maxHeight = 38;

export default function SystemDiagram({ description, height, src, width }: Props) {
  return (
    <figure
      className="relative mx-auto w-full"
      style={{
        aspectRatio: `${width} / ${height}`,
        maxWidth: `${Math.min(maxWidth, (maxHeight * width) / height)}rem`,
      }}
    >
      <figcaption className="sr-only">{description}</figcaption>
      <SkeletonImage
        alt=""
        aria-hidden
        className="object-contain"
        fill
        sizes="(min-width: 1024px) 30rem, 100vw"
        src={src}
      />
    </figure>
  );
}
