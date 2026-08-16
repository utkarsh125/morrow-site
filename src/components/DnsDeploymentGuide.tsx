'use client';

import React, { useState } from 'react';
import { Globe, Server, Check, Copy, ExternalLink, ShieldCheck } from 'lucide-react';

export default function DnsDeploymentGuide() {
  const [copiedRecord, setCopiedRecord] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('cname.vercel-dns.com');
    setCopiedRecord(true);
    setTimeout(() => setCopiedRecord(false), 2000);
  };

  return (
    <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1e2336]">
      <div className="rounded-2xl border border-[#27324d] bg-gradient-to-br from-[#121624] via-[#0f121d] to-[#0c0d15] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left info */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>Production Domain Setup</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Hosting at <span className="text-blue-400 font-mono">morrow.utkarshpandey.in</span>
            </h2>
            
            <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
              This repository (<code className="text-zinc-300 font-mono">utkarsh125/morrow-site</code>) is pre-configured for zero-friction deployment on <strong>Vercel</strong> or <strong>Cloudflare Pages</strong> with automatic global edge caching and instant SSL.
            </p>

            {/* Steps */}
            <div className="mt-6 space-y-3 text-xs sm:text-sm text-zinc-300 font-sans">
              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1c2236] border border-[#2f3958] flex items-center justify-center text-blue-400 font-mono text-xs font-bold">1</span>
                <span>Push code to <code className="text-blue-300 font-mono text-xs">github.com/utkarsh125/morrow-site</code></span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1c2236] border border-[#2f3958] flex items-center justify-center text-blue-400 font-mono text-xs font-bold">2</span>
                <span>Import project into Vercel dashboard and add custom domain <strong className="text-white font-mono">morrow.utkarshpandey.in</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1c2236] border border-[#2f3958] flex items-center justify-center text-blue-400 font-mono text-xs font-bold">3</span>
                <span>Configure the CNAME DNS record shown below on your DNS provider (Cloudflare, Namecheap, Route53, etc.)</span>
              </div>
            </div>
          </div>

          {/* Right DNS Card */}
          <div className="w-full lg:w-96 rounded-xl border border-[#2c3756] bg-[#0e111a] p-5 font-mono text-xs shadow-inner flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>DNS Record Setting</span>
                <span className="text-emerald-400 font-mono text-[10px]">Active</span>
              </div>

              <div className="space-y-2.5 text-zinc-300">
                <div className="flex justify-between py-1.5 px-2.5 rounded bg-[#151928] border border-[#22293e]">
                  <span className="text-zinc-500">Type</span>
                  <span className="text-blue-400 font-bold">CNAME</span>
                </div>
                <div className="flex justify-between py-1.5 px-2.5 rounded bg-[#151928] border border-[#22293e]">
                  <span className="text-zinc-500">Name / Host</span>
                  <span className="text-zinc-200">morrow</span>
                </div>
                <div className="flex items-center justify-between py-1.5 px-2.5 rounded bg-[#151928] border border-[#22293e]">
                  <span className="text-zinc-500">Value / Target</span>
                  <span className="text-teal-300 font-bold">cname.vercel-dns.com</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="mt-4 w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow"
            >
              {copiedRecord ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied CNAME Target</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy CNAME Target</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
