import Link from 'next/link';

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      ul {
        margin: 0;
        padding: 0;
        height: 48px;
        display: flex;
        align-items: center;
        list-style-type: none;
      }
      li {
        margin-right: 15px;
      }
    `}</style>
  </nav>
);