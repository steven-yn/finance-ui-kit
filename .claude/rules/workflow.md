# 컴포넌트 개발 워크플로

컴포넌트를 추가·확장·수정할 때 아래 순서를 따른다. 단계를 건너뛰지 않는다.

## Phase 1: Plan — 요구사항 명세

작업 대상 컴포넌트에 대해 아래 항목을 정리한다:

```markdown
## [ComponentName] 요구사항 명세

### 기능 요구사항
- [ ] 지원할 variant 목록과 각 variant의 시각적 차이
- [ ] 지원할 size 목록 (xs, sm, default, lg + responsive)
- [ ] 상태별 동작 (hover, focus, active, disabled, loading 등)
- [ ] 합성 가능성 (asChild, Slot 패턴 필요 여부)

### 디자인 스펙
- [ ] 각 size별 높이, 패딩, 폰트 크기, 아이콘 크기
- [ ] 색상·간격·그림자·반경 → design-tokens.md 참조

### 접근성
- [ ] 키보드 네비게이션 동작
- [ ] ARIA 속성 (role, aria-label, aria-expanded 등)
- [ ] 포커스 표시 스타일
- [ ] 스크린 리더 지원

### Responsive 매핑
- [ ] 브레이크포인트별 size 매핑 정의
```

## Phase 2: Test — TDD로 테스트 먼저

요구사항 명세 기반으로 테스트를 먼저 작성한다.

- 위치: `src/components/ui/__tests__/[component].test.tsx`
- 프레임워크: Vitest + @testing-library/react

### 커버리지 항목

1. **렌더링** — default props, 각 variant, 각 size, children
2. **Responsive** — responsive가 기본값인지, 브레이크포인트별 클래스 적용
3. **상호작용** — 클릭, disabled 무시, 키보드 (Enter, Space)
4. **접근성** — ARIA 속성 전달, role, 포커스 관리
5. **스타일** — className 병합(cn), data-slot, data-variant, data-size
6. **합성** — asChild (해당 시), ref 전달

## Phase 3: Implement — Responsive Prop 구현

### Responsive Size 패턴 (Button 레퍼런스)

```tsx
size: {
  xs:        "...",
  sm:        "...",
  default:   "...",
  lg:        "...",
  responsive:
    "[xs 스타일] " +
    "sm:[sm 스타일] " +
    "md:[default 스타일] " +
    "lg:[lg 스타일]",
},
defaultVariants: { size: "responsive" }
```

### 체크리스트

- [ ] 기존 shadcn 코드 구조 유지
- [ ] size variant에 responsive 추가, 기본값 변경
- [ ] data-size 속성 반영
- [ ] 디자인 토큰만 사용
- [ ] 테스트 통과 확인

## Phase 4: Story — 스토리북 작성

요구사항 + 테스트에서 Use Case를 도출하여 스토리북 작성.

- 위치: `src/components/ui/[component].stories.tsx`
- 포맷: CSF 3.0

### 필수 스토리

1. **Default** — 기본 렌더링 (responsive)
2. **AllVariants** — 모든 variant 나열
3. **AllSizes** — xs, sm, default, lg 나열
4. **Responsive** — 뷰포트 리사이즈 데모
5. **WithIcon** — 아이콘 포함 (해당 시)
6. **States** — hover, focus, disabled, loading
7. **Playground** — argTypes로 모든 prop 조합
