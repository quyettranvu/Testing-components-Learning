# Testing-components-Learning
Self Learning about react-testing-library and Jest

Configuration to run Jest and React Testing Library on Vite React App:

1/nếu dùng javascript thì @label/preset-react, nếu typescript thì @label/preset-typescript

2/npm install --save--dev jest @babel/preset-env @babel/preset-react @testing-library/react jest-environment-jsdom) @testing-library/jest-dom

Giải thích: 

-Testing cho react: @testing-library/react jest

-This environment(jsdom) is necessary to run Jest tests that use the @testing-library/react library, which requires a DOM environment.

-Hỗ trợ transform: @babel/preset-react

-Compile phiên bản ES6 hoặc hơn: @babel/preset-env

-Cung cấp các utilities cho việc kiểm tra các matches và giúp cho giao diện testing của người dùng trở nên thuận tiện hơn, đồng thời cung cấp các phương thức làm việc với DOM

Trong file babel.config.json:
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/preset-react"
  ]
}

Trong file jest.config.js:
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};

Để sử dụng các utilities của jest-dom thì phải import dòng sau vào trong file:
import "@testing-library/jest-dom/extend-expect";


Result tested with Wallaby.js extension and function "Run and Debug" on VS Code:

![test](https://user-images.githubusercontent.com/79063319/226106436-d13cf718-c778-4ff5-89d3-256afcb732c0.JPG)
![test2](https://user-images.githubusercontent.com/79063319/226106563-a4ac8165-e0dd-478b-ac3f-4e930b907b48.JPG)
