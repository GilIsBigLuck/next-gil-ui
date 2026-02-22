# gil-ui

Next.js 디자인 시스템 보일러플레이트입니다.

## 기술 스택

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

---

Gil's Design System - React UI Components with Tailwind CSS

## Installation

```bash
# Using GitHub URL
npm install github:GilIsBigLuck/gil-ui

# Or with specific version
npm install github:GilIsBigLuck/gil-ui#v1.0.0
```

## Usage

```tsx
import { Button, Input, Modal } from "gil-ui";
import "gil-ui/styles.css";

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input label="Email" placeholder="Enter email" />
    </div>
  );
}
```

## Components

### Form
- `Input` - 텍스트 입력
- `Textarea` - 여러 줄 입력
- `Select` - 드롭다운 선택
- `Checkbox` - 체크박스
- `Radio`, `RadioGroup` - 라디오 버튼
- `Toggle` - 토글 스위치
- `PasswordInput` - 비밀번호 입력
- `NumberInput` - 숫자 입력
- `DateInput` - 날짜 입력
- `FileUpload` - 파일 업로드

### Feedback
- `Button` - 버튼
- `Badge` - 뱃지
- `Toast` - 토스트 알림
- `Alert`, `Confirm`, `ImagePopup` - 모달

### Navigation
- `Tabs` - 탭
- `Accordion` - 아코디언
- `Pagination` - 페이지네이션
- `Tooltip` - 툴팁

### Data Display
- `Table` - 테이블
- `Card` - 카드

### Loading
- `Skeleton` - 스켈레톤
- `Spinner` - 스피너

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run dev

# Build library
npm run build

# Run tests
npm test
```

## License

MIT
