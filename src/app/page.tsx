import Header from './containers/Header';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          Next Habit Tracker, coming soon!
        </div>
      </main>
    </div>
  );
}
