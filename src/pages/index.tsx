import HeaderBanner from "@/components/banner/headerBanner/HeaderBanner";

export default function Home() {
  return (
    <>
      <div className="container mx-auto border-2 min-h-[600px] text-white">
        <div id="headerBanner" className=" border-2 border-blue-500 p-2">
          <HeaderBanner />
        </div>
      </div>
    </>
  );
}
