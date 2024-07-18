import type { Metadata } from "next";

import { getGlobalData, getGlobalPageMetadata } from "@/data/loaders";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getGlobalPageMetadata();

  return {
    title: metadata?.title,
    description: metadata.description,
  };
}

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  const globalData = await getGlobalData();

  return (
    <div>
      <Header data={globalData.header} />
      <div>{children}</div>
      <Footer data={globalData.footer} />
    </div>
  );
}
