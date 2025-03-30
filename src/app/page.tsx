import Header from './containers/Header';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col items-center justify-start p-8">
        <div>
          Next Habit Tracker, coming soon!
        </div>
      </main>
    </div>
  );
}
