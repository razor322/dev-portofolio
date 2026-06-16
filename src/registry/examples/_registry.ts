import { getRegistryItemUrl } from "@/utils/registry"
import type { Registry } from "shadcn/schema"

export const examples: Registry["items"] = [
  {
    name: "apple-hello-effect-languages-demo",
    type: "registry:example",
    registryDependencies: [
      getRegistryItemUrl("apple-hello-effect-english"),
      getRegistryItemUrl("apple-hello-effect-hindi"),
      getRegistryItemUrl("apple-hello-effect-spanish"),
      getRegistryItemUrl("apple-hello-effect-vietnamese"),
    ],
    files: [
      {
        path: "examples/apple-hello-effect-languages-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "theme-switcher-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("theme-switcher")],
    files: [
      {
        path: "examples/theme-switcher-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "shimmering-text-demo-02",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("shimmering-text")],
    files: [
      {
        path: "examples/shimmering-text-demo-02.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slide-to-unlock-demo",
    type: "registry:example",
    registryDependencies: [
      getRegistryItemUrl("slide-to-unlock"),
      getRegistryItemUrl("use-sound"),
    ],
    files: [
      {
        path: "examples/slide-to-unlock-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "code-block-command-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("code-block-command")],
    files: [
      {
        path: "examples/code-block-command-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "copy-button-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("copy-button")],
    files: [
      {
        path: "examples/copy-button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "testimonial-spotlight-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("testimonial-spotlight")],
    files: [
      {
        path: "examples/testimonial-spotlight-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "middle-truncation-demo",
    type: "registry:example",
    registryDependencies: [
      "resizable",
      getRegistryItemUrl("middle-truncation"),
    ],
    files: [
      {
        path: "examples/middle-truncation-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "twemoji-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("twemoji")],
    files: [
      {
        path: "examples/twemoji-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "theme-toggle-effect-demo",
    type: "registry:example",
    files: [
      {
        path: "examples/theme-toggle-effect-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "elastic-slider-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("elastic-slider")],
    files: [
      {
        path: "examples/elastic-slider-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "github-contributions-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("github-contributions")],
    files: [
      {
        path: "examples/github-contributions-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "fluid-gradient-text-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("fluid-gradient-text")],
    files: [
      {
        path: "examples/fluid-gradient-text-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "brand-assets-menu-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("brand-assets-menu")],
    files: [
      {
        path: "examples/brand-assets-menu-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "icon-swap-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("icon-swap")],
    files: [
      {
        path: "examples/icon-swap-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "text-flip-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("text-flip")],
    files: [
      {
        path: "examples/text-flip-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "wheel-picker-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("wheel-picker")],
    files: [
      {
        path: "examples/wheel-picker-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
