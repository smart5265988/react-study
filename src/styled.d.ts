import 'styled-components';
//스타일드 컴포넌트 기본 테마 설정
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
