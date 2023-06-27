# Port Forwarding Convention

## `Develop/Test Port`

- 개발/테스트 포트는 다음 범위 내에 있어야 합니다: 50000 - 59999.

## `Environment`

환경별 포트는 포트 번호의 두 번째 자릿수로 표시됩니다:

- 로컬 (lcl) 환경: 51xxx
- 개발 (dev) 환경: 52xxx
- 테스트 (tst) 환경: 53xxx
- 사용자 수용 테스트 (UAT) 환경: 54xxx
- 프로덕션 (prd) 환경: 55xxx

## `Level`

계층별 포트는 포트 번호의 세 번째 자릿수로 표시됩니다:

- 데이터베이스: xx0xx
- 오브젝트 스토리지: xx1xx
- API: xx2xx
- 프록시 (웹): xx3xx

## `App`

응용 프로그램별 포트는 포트 번호의 네 번째와 다섯 번째 자릿수로 표시됩니다:

- DoctorPhoto: xxx?0 또는 xxx[01]0
- PhotoKeeper: xxx?? 또는 xxx[01][1-4]
- TimeLens: xxx4x

## `Rule`

- 포트를 할당할 때는 항상 이 규약을 따르려고 노력하세요.
- 적절한 범위 내에서 포트 번호를 사용할 수 없는 경우, 다른 포트 번호를 할당하기 전에 팀과 상의하세요.
- 이미 사용 중인 포트 번호는 할당하지 마세요. 새로운 포트를 할당하기 전에 현재 포트 할당을 확인하세요.
- 포트 할당 변경 사항을 문서화하고, 그 문서가 팀 전체에서 접근 가능하도록 하세요.

---

## `TimeLens's Ports`

각 환경에서 TimeLens 프로젝트의 서비스는 다음의 포트를 사용합니다:

### `local`
- Database: 51000
- API: 51001
- Proxy(Web): 51002

### `dev`
- Database: 52000
- API: 52001
- Proxy(Web): 52002

### `test`
- Database: 53000
- API: 53001
- Proxy(Web): 53002

### `uat`
- Database: 54000
- API: 54001
- Proxy(Web): 54002

### `prod`
- Database: 55000
- API: 55001
- Proxy(Web): 55002
