# Jeonny-BoilerPlate
- Helps with easy initial setup of React or Next project.<br/>(react 또는 next 프로젝트의 손쉬운 초기 설정을 도와줍니다.)

# Includes
## React
### libs
- react
- typescript
- prettier
- eslint
- react-router-dom
- axios

### ESLint/Prettier
- Uses ESLint/Prettier Settings from Airbnb. <br/>(Airbnb 사의 ESLint/Prettier Settings을 사용합니다.)

### Provides 10 foleders for Code classification
- **assets** Stores static files such as images, fonts, and icons. <br/>(이미지, 폰트, 아이콘과 같은 정적 파일들을 저장합니다.)
- **conponents** Stores reusable UI components. <br/>(재사용 가능한 UI 컴포넌트를 저장합니다.)
- **constants** Stores constant values ​​used within the application. <br/>(애플리케이션 내에서 사용되는 상수값을 저장합니다.)
- **hooks** Saves custom custom hooks. <br/>(사용자 정의 커스텀 훅을 저장합니다.)
- **pages** Stores the main view pages displayed by the router. <br/>(라우터에 의해 표시되는 주요 뷰 페이지를 저장합니다.)
- **store** Stores files related to global state management. <br/>(전역 상태 관리와 관련된 파일을 저장합니다.)
- **styles** Save the files associated with the style. <br/>(스타일과 관련된 파일을 저장합니다.)
- **types** Stores custom types utilized in Typescript. <br/>(Typescript에서 활용되는 사용자 정의 타입을 저장합니다.)
- **utils** Stores API functions and utility functions. <br/>(API 함수 및 유틸리티 함수들을 저장합니다.)


## Next (updating...)
- next
- eslint


# How to use
## 1. install package
```bash
npm install -g jeonny-boilderplate
```

## 2. Execute command to create project
- (options) Provides --use option. Enter react or next.
- If you do not enter the --use option, a react project is created by default.

```bash
npx create-jb-app project-name

or 

npx create-jb-app project-name --use next
```

## 3. Go to the root path of the project and run the following command.
- react : npm start
- next : npm run dev

# version
- 1.0.0 : default react project settings with vite
- 2.0.0 : Create-React-App -> Create-React-App, change directory structure
- 3.0.0 : Add next project Creation (Using the use option)

# info
- creator : [Jeonny](https://github.com/wjs5025/)