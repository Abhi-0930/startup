import BookPageClient from "@/components/BookPageClient";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book a Strategy Session | Code Loom",
  description: "Schedule a free 30-minute strategy session with Code Loom to architect your product roadmap and tech stack.",
};

export default function BookPage() {
  return <BookPageClient />;
}
