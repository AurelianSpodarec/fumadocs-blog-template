import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </main>
  );
}
