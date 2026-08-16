'use client';

import React, { useState } from 'react';
import { 
  Play, 
  Copy, 
  Check, 
  Cpu 
} from '@phosphor-icons/react';

const MODELS = [
  { name: 'qwen2.5:7b', pull: 'ollama pull qwen2.5:7b', desc: 'Exceptional general coding & reasoning', size: '4.7 GB' },
  { name: 'deepseek-r1:8b', pull: 'ollama pull deepseek-r1:8b', desc: 'Powerful open reasoning with <think> blocks', size: '4.9 GB' },
  { name: 'llama3.2:3b', pull: 'ollama pull llama3.2:3b', desc: 'Ultra-fast lightweight companion for laptops', size: '2.0 GB' },
  { name: 'mistral-nemo:12b', pull: 'ollama pull mistral-nemo', desc: 'High context window and nuanced dialog', size: '7.1 GB' },
];

export default function QuickstartGuide() {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#3c3836]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#282828] border border-[#3c3836] text-[#b8bb26] text-xs font-mono mb-3">
          <Play weight="bold" className="w-3.5 h-3.5" />
          <span>Quickstart in 60 Seconds</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fbf1c7] tracking-tight font-sans">
          Up and Running in 3 Commands
        </h2>
        <p className="mt-2 text-[#a89984] text-sm sm:text-base font-sans">
          All you need is Ollama installed on your machine. Morrow handles the rest.
        </p>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* Step 1 */}
        <div className="rounded-xl border border-[#3c3836] bg-[#282828] p-5 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-[#83a598] mb-1">STEP 1</div>
            <h3 className="font-bold text-[#fbf1c7] text-base mb-2 font-sans">Start Ollama Server</h3>
            <p className="text-xs text-[#a89984] leading-relaxed mb-4 font-sans">
              Ensure your local Ollama daemon is running and listening on default port 11434.
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-[#1d2021] border border-[#3c3836] flex items-center justify-between font-mono text-xs text-[#ebdbb2]">
            <span>$ ollama serve</span>
            <button
              onClick={() => handleCopy('ollama serve', 'step1')}
              className="p-1 rounded hover:bg-[#32302f] text-[#a89984] hover:text-[#fbf1c7] cursor-pointer"
            >
              {copiedCmd === 'step1' ? <Check weight="bold" className="w-3.5 h-3.5 text-[#b8bb26]" /> : <Copy weight="bold" className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-xl border border-[#3c3836] bg-[#282828] p-5 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-[#8ec07c] mb-1">STEP 2</div>
            <h3 className="font-bold text-[#fbf1c7] text-base mb-2 font-sans">Pull Your Preferred Model</h3>
            <p className="text-xs text-[#a89984] leading-relaxed mb-4 font-sans">
              Download any LLM from the Ollama library. Qwen 2.5 and DeepSeek R1 are recommended.
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-[#1d2021] border border-[#3c3836] flex items-center justify-between font-mono text-xs text-[#ebdbb2]">
            <span className="truncate mr-2">$ ollama pull qwen2.5:7b</span>
            <button
              onClick={() => handleCopy('ollama pull qwen2.5:7b', 'step2')}
              className="p-1 rounded hover:bg-[#32302f] text-[#a89984] hover:text-[#fbf1c7] cursor-pointer flex-shrink-0"
            >
              {copiedCmd === 'step2' ? <Check weight="bold" className="w-3.5 h-3.5 text-[#b8bb26]" /> : <Copy weight="bold" className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Step 3 */}
        <div className="rounded-xl border border-[#3c3836] bg-[#282828] p-5 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-[#fabd2f] mb-1">STEP 3</div>
            <h3 className="font-bold text-[#fbf1c7] text-base mb-2 font-sans">Launch Morrow</h3>
            <p className="text-xs text-[#a89984] leading-relaxed mb-4 font-sans">
              Run Morrow from any terminal emulator. Your configuration and SQLite database auto-initialize.
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-[#1d2021] border border-[#3c3836] flex items-center justify-between font-mono text-xs text-[#ebdbb2]">
            <span>$ morrow</span>
            <button
              onClick={() => handleCopy('morrow', 'step3')}
              className="p-1 rounded hover:bg-[#32302f] text-[#a89984] hover:text-[#fbf1c7] cursor-pointer"
            >
              {copiedCmd === 'step3' ? <Check weight="bold" className="w-3.5 h-3.5 text-[#b8bb26]" /> : <Copy weight="bold" className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

      </div>

      {/* Model Recommendations Table */}
      <div className="rounded-2xl border border-[#3c3836] bg-[#282828] p-6">
        <h3 className="text-sm font-bold text-[#fbf1c7] tracking-wide uppercase mb-4 flex items-center gap-2 font-sans">
          <Cpu weight="bold" className="w-4 h-4 text-[#d3869b]" />
          <span>Recommended Ollama Models</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#3c3836] text-[#928374]">
                <th className="pb-3 font-semibold font-sans">Model</th>
                <th className="pb-3 font-semibold font-sans">Description</th>
                <th className="pb-3 font-semibold">Size</th>
                <th className="pb-3 font-semibold text-right font-sans">Pull Command</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3c3836]">
              {MODELS.map((m) => (
                <tr key={m.name} className="hover:bg-[#32302f] transition-colors">
                  <td className="py-3 font-bold text-[#fabd2f]">{m.name}</td>
                  <td className="py-3 text-[#ebdbb2] font-sans">{m.desc}</td>
                  <td className="py-3 text-[#928374]">{m.size}</td>
                  <td className="py-3 text-right">
                    <button
                      onClick={() => handleCopy(m.pull, m.name)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1d2021] hover:bg-[#32302f] border border-[#3c3836] text-[#ebdbb2] text-[11px] cursor-pointer"
                    >
                      {copiedCmd === m.name ? (
                        <>
                          <Check weight="bold" className="w-3.5 h-3.5 text-[#b8bb26]" />
                          <span className="text-[#b8bb26]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy weight="bold" className="w-3.5 h-3.5 text-[#a89984]" />
                          <span>{m.pull}</span>
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
