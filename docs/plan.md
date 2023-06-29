# Time Lens

## 의도

- 시간관리 해주는 서비스를 배포 = 광고 | 요금제에 따라 수익 창출

## Description

```
사용자의 계획과 시간을 브라우저에서 관리할 수 있게 해주는 솔루션
특장점 : 일정 관리, 개인의 시간 사용 패턴 분석, 개인화된 템플릿 제공
```

## 수익 구조

1. 광고
2. 요금제
   - Free
   - Subscribe
     1. 고급 분석 기능 (전체 계획을 분석하여 조언)
     2. 광고 제거
     3. 그룹 사용자 협업 기능

## Scenario

1. Signup
2. Login
3. 시간 관리

## 화면 구성

1. GLB

- Location : Header
- 항목 구성
  - Issues : 전체 계획에 대한 C.R.U.D (달력 | 간트 형태 선택 가능)
  - Template : 커스텀 템플릿 작성 그룹별로 관리
  - Env : 환경 설정 (다크모드, ...)
  - Profile : 나의 정보 확인, 수정
  - Help : 도움말

## Tools

- Cloud : AWS
- Dev OS : Windows | Mac
- Production OS : AWS (Ubuntu20.04)
- 런타임 환경 : Node.js
- 통합 IDE : VSCode
- 기획 & Storyboard : Figma
- 환경 구축 : Docker, Docker-Compose
- Database : MySQL with Docker
- Proxy : Nginx with Docker
- API : nest js
- Language : Typescript
- Front-End Framework : vue3
- CI/CD : Jenkins
- Mobile App : Android Studio(Kotlin)


## Back Logs

- 기획 기능 (피그마 벤치마킹)
- 그룹 기능 (레드마인 벤치마킹 + 개인의 권한 위주)