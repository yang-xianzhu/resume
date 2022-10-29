import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // 配置静态资源的前面默认地址
  base:'resume',
  integrations: [tailwind()]
});