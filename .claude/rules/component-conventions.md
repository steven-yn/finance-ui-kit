# 컴포넌트 컨벤션

## 기본 구조

- 위치: `src/components/ui/`
- shadcn/ui 원본 구조 유지 — `cva` + `cn()` 패턴
- `data-slot` 속성으로 서브 컴포넌트 식별

## Responsive Size

- size prop의 기본값은 `"responsive"`
- 브레이크포인트별 size 자동 매핑:

```
xs 스타일 (base)  →  모바일
sm: 스타일         →  640px+
md: 스타일         →  768px+ (default size와 동일)
lg: 스타일         →  1024px+
```

- cva defaultVariants와 컴포넌트 함수 파라미터 모두 `"responsive"` 기본값
- `data-size` 속성에 현재 size 값 반영

## 스타일 규칙

- Tailwind 유틸리티 클래스 사용 (임의값 `[...]` 지양)
- 색상은 시맨틱 토큰만 사용 (`.claude/rules/design-tokens.md` 참조)
- `cn()` 유틸리티로 className 병합
