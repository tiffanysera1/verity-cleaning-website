import ChatWidget from "@/components/ChatWidget";

/* Wraps /services/ and every /services/[slug]/ page. Exists solely to scope
   the chat widget to pages that carry no forms — see ChatWidget.tsx. */
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
}
