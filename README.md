# 메모 목적 임시 작성: 번들 방법

1. `npm init -y`
2. `npm install webpack webpack-cli --save-dev`
3. `package.json`의 `'scripts'`에 `"build": "webpack --config webpack.config.js"`와 `"build-prod": "webpack -p --config webpack.config.js"` 추가
4. `npm run build`로 빌드가 되는지 확인
