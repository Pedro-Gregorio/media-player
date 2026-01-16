export default function Spinner({
  image,
  name,
  spin,
}: {
  image: string;
  name: string;
  spin: boolean;
}) {
  return (
    <div className="relative rounded-full bg-gray-300 p-2">
      <div className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent border border-amber-50 p-14 z-10 opacity-80" />
      <div className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent border border-amber-50 p-10 z-10 opacity-80" />
      <img
        src={image}
        alt={name}
        width={200}
        height={200}
        className={`relative rounded-full ${
          spin ? "animate-[spin_5s_linear_infinite]" : "animate-none"
        }`}
      />
    </div>
  );
}
