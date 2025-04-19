import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// In each app's vite.config.js
export default defineConfig({
  base: '/', 
})