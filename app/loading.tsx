export default function Loading() {
  return (
    <section className="section-padding bg-background" aria-label="Loading page">
      <div className="container-site">
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="min-h-40 animate-pulse rounded-card border border-border bg-muted-bg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
