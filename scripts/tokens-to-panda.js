#!/usr/bin/env node

import fs from "fs";
import path from "path";

// 디자인 토큰 파일 읽기
const tokensPath = path.resolve(process.cwd(), "design-tokens.tokens.json");
const designTokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"));

// Panda CSS가 요구하는 형식으로 변환한 결과
const pandaTokens = {
  colors: {},
  fonts: {},
  fontSizes: {},
  fontWeights: {},
  lineHeights: {},
  letterSpacings: {},
  shadows: {},
};

// 색상 변환
if (designTokens.color) {
  processColors(designTokens.color);
}

// 타이포그래피 변환
if (designTokens.typography) {
  processTypography(designTokens.typography);
}

// 그림자 변환
if (designTokens.effect) {
  processShadows(designTokens.effect);
}

// 결과 파일 생성
const outputPath = path.resolve(process.cwd(), "panda-tokens.js");
const output = `
// 이 파일은 자동으로 생성되었습니다. 직접 수정하지 마세요.
// 디자인 토큰에서 변환됨

const tokens = ${JSON.stringify(pandaTokens, null, 2)};

export default tokens;
`;

fs.writeFileSync(outputPath, output, "utf8");
console.log("디자인 토큰이 성공적으로 변환되었습니다: panda-tokens.js");

// --- 변환 함수들 ---

// 색상 처리
function processColors(colorObj, prefix = "") {
  for (const [key, value] of Object.entries(colorObj)) {
    const tokenKey = formatKey(prefix ? `${prefix}-${key}` : key);

    if (value.type === "color" && value.value) {
      const colorValue = value.value.substring(0, 7); // HEX 값 추출 (알파 제외)
      pandaTokens.colors[tokenKey] = { value: colorValue };
    } else if (typeof value === "object" && !value.type) {
      processColors(value, prefix ? `${prefix}-${key}` : key);
    }
  }
}

// 타이포그래피 처리
function processTypography(typoObj) {
  for (const [category, sizes] of Object.entries(typoObj)) {
    for (const [sizeKey, fontStyles] of Object.entries(sizes)) {
      // fontSize가 중첩 객체에 있는 경우
      if (typeof fontStyles === "object" && !fontStyles.fontSize) {
        for (const [weightKey, fontProps] of Object.entries(fontStyles)) {
          if (fontProps.fontSize && fontProps.fontSize.value) {
            // 폰트 사이즈
            const tokenKey = `${category}-${sizeKey.split("px")[0]}`;
            pandaTokens.fontSizes[tokenKey] = {
              value: `${fontProps.fontSize.value}px`,
            };

            // 폰트 두께
            if (fontProps.fontWeight && fontProps.fontWeight.value) {
              const weightKey = `${category}-${fontProps.fontWeight.value}`;
              pandaTokens.fontWeights[weightKey] = {
                value: fontProps.fontWeight.value,
              };
            }

            // 줄 높이
            if (fontProps.lineHeight && fontProps.lineHeight.value) {
              pandaTokens.lineHeights[tokenKey] = {
                value: `${fontProps.lineHeight.value}px`,
              };
            }

            // 자간
            if (fontProps.letterSpacing && fontProps.letterSpacing.value) {
              pandaTokens.letterSpacings[tokenKey] = {
                value: `${fontProps.letterSpacing.value}px`,
              };
            }

            // 폰트 패밀리
            if (fontProps.fontFamily && fontProps.fontFamily.value) {
              const fontName = fontProps.fontFamily.value;
              if (!pandaTokens.fonts[fontName]) {
                pandaTokens.fonts[fontName] = { value: fontName };
              }
            }
          }
        }
      }
      // fontSize가 직접 객체에 있는 경우
      else if (fontStyles.fontSize && fontStyles.fontSize.value) {
        const tokenKey = `${category}-${sizeKey.split("px")[0]}`;
        pandaTokens.fontSizes[tokenKey] = {
          value: `${fontStyles.fontSize.value}px`,
        };

        // 기타 타이포그래피 속성들...
      }
    }
  }
}

// 그림자 처리
function processShadows(effects) {
  for (const [key, effect] of Object.entries(effects)) {
    const tokenKey = formatKey(key);

    // 단일 그림자
    if (effect.type === "custom-shadow" && effect.value) {
      pandaTokens.shadows[tokenKey] = {
        value: createShadowValue(effect.value),
      };
    }
    // 다중 그림자 (0, 1, ... 키로 구성)
    else if (typeof effect === "object" && !effect.type) {
      const shadowValues = [];
      const numericKeys = Object.keys(effect).filter(
        (k) => !isNaN(parseInt(k))
      );

      if (numericKeys.length > 0) {
        for (const numKey of numericKeys) {
          if (effect[numKey].type === "custom-shadow" && effect[numKey].value) {
            shadowValues.push(createShadowValue(effect[numKey].value));
          }
        }

        if (shadowValues.length > 0) {
          pandaTokens.shadows[tokenKey] = {
            value: shadowValues.join(", "),
          };
        }
      }
    }
  }
}

// 그림자 값 생성
function createShadowValue(shadow) {
  const { offsetX, offsetY, radius, spread = 0, color } = shadow;
  return `${offsetX}px ${offsetY}px ${radius}px ${spread}px ${color}`;
}

// 키 포맷팅 (- 구분자 사용)
function formatKey(key) {
  return key.replace(/\s+/g, "-").toLowerCase();
}
