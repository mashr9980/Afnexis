"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VaultMindPage() {
  return (
    <main className="bg-background text-headings min-h-screen">
      <section className="container-wrapper py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          VaultMind <span className="text-primary">by AFNEXIS</span>
        </h1>
        <p className="text-lg text-text max-w-2xl mx-auto mb-8">
          The world's first 100% offline AI knowledge base. Transform your
          sensitive documents into an intelligent, searchable system that never
          leaves your infrastructure.
        </p>
        <Link href="/contact">
          <Button size="lg" className="mt-2">
            Start Free Trial
          </Button>
        </Link>
      </section>
      <section className="container-wrapper py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-text">
            <li>100% offline deployment on your infrastructure.</li>
            <li>Lightning fast AI answers without network latency.</li>
            <li>Enterprise-grade security with SOC&nbsp;2 and GDPR compliance.</li>
            <li>Fixed monthly pricing—no surprise API costs.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Ideal For</h2>
          <ul className="list-disc pl-5 space-y-2 text-text">
            <li>Healthcare organizations needing HIPAA compliance.</li>
            <li>Legal teams managing confidential case files.</li>
            <li>Financial institutions requiring strict data control.</li>
            <li>Government agencies analyzing classified information.</li>
          </ul>
        </div>
      </section>
      <section className="container-wrapper py-8 text-center">
        <p className="text-text text-sm">
          VaultMind is a trademark of AFNEXIS. © {new Date().getFullYear()} Afnexis.
        </p>
      </section>
    </main>
  );
}
