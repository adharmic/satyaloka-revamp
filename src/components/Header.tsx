import Navbar from "./Navbar";
import Title from "./Title";

export default function Header() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row items-center justify-between">
        <Title />
      </div>
      <Navbar />
    </div>
  )
}
