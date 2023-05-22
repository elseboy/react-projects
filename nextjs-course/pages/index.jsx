import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Index Page</h1>

      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </div>
  );
};
export default Index;
