const texturesData = [
  {
    id: "liquid-chrome",
    title: "Liquid Chrome",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    description: "An anisotropic metallic state suspended in fluid tension. It reflects surroundings in a state of constant, zero-gravity flow, mimicking high-tech mercury alloys.",
    specs: {
      refraction: "3.45 (Anisotropic)",
      resonance: "89.4 GHz (Electromagnetic)",
      viscosity: "0.89 Pa·s",
      structure: "Amorphous Mercury-Gallium",
      opacity: "100% (Reflective)"
    }
  },
  {
    id: "organic-fold",
    title: "Pleated Veil",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
    description: "A micro-pleated polymer skin designed for soft robotics and digital fashion. It captures light in delicate, paper-like shadows along structural ridges.",
    specs: {
      refraction: "1.42",
      resonance: "12.1 GHz",
      viscosity: "Solid Elastomer",
      structure: "Layered Fluoropolymer Weave",
      opacity: "45% (Translucent)"
    }
  },
  {
    id: "cyber-grid",
    title: "Monochrome Mesh",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    description: "A dark carbon mesh with integrated micro-light guides. Designed for thermal regulation and spatial data projections in brutalist architectures.",
    specs: {
      refraction: "1.00 (Non-Refractive)",
      resonance: "120.5 GHz",
      viscosity: "Rigid Lattice",
      structure: "Crystalline Carbon Nano-Fiber",
      opacity: "20% (Apertured)"
    }
  },
  {
    id: "distorted-glass",
    title: "Rippled Cryo-Glass",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800",
    description: "A heavy silica layer showing wave-like surface distortions. It causes dramatic chromatic aberration, fracturing white light into warm spectral flares.",
    specs: {
      refraction: "1.95 (Dispersion Active)",
      resonance: "45.2 GHz",
      viscosity: "Amorphous Solid",
      structure: "Borosilicate-Lead Crystal",
      opacity: "92% (Refractive)"
    }
  },
  {
    id: "luminescent-gradient",
    title: "Bioluminescent Plasma",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800",
    description: "A bio-synthetic skin cell culture that emits a soft, pulsing neon gradient. It reacts actively to proximity fields and acoustic vibration waves.",
    specs: {
      refraction: "1.34 (Liquid Core)",
      resonance: "8.5 MHz (Acoustic)",
      viscosity: "0.05 Pa·s",
      structure: "Bioluminescent Peptide Matrix",
      opacity: "75% (Emissive)"
    }
  },
  {
    id: "iridescent-oil",
    title: "Interference Film",
    image: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&q=80&w=800",
    description: "An ultra-thin oily layer producing optical interference. As the light angle shifts, the surface flows through gradients of cyan, gold, and magenta.",
    specs: {
      refraction: "1.68 (Thin Film)",
      resonance: "540 THz (Optical)",
      viscosity: "0.12 Pa·s",
      structure: "Layered Lipophilic Esters",
      opacity: "100% (Specular)"
    }
  },
  {
    id: "fluid-waves",
    title: "Synthetic Resin",
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800",
    description: "A slow-flowing polymer resin containing suspended pearlescent pigments. It generates organic, swirling patterns under gentle shear forces.",
    specs: {
      refraction: "1.54",
      resonance: "14.7 GHz",
      viscosity: "2.40 Pa·s (High)",
      structure: "Aromatic Epoxy Monomers",
      opacity: "85% (Semi-Opaque)"
    }
  },
  {
    id: "neon-glow",
    title: "Laser Ribbon",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800",
    description: "A synthetic fiber membrane containing gaseous glowing discharge channels. It projects intense violet and red neon lines along its warp threads.",
    specs: {
      refraction: "1.30",
      resonance: "680 THz",
      viscosity: "Solid Fiber",
      structure: "Fluoropolymer Capillary Weave",
      opacity: "60% (Emissive)"
    }
  },
  {
    id: "draped-linen",
    title: "Sculptural Folds",
    image: "https://images.unsplash.com/photo-1502691876148-a84978e59fa8?auto=format&fit=crop&q=80&w=800",
    description: "A heavy, structured mineral-infused fabric that falls in architectural folds. It absorbs sound waves and dampens electromagnetic echoes.",
    specs: {
      refraction: "1.52 (Matte)",
      resonance: "1.2 GHz (Damping)",
      viscosity: "Flexible Sheet",
      structure: "Barium-Sulfate Impregnated Linen",
      opacity: "100% (Opaque)"
    }
  },
  {
    id: "monolith-slate",
    title: "Brutalist Terrazzo",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
    description: "A composite surface constructed from concrete and crushed basalt chunks. It features high mass density and a cold, sensory texture.",
    specs: {
      refraction: "1.70",
      resonance: "0.5 GHz",
      viscosity: "Rigid Solid",
      structure: "Portland Cement & Basalt Chips",
      opacity: "100% (Opaque)"
    }
  },
  {
    id: "liquid-gold",
    title: "Molten Aurum",
    image: "https://images.unsplash.com/photo-1544048702-d2496cd4146a?auto=format&fit=crop&q=80&w=800",
    description: "A heavy, liquid gold alloy that exhibits high thermal and electrical conductivity. It flows in dense, rounded droplets, refusing to wet glass.",
    specs: {
      refraction: "0.47 (Metallic)",
      resonance: "18.2 GHz",
      viscosity: "1.55 Pa·s",
      structure: "Gold-Indium Eutectic Melt",
      opacity: "100% (Reflective)"
    }
  },
  {
    id: "generative-sand",
    title: "Rippled Aerogel",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800",
    description: "An ultra-lightweight solid matrix showing fine ripples. It is 99.8% air, trapping light inside micro-pores to create a delicate blue Rayleigh glow.",
    specs: {
      refraction: "1.02",
      resonance: "880 THz",
      viscosity: "Brittle Solid",
      structure: "Amorphous Silica Aerogel Mesh",
      opacity: "95% (Hazy Translucent)"
    }
  }
];
