'use client';

import React, { useState } from 'react';
import { THEMES, Theme } from '@/data/themes';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TerminalDemo from '@/components/TerminalDemo';
import ArchitectureSection from '@/components/ArchitectureSection';
import ThemeExplorer from '@/components/ThemeExplorer';
import CommandCatalog from '@/components/CommandCatalog';
import KeyboardShortcuts from '@/components/KeyboardShortcuts';
import QuickstartGuide from '@/components/QuickstartGuide';
import DnsDeploymentGuide from '@/components/DnsDeploymentGuide';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(THEMES[0]);

  const handleSelectTheme = (newTheme: Theme) => {
    setSelectedTheme(newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0d12] text-zinc-100 selection:bg-blue-500/30 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Quick Install Tabs */}
        <Hero />

        {/* In-Browser Interactive Hermes TUI Playground */}
        <TerminalDemo currentTheme={selectedTheme} onThemeSelect={handleSelectTheme} />

        {/* 100% Local Privacy & Architecture */}
        <ArchitectureSection />

        {/* 65+ Curated Kitty Terminal Themes Explorer */}
        <ThemeExplorer activeThemeId={selectedTheme.id} onSelectTheme={handleSelectTheme} />

        {/* Complete Slash Commands Palette Directory */}
        <CommandCatalog />

        {/* Ergonomic Keyboard Shortcuts Cheat Sheet */}
        <KeyboardShortcuts />

        {/* 3-Step Quickstart & Model Recommendations */}
        <QuickstartGuide />

        {/* Production Domain Setup Guide for morrow.utkarshpandey.in */}
        <DnsDeploymentGuide />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
