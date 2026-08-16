'use client';

import React, { useState } from 'react';
import { 
  Globe, 
  Check, 
  Copy 
} from '@phosphor-icons/react';

export default function DnsDeploymentGuide() {
  const [copiedRecord, setCopiedRecord] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('cname.vercel-dns.com');
    setCopiedRecord(true);
    setTimeout(() => setCopiedRecord(false), 2000);
  };

  return (
    <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#3c3836]">
      <div className="rounded-2xl border border-[#3c3836] bg-gradient-to-br from-[#282828] via-[#242424] to-[#1d2021] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#fabd2f]/5 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left info */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fabd2f]/10 border border-[#fabd2f]/30 text-[#fabd2f] text-xs font-mono mb-3">
              <Globe weight="bold" className="w-3.5 h-3.5" />
              <span>Production Domain Setup</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#fbf1c7] tracking-tight font-sans">
              Hosting at <span className="text-[#fabd2f] font-mono">morrow.utkarshpandey.in</span>
            </h2>
            
            <p className="mt-3 text-[#a89984] text-sm leading-relaxed font-sans">
              This repository (<code className="text-[#ebdbb2] font-mono">utkarsh125/morrow-site</code>) is pre-configured for zero-friction deployment on <strong>Vercel</strong> or <strong>Cloudflare Pages</strong> with automatic global edge caching and instant SSL.
            </p>

            {/* Steps */}
            <div className="mt-6 space-y-3 text-xs sm:text-sm text-[#ebdbb2] font-sans">
              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1d2021] border border-[#3c3836] flex items-center justify-center text-[#fabd2f] font-mono text-xs font-bold">1</span>
                <span>Push code to <code className="text-[#fabd2f] font-mono text-xs">github.com/utkarsh125/morrow-site</code></span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1d2021] border border-[#3c3836] flex items-center justify-center text-[#fabd2f] font-mono text-xs font-bold">2</span>
                <span>Import project into Vercel dashboard and add custom domain <strong className="text-[#fbf1c7] font-mono">morrow.utkarshpandey.in</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1d2021] border border-[#3c3836] flex items-center justify-center text-[#fabd2f] font-mono text-xs font-bold">3</span>
                <span>Configure the CNAME DNS record shown below on your DNS provider (Cloudflare, Namecheap, Route53, etc.)</span>
              </div>
            </div>
          </div>

          {/* Right DNS Card */}
          <div className="w-full lg:w-96 rounded-xl border border-[#3c3836] bg-[#1d2021] p-5 font-mono text-xs shadow-inner flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold text-[#a89984] uppercase tracking-wider mb-3 flex items-center justify-between font-sans">
                <span>DNS Record Setting</span>
                <span className="text-[#b8bb26] font-mono text-[10px]">Active</span>
              </div>

              <div className="space-y-2.5 text-[#ebdbb2]">
                <div className="flex justify-between py-1.5 px-2.5 rounded bg-[#282828] border border-[#3c3836]">
                  <span className="text-[#928374]">Type</span>
                  <span className="text-[#fabd2f] font-bold">CNAME</span>
                </div>
                <div className="flex justify-between py-1.5 px-2.5 rounded bg-[#282828] border border-[#3c3836]">
                  <span className="text-[#928374]">Name / Host</span>
                  <span className="text-[#ebdbb2]">morrow</span>
                </div>
                <div className="flex items-center justify-between py-1.5 px-2.5 rounded bg-[#282828] border border-[#3c3836]">
                  <span className="text-[#928374]">Value / Target</span>
                  <span className="text-[#8ec07c] font-bold">cname.vercel-dns.com</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="mt-4 w-full py-2 px-3 rounded-lg bg-[#fabd2f] hover:bg-[#d79921] text-[#1d2021] font-sans text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow"
            >
              {copiedRecord ? (
                <>
                  <Check weight="bold" className="w-3.5 h-3.5" />
                  <span>Copied CNAME Target</span>
                </>
              ) : (
                <>
                  <Copy weight="bold" className="w-3.5 h-3.5" />
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
