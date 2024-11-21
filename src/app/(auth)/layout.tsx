import { MainContainer } from "@/lib/layout";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainContainer className=' bg-gray-100'>{children}</MainContainer>;
}
