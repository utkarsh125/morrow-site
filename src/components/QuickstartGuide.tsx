'use client';

import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, Sparkles, Cpu } from 'lucide-react';

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
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1e2336]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e251b] border border-[#374e2d] text-emerald-400 text-xs font-mono mb-3">
          <Play className="w-3.5 h-3.5" />
          <span>Quickstart in 60 Seconds</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Up and Running in 3 Commands
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base">
          All you need is Ollama installed on your machine. Morrow handles the rest.
        </p>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* Step 1 */}
        <div className="rounded-xl border border-[#22273a] bg-[#11141e] p-5 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-blue-400 mb-1">STEP 1</div>
            <h3 className="font-bold text-white text-base mb-2">Start Ollama Server</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Ensure your local Ollama daemon is running and listening on default port 11434.
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-[#0c0e15] border border-[#20263a] flex items-center justify-between font-mono text-xs text-zinc-300">
            <span>$ ollama serve</span>
            <button
              onClick={() => handleCopy('ollama serve', 'step1')}
              className="p-1 rounded hover:bg-[#1a2032] text-zinc-400 hover:text-white cursor-pointer"
            >
              {copiedCmd === 'step1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-xl border border-[#22273a] bg-[#11141e] p-5 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-teal-400 mb-1">STEP 2</div>
            <h3 className="font-bold text-white text-base mb-2">Pull Your Preferred Model</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Download any LLM from the Ollama library. Qwen 2.5 and DeepSeek R1 are recommended.
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-[#0c0e15] border border-[#20263a] flex items-center justify-between font-mono text-xs text-zinc-300">
            <span className="truncate mr-2">$ ollama pull qwen2.5:7b</span>
            <button
              onClick={() => handleCopy('ollama pull qwen2.5:7b', 'step2')}
              className="p-1 rounded hover:bg-[#1a2032] text-zinc-400 hover:text-white cursor-pointer flex-shrink-0"
            >
              {copiedCmd === 'step2' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Step 3 */}
        <div className="rounded-xl border border-[#22273a] bg-[#11141e] p-5 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-purple-400 mb-1">STEP 3</div>
            <h3 className="font-bold text-white text-base mb-2">Launch Morrow</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Run Morrow from any terminal emulator. Your configuration and SQLite database auto-initialize.
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-[#0c0e15] border border-[#20263a] flex items-center justify-between font-mono text-xs text-zinc-300">
            <span>$ morrow</span>
            <button
              onClick={() => handleCopy('morrow', 'step3')}
              className="p-1 rounded hover:bg-[#1a2032] text-zinc-400 hover:text-white cursor-pointer"
            >
              {copiedCmd === 'step3' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

      </div>

      {/* Model Recommendations Table */}
      <div className="rounded-2xl border border-[#24293c] bg-[#0f111a] p-6">
        <h3 className="text-sm font-bold text-white tracking-wide uppercase mb-4 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-purple-400" />
          <span>Recommended Ollama Models</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#21273c] text-zinc-500">
                <th className="pb-3 font-semibold">Model</th>
                <th className="pb-3 font-semibold">Description</th>
                <th className="pb-3 font-semibold">Size</th>
                <th className="pb-3 font-semibold text-right">Pull Command</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1b2032]">
              {MODELS.map((m) => (
                <tr key={m.name} className="hover:bg-[#141724] transition-colors">
                  <td className="py-3 font-bold text-blue-400">{m.name}</td>
                  <td className="py-3 text-zinc-300 font-sans">{m.desc}</td>
                  <td className="py-3 text-zinc-500">{m.size}</td>
                  <td className="py-3 text-right">
                    <button
                      onClick={() => handleCopy(m.pull, m.name)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#181d2e] hover:bg-[#232b42] border border-[#2b3552] text-zinc-300 text-[11px] cursor-pointer"
                    >
                      {copiedCmd === m.name ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
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
