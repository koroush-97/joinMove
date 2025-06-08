import PrimarySearchAppBar from "@/components/common/navbar/PrimarySearchAppBar";

export default function Header() {
  return (
    <div className="w-full h-auto p-1 bg-black">
      <div className="container mx-auto ">
        <PrimarySearchAppBar color={"#111"} />
      </div>
    </div>
  );
}
