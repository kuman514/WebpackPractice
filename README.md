# 메모 목적 임시 작성: 번들 방법

1. `npm init -y`
2. `npm install webpack webpack-cli --save-dev`
3. `package.json`의 `"scripts"`에 `"build": "webpack --config webpack.config.js"`와 `"build-prod": "webpack -p --config webpack.config.js"` 추가
4. `npm run build`로 빌드가 되는지 확인

# Github Pages 배포 방법

1. `npm install gh-pages --save-dev`
2. `package.json`의 `"scripts"`에 `"predeploy": "npm run build"`와 `"deploy": "gh-pages -d (배포 대상 폴더)"` 추가
3. `package.json`에 `"homepage": "https://(깃허브 아이디).github.io/(리포지토리 이름)/"` 추가
4. `npm run deploy` 명령 실행 후 `https://(깃허브 아이디).github.io/(리포지토리 이름)/` 접속 확인
