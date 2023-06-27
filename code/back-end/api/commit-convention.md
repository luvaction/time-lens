# Git Commit Message Convention

#### `type`

- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 변경
- **style**: 코드 스타일 혹은 포맷 등에 관한 변경 (기능, 로직 변경 없음)
- **refactor**: 코드 리팩토링
- **test**: 테스트 추가 혹은 테스트 리팩토링 (기능, 로직 변경 없음)
- **chore**: 빌드 업무 수정, 패키지 매니저 설정 등 (기능, 로직 변경 없음)

#### `scope`

변경 범위를 나타냅니다. 'auth', 'api', 'app' 등으로 커밋이 영향을 미치는 부분을 명시할 수 있습니다.

#### `subject`

변경 사항을 간결하게 표현합니다.

- 첫 글자는 대문자로 작성
- 마침표는 사용하지 않음
- 명령문으로 작성 - 과거 시제는 피함 (ex. added -> add)

## `Example`

- feat(user-auth): add login function
- fix(user-auth): fix login function bug
- docs(readme): update readme

위의 커밋 메시지 규칙을 따르면, 프로젝트에 기여하는 사람들이 각 커밋이 어떤 변경을 내포하고 있는지 쉽게 파악하고, Git 이력을 깔끔하게 유지할 수 있습니다.
