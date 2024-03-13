import { Metadata } from "next";
import { getSiteUrl } from "../config/url.config";
import { SITE_NAME } from "../constants/app.constant";
import LandingPage from "../pages/LandingPage";
import getHomeData from "../pages/api/home";

export const metadata: Metadata = {
  icons: {
    icon: "/logo.svg",
  },
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  },
};

async function getData() {
  const res = await getHomeData();

  return res;
}

export default async function Home() {
  const data = await getData();
  if(data) console.log(data);
  return (
    <main className="">
      <LandingPage />
    </main>
  );
}
