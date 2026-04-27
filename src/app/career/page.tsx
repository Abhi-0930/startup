import CareerPageClient from "@/components/CareerPageClient";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Join Code Loom | Digital Engineering Careers",
  description: "Join our talent pool. We're looking for extraordinary builders committed to design and engineering excellence.",
  alternates: {
    canonical: "https://codeloom.in/career",
  },
};

export default function CareerPage() {
  return <CareerPageClient />;
}
