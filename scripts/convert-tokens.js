#!/usr/bin/env node

import fs from "fs";
import path from "path";

// 디자인 토큰 파일 읽기
const designTokensPath = path.resolve(
  process.cwd(),
  "design-tokens.tokens.json"
);
const designTokens = JSON.parse(fs.readFileSync(designTokensPath, "utf8"));

// 변환된 결과를 저장할 객체
const pandaTokens = {
  theme: {
    colors: {},
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    shadows: {},
  },
};

// 색상 변환
if (designTokens.color) {
  processColors(designTokens.color, pandaTokens.theme.colors);
}

// 타이포그래피 변환
if (designTokens.typography) {
  processTypography(designTokens.typography, pandaTokens.theme);
}

// 그림자 변환
if (designTokens.effect) {
  processShadows(designTokens.effect, pandaTokens.theme.shadows);
}

// 결과를 theme.js로 저장
const outputPath = path.resolve(process.cwd(), "panda-theme.js");
const output = `
// 이 파일은 자동으로 생성되었습니다. 직접 수정하지 마세요.
// design-tokens.tokens.json 파일을 수정한 후 스크립트를 다시 실행하세요.

export const theme = ${JSON.stringify(pandaTokens, null, 2)};
`;

fs.writeFileSync(outputPath, output, "utf8");
console.log(`토큰 변환 완료. panda-theme.js 파일이 생성되었습니다.`);

// 색상 처리 함수
function processColors(colorObj, resultObj, prefix = "") {
  for (const [key, value] of Object.entries(colorObj)) {
    const tokenKey = prefix ? `${prefix}.${key}` : key;

    if (value.type === "color" && value.value) {
      // HEX 색상 값을 추출
      let colorValue = value.value;

      // 투명도 처리 (HEX에서 마지막 2자리가 투명도)
      if (colorValue.length === 9) {
        // 투명도를 적용할 필요가 있으면 여기서 처리
        // 현재는 마지막 2자리(알파) 제외하고 사용
        colorValue = colorValue.substring(0, 7);
      }

      resultObj[formatKey(tokenKey)] = colorValue;
    } else if (typeof value === "object" && !value.type) {
      // 중첩된 객체인 경우 재귀 호출
      processColors(value, resultObj, tokenKey);
    }
  }
}

// 타이포그래피 처리 함수
function processTypography(typoObj, resultObj) {
  for (const [category, sizes] of Object.entries(typoObj)) {
    for (const [sizeKey, weights] of Object.entries(sizes)) {
      if (typeof weights === "object") {
        if (sizeKey.includes("px")) {
          const fontSize = sizeKey.split("px")[0];

          // 이미 px로 끝나는 키인 경우와 중첩된 객체인 경우 구분
          if (weights.fontSize) {
            // 직접 fontSize 필드를 가진 경우 처리
            processFontProperties(weights, resultObj, category, fontSize);
          } else {
            // 중첩된 객체인 경우 (예: 40px.400, 40px.700)
            for (const [weightKey, fontProps] of Object.entries(weights)) {
              processFontProperties(
                fontProps,
                resultObj,
                category,
                fontSize,
                weightKey
              );
            }
          }
        }
      }
    }
  }
}

// 폰트 속성 처리 함수
function processFontProperties(
  fontProps,
  resultObj,
  category,
  fontSize,
  weightKey = ""
) {
  if (fontProps.fontSize && fontProps.fontSize.value) {
    // fontSize 처리
    const size = fontProps.fontSize.value;
    resultObj.fontSizes[`${category}.${fontSize}`] = `${size}px`;

    // fontFamily 처리
    if (fontProps.fontFamily && fontProps.fontFamily.value) {
      const fontFamily = fontProps.fontFamily.value;
      if (!resultObj.fonts[fontFamily]) {
        resultObj.fonts[fontFamily] = fontFamily;
      }
    }

    // fontWeight 처리
    if (fontProps.fontWeight && fontProps.fontWeight.value) {
      const weight = fontProps.fontWeight.value;
      resultObj.fontWeights[`${category}.${weight}`] = weight;
    }

    // lineHeight 처리
    if (fontProps.lineHeight && fontProps.lineHeight.value) {
      const lineHeight = fontProps.lineHeight.value;
      resultObj.lineHeights[`${category}.${fontSize}`] = `${lineHeight}px`;
    }

    // letterSpacing 처리
    if (fontProps.letterSpacing && fontProps.letterSpacing.value) {
      const spacing = fontProps.letterSpacing.value;
      resultObj.letterSpacings[`${category}.${fontSize}`] = `${spacing}px`;
    }
  }
}

// 그림자 처리 함수
function processShadows(effectObj, resultObj) {
  for (const [key, value] of Object.entries(effectObj)) {
    // 단일 그림자인 경우
    if (value.type === "custom-shadow" && value.value) {
      const shadowValue = createShadowValue(value.value);
      resultObj[formatKey(key)] = shadowValue;
    }
    // 여러 그림자를 포함하는 경우 (0, 1, ... 키 포함)
    else if (typeof value === "object" && !value.type) {
      const shadows = [];
      const numericKeys = Object.keys(value).filter((k) => !isNaN(parseInt(k)));

      if (numericKeys.length > 0) {
        // 여러 그림자 처리
        for (const numKey of numericKeys) {
          const shadowObj = value[numKey];
          if (shadowObj.type === "custom-shadow" && shadowObj.value) {
            shadows.push(createShadowValue(shadowObj.value));
          }
        }
        if (shadows.length > 0) {
          resultObj[formatKey(key)] = shadows.join(", ");
        }
      }
    }
  }
}

// 그림자 값 생성 함수
function createShadowValue(shadowObj) {
  const { offsetX, offsetY, radius, spread, color } = shadowObj;
  return `${offsetX}px ${offsetY}px ${radius}px ${spread || 0}px ${color}`;
}

// 키 포맷팅 함수 (공백과 특수문자 처리)
function formatKey(key) {
  return key.replace(/\s+/g, "-").toLowerCase();
}
