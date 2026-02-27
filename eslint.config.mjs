import storybook from "eslint-plugin-storybook"
import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import prettierConfig from "eslint-config-prettier/flat"
import testingLibrary from "eslint-plugin-testing-library"
import vitest from "@vitest/eslint-plugin"
import perfectionist from "eslint-plugin-perfectionist"
import sonarjs from "eslint-plugin-sonarjs"
import unicorn from "eslint-plugin-unicorn"

const eslintConfig = defineConfig([
  // ── 1) Base — Next.js 번들 설정 ──────────────────────────
  ...nextVitals,
  ...nextTs,

  // ── 2) Global Ignores ────────────────────────────────────
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "*.config.{js,mjs,ts}",
    "scripts/**",
  ]),

  // ── 3) TypeScript 강화 ───────────────────────────────────
  {
    name: "typescript-strict",
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  // ── 4) Perfectionist — import/타입/JSX 정렬 ─────────────
  {
    name: "perfectionist-imports",
    files: ["**/*.{ts,tsx}"],
    plugins: { perfectionist },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "side-effect",
            "type",
            ["type-internal", "type-parent", "type-sibling"],
          ],
          internalPattern: ["^@/"],
          newlinesBetween: 1,
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-named-exports": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-exports": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-union-types": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-object-types": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "import/no-duplicates": "error",
      "import/no-anonymous-default-export": "error",
    },
  },

  // ── 5) Unicorn — 모던 JS 패턴 ──────────────────────────
  {
    name: "unicorn-custom",
    files: ["**/*.{ts,tsx}"],
    plugins: { unicorn },
    rules: {
      ...unicorn.configs["flat/recommended"].rules,
      // React/Next.js 프로젝트에서 불필요하거나 노이즈가 심한 규칙 비활성화
      "unicorn/filename-case": "off", // Next.js 라우팅 컨벤션과 충돌
      "unicorn/no-null": "off", // React JSX에서 null 반환 필수
      "unicorn/prevent-abbreviations": "off", // props, ref, env 등 React 관용표현 충돌
      "unicorn/no-array-for-each": "off", // forEach 사용 빈도 높음
      "unicorn/no-array-reduce": "off", // reduce 유틸성 코드에서 필요
      "unicorn/prefer-module": "off", // Next.js config 파일에서 CJS 사용 가능
      "unicorn/prefer-top-level-await": "off", // Next.js 컴포넌트에서 불가
      "unicorn/no-anonymous-default-export": "off", // import/no-anonymous-default-export로 이미 커버
      "unicorn/no-nested-ternary": "off", // Prettier가 포맷팅 담당
      "unicorn/no-negated-condition": "off", // 간단한 early return 패턴에서 불필요한 노이즈
      "unicorn/import-style": "off", // 프로젝트별 import 스타일 상이
      "unicorn/prefer-global-this": "off", // 브라우저 코드에서 window 직접 사용 가능
      "unicorn/prefer-ternary": "off", // 가독성 저해 가능
    },
  },

  // ── 6) SonarJS — 코드 품질 ──────────────────────────────
  sonarjs.configs.recommended,

  // ── 7) 접근성(A11y) 강화 ─────────────────────────────────
  {
    name: "a11y-strict",
    files: ["**/*.{ts,tsx}"],
    rules: {
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
    },
  },

  // ── 8) React 강화 ───────────────────────────────────────
  {
    name: "react-strict",
    files: ["**/*.{ts,tsx}"],
    rules: {
      "react/self-closing-comp": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
    },
  },

  // ── 9) 파일별 Override ──────────────────────────────────
  {
    name: "storybook-overrides",
    files: ["**/*.stories.{ts,tsx}", ".storybook/**/*.{ts,tsx}"],
    rules: {
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "sonarjs/todo-tag": "warn",
    },
  },
  {
    name: "test-overrides",
    files: ["**/*.test.{ts,tsx}"],
    plugins: { "testing-library": testingLibrary, vitest },
    rules: {
      // Testing Library
      ...testingLibrary.configs["flat/react"].rules,
      // Vitest
      ...vitest.configs.recommended.rules,
      // 기존 override 유지
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },

  // ── Storybook 플러그인 ──────────────────────────────────
  ...storybook.configs["flat/recommended"],

  // ── 10) Prettier (반드시 마지막) ────────────────────────
  prettierConfig,
])

export default eslintConfig
