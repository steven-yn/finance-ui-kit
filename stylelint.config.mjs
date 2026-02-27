/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-tailwindcss",
  ],

  plugins: [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-declaration-strict-value",
    "stylelint-high-performance-animation",
    "stylelint-no-unsupported-browser-features",
    "stylelint-plugin-defensive-css",
    "stylelint-plugin-logical-css",
    "stylelint-plugin-use-baseline",
    "stylelint-gamut",
  ],

  rules: {
    /* ================================================================
       stylelint-config-standard 오버라이드
       ================================================================ */

    // Prettier와 충돌 방지
    "declaration-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "comment-empty-line-before": null,
    "rule-empty-line-before": null,

    // 프로젝트 표기법 통일
    "alpha-value-notation": "number",
    "color-function-notation": "legacy",

    // 선택자 복잡도 제한
    "selector-max-compound-selectors": 4,
    "selector-max-id": 0,
    "selector-max-specificity": "0,4,4",

    // 중첩 깊이 제한
    "max-nesting-depth": 3,

    // 축약 프로퍼티 중복 방지
    "declaration-block-no-redundant-longhand-properties": true,
    "shorthand-property-no-redundant-values": true,

    // 빈 블록 · 중복 방지
    "block-no-empty": true,
    "no-duplicate-selectors": true,

    // 폰트 관련
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": "numeric",

    /* ================================================================
       stylelint-order — 프로퍼티 정렬
       ================================================================ */
    "order/order": [
      "dollar-variables",
      "custom-properties",
      "declarations",
      "rules",
      "at-rules",
    ],
    "order/properties-order": [
      // Positioning
      "position", "inset", "top", "right", "bottom", "left", "z-index",
      // Display & Box Model
      "display", "flex", "flex-direction", "flex-wrap", "flex-flow",
      "flex-grow", "flex-shrink", "flex-basis",
      "grid", "grid-template", "grid-template-columns", "grid-template-rows",
      "grid-gap", "gap", "row-gap", "column-gap",
      "align-items", "align-self", "justify-content", "justify-items",
      "order",
      // Box
      "box-sizing", "width", "min-width", "max-width",
      "height", "min-height", "max-height",
      "margin", "margin-top", "margin-right", "margin-bottom", "margin-left",
      "padding", "padding-top", "padding-right", "padding-bottom", "padding-left",
      "overflow", "overflow-x", "overflow-y", "overscroll-behavior",
      // Border
      "border", "border-width", "border-style", "border-color", "border-radius",
      // Background
      "background", "background-color", "background-image", "background-repeat",
      "background-position", "background-size",
      // Typography
      "color", "font", "font-family", "font-size", "font-weight",
      "line-height", "letter-spacing", "text-align", "text-decoration",
      "text-transform", "white-space", "word-break",
      // Visual
      "opacity", "visibility",
      "box-shadow", "filter", "backdrop-filter",
      "transform", "transition", "animation",
      // Misc
      "cursor", "pointer-events", "user-select",
      "will-change", "appearance", "content",
    ],

    /* ================================================================
       stylelint-declaration-block-no-ignored-properties
       — display 속성과 무효한 조합 감지 (예: inline + width)
       ================================================================ */
    "plugin/declaration-block-no-ignored-properties": true,

    /* ================================================================
       stylelint-declaration-strict-value
       — 색상·폰트·z-index에 변수/키워드 사용 강제 (디자인 토큰 준수)
       ================================================================ */
    "scale-unlimited/declaration-strict-value": [
      ["/color$/", "fill", "stroke", "font-size", "z-index"],
      {
        ignoreValues: {
          "": ["currentColor", "inherit", "initial", "transparent", "unset", "none"],
          "z-index": ["auto", "-1", "0", "1"],
        },
        ignoreFunctions: true,
        severity: "warning",
        disableFix: true,
        message: "\"${value}\"은(는) \"${property}\"에 사용할 수 없습니다. 디자인 토큰(CSS 변수)을 사용하세요.",
      },
    ],

    /* ================================================================
       stylelint-high-performance-animation
       — layout thrashing 유발 프로퍼티 애니메이션 방지
       ================================================================ */
    "plugin/no-low-performance-animation-properties": [true, {
      ignoreProperties: ["color", "background-color", "border-color"],
    }],

    /* ================================================================
       stylelint-no-unsupported-browser-features
       — browserslist 대상 브라우저 미지원 기능 경고
       ================================================================ */
    "plugin/no-unsupported-browser-features": [true, {
      severity: "warning",
      ignore: [
        "css-nesting",
        "css-when-else",
        "css-cascade-layers",
      ],
    }],

    /* ================================================================
       stylelint-plugin-defensive-css
       — 방어적 CSS 코딩 패턴 강제
       ================================================================ */
    "defensive-css/require-custom-property-fallback": true,
    "defensive-css/require-background-repeat": true,
    "defensive-css/require-overscroll-behavior": true,
    "defensive-css/no-accidental-hover": true,
    "defensive-css/require-flex-wrap": true,
    "defensive-css/no-unsafe-will-change": true,

    /* ================================================================
       stylelint-plugin-logical-css
       — 논리적 프로퍼티 사용 권장 (국제화/RTL 대응)
       ================================================================ */
    "logical-css/require-logical-properties": [true, {
      severity: "warning",
    }],
    "logical-css/require-logical-units": [true, {
      severity: "warning",
    }],

    /* ================================================================
       stylelint-plugin-use-baseline
       — Baseline 미지원 CSS 기능 경고
       ================================================================ */
    "plugin/use-baseline": [true, {
      severity: "warning",
    }],

    /* ================================================================
       stylelint-gamut
       — sRGB 색역 범위 초과 색상 감지
       ================================================================ */
    "gamut/color-no-out-gamut-range": true,
  },

  overrides: [
    {
      /* globals.css — 디자인 토큰 정의 파일
         @theme inline 블록의 var() 참조와 :root/.dark의 하드코딩 토큰값은
         시스템 레벨 코드이므로 일부 규칙 완화 */
      files: ["src/app/globals.css"],
      rules: {
        "defensive-css/require-custom-property-fallback": null,
        "scale-unlimited/declaration-strict-value": null,
      },
    },
  ],
};
