# 디자인 토큰

## 원칙

모든 스타일 값은 CSS 변수(디자인 토큰)를 사용한다. 하드코딩 금지.

## 토큰 사용 규칙

| 카테고리 | 하드코딩 (금지) | 토큰 사용 (필수) |
|----------|----------------|-----------------|
| 색상 | `#2563eb`, `rgb(37,99,235)` | `primary`, `bg-background` |
| 간격 | `16px`, `1rem` | `var(--space-md)` |
| 그림자 | `0 4px 6px rgba(...)` | `var(--shadow-md)` |
| 반경 | `0.75rem` | `rounded-lg` (radius 토큰) |

## 토큰 참조

| 카테고리 | 토큰 | 값 범위 |
|----------|------|--------|
| 색상 | 시맨틱 변수 | `primary`, `secondary`, `destructive`, `muted`, `accent`, `cta` |
| 간격 | `--space-{size}` | xs(4px), sm(8px), md(16px), lg(24px), xl(32px), 2xl(48px), 3xl(64px) |
| 그림자 | `--shadow-{size}` | sm, md, lg, xl |
| 반경 | `--radius-{size}` | sm, md, lg, xl, 2xl, 3xl, 4xl |

## 파일 위치

- 토큰 정의: `src/app/globals.css` — `:root` (light) / `.dark` (dark)
- 토큰 원본: `design-system/tokens.json` (Figma 연동)
- 동기화: `npm run tokens:build`
