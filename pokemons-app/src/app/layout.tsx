import "@/styles/pokemon.css";
import { NavLink } from "@/components/NavLink";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className={"pokemon-info-app"}>
          <ul className={"list"}>
            <li>
              <NavLink href={"/pokemon/charizard"}>Charizard</NavLink>
            </li>
            <li>
              <NavLink href={"/pokemon/pikachu"}>Pikachu</NavLink>
            </li>
            <li>
              <NavLink href={"/pokemon/bulbasur"}>Bulbasur</NavLink>
            </li>
          </ul>
          {children}
        </div>
      </body>
    </html>
  );
}
