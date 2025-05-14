const StyleDictionary = require("style-dictionary");

// Panda CSS 포맷 등록
StyleDictionary.registerFormat({
  name: "pandacss/tokens",
  formatter: function ({ dictionary, options }) {
    const transformTokens = (tokens) => {
      const result = {};

      // 객체를 재귀적으로 순회하며 Panda CSS 형식으로 변환
      const processObject = (obj, path = []) => {
        const result = {};

        for (const key in obj) {
          if (obj[key].value !== undefined) {
            // 값이 있는 토큰 처리
            result[key] = { value: obj[key].value };
          } else if (typeof obj[key] === "object") {
            // 하위 객체 처리
            result[key] = processObject(obj[key], [...path, key]);
          }
        }

        return result;
      };

      // 토큰 타입별 처리
      const colorTokens = dictionary.allTokens.filter(
        (token) => token.type === "color"
      );
      result.colors = processObject(dictionary.tokens.color || {});

      // 타이포그래피 관련 토큰 처리
      if (dictionary.tokens.font) {
        result.fonts = processObject(dictionary.tokens.font || {});
      }

      if (dictionary.tokens.fontSize) {
        result.fontSizes = processObject(dictionary.tokens.fontSize || {});
      }

      if (dictionary.tokens.fontWeight) {
        result.fontWeights = processObject(dictionary.tokens.fontWeight || {});
      }

      if (dictionary.tokens.lineHeight) {
        result.lineHeights = processObject(dictionary.tokens.lineHeight || {});
      }

      if (dictionary.tokens.spacing) {
        result.spacing = processObject(dictionary.tokens.spacing || {});
      }

      // 그 외 필요한 토큰 처리

      return result;
    };

    const tokens = transformTokens(dictionary.tokens);

    return `
// 이 파일은 자동으로 생성되었습니다. 직접 수정하지 마세요.
// 원본 디자인 토큰에서 생성됨

export default ${JSON.stringify(tokens, null, 2)};
    `;
  },
});

// 디자인 토큰 변환 설정
module.exports = {
  source: ["design-tokens.tokens.json"],
  platforms: {
    pandacss: {
      transformGroup: "js",
      buildPath: "./",
      files: [
        {
          destination: "panda-tokens.js",
          format: "pandacss/tokens",
        },
      ],
    },
  },
};
