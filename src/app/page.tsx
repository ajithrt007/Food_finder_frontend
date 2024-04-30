"use client";

import SideBar from "@/components/SideBar";
import SearchForm from "@/components/SearchForm";
import FormProvider from "@/providers/FormProvider";
import SearchResults from "@/components/SearchResults";

export default function Home() {
  return (
    <div className="flex flex-col w-[full]">
      <div className="text-white bg-orange-600 h-[20vh] flex flex-col items-center justify-center gap-2">
        <h1 className="font-semibold text-4xl">Food Finder</h1>
        <h2 className="font-light italic text-xl">Where food finds you</h2>
      </div>
      <div className="flex w-full bg-[#272829] min-h-[100vh] text-white">
        <FormProvider>
          <SideBar />
          <div className="bg-[#191919] w-[80%] max-w-[80%]">
            <SearchForm />
            <SearchResults />
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
