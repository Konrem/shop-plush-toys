export default function TitleH2({ text }: { text: string }) {
  return (
    <>
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {text}
        </h2>
      </div>
    </>
  );
}
