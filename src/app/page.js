import Image from "next/image";
import DrawerAppBar from "./components/headerMain";

export default function Home() {
  return (
   <>
    <div className="containerHome">
    <DrawerAppBar />
     <h1>Hello</h1>
    </div>
   </>
  );
}
