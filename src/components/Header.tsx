import Button from "./Button";
import Navbar from "./Navbar";
import Title from "./Title";

export default function Header() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row items-center justify-between">
        <Title />
        <div className="flex items-center gap-4 text-lg d-respira font-bold">
          <Button title="HOME" />
          <Button title="ABOUT" />
        </div>
      </div>
      <Navbar />
    </div>
  )
}
