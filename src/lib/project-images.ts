//import every screenshot under components/assets/projects/<folder>/*
const imageModules = import.meta.glob<{ default: string }>(
  "../components/assets/projects/*/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

/** Map of folder name (e.g. "SRAM") - ordered array of image URLs */
export const projectImages: Record<string, string[]> = {};

for (const path of Object.keys(imageModules).sort()) {
  const match = path.match(/projects\/([^/]+)\//);
  if (!match) continue;
  const folder = match[1];
  const url = imageModules[path].default;
  (projectImages[folder] ??= []).push(url);
}
