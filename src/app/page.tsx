
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Main } from "./main";
export default function Home() {
  return (
    <main id="lol" className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Main />
      <Menu />
    </main>
  );
}
