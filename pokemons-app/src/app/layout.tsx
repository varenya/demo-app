import Link from "next/link";
import "@/styles/pokemon.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"}>
      <body>
        <div className={"pokemon-info-app"}>
          <nav>
            <ul className={"list"}>
              <li>
                <Link href={"/pokemon/charizard"}>Charizard</Link>
              </li>
              <li>
                <Link href={"/pokemon/pikachu"}>Pikachu</Link>
              </li>
              <li>
                <Link href={"/pokemon/bulbasaur"}>Bulbasaur</Link>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
