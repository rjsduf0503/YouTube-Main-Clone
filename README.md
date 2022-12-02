## 📌 과제 설명 <!-- 어떤 걸 만들었는지 대략적으로 설명해주세요 -->
### 유튜브 메인 페이지 반응형 레이아웃 구현
#### https://youtube-main-clone.vercel.app/

<img src='https://user-images.githubusercontent.com/34560965/205378085-841af8de-08e9-48a0-9901-7ea7f52172b3.gif' width='100%' />


> cd /
>
> npm install percel
>
> percel index.html

## 👩‍💻 요구 사항과 구현 내용 <!-- 기능을 Commit 별로 잘개 쪼개고, Commit 별로 설명해주세요 -->
### [반응형 header 구현](https://github.com/prgrms-fe-devcourse/FEDC3-7_CSS/commit/dff1126359e6bba97a511c244e3831b6681cd986)
### [sidebar, mini-sidebar, modal-sidebar style 구현](https://github.com/prgrms-fe-devcourse/FEDC3-7_CSS/commit/22461b99b4edc5fe7f4a918d7bcd3fda8f5daff6)
### [반응형 content style 구현](https://github.com/prgrms-fe-devcourse/FEDC3-7_CSS/commit/8a7b23a25acb54cf93d9298c547ec2eeeca96cdf)
### [중복 제거 및 파일 분할](https://github.com/prgrms-fe-devcourse/FEDC3-7_CSS/commit/2bf70165b50da42286bbf38d768e742c506c9c0d)

### 기본 요구사항
 
- [X] SCSS로 스타일을 작성하세요.
- [X] 작성된 SCSS를 CSS로 컴파일하세요.
- [X] 제출 프로젝트에 확인 가능한 HTML, CSS, SCSS 파일이 모두 포함돼야 합니다.
- [X] 브라우저에서 정상적으로 출력돼야 합니다.
- [X]  @media를 활용해 반응형 레이아웃으로 구현해야 합니다.
### 선택 요구사항
 
- [ ] JS가 필요한 부분은 생략하고 이유를 명시해 보세요.(CSS로 대체 가능한지 피드백이 있을 수 있어요)
- [ ] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해 보세요.
- [X] 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해 보세요.
- [ ] 시멘틱 태그를 최대한 활용해 보세요.
- [X] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해 보세요.
- [ ] BEM 방법론을 도입해 보세요.

## ✅ 1차 회고 
- 사이드바 여닫는 이벤트를 포함해 여러가지에 애니메이션을 주려고 했는데 찾아보니 display none, block으로 화면을 그리는 방법은 애니메이션이 적용되지 않는다고 해서 visible로 변경할까 했는데 코드를 너무 갈아 엎어야 할 것 같아서 애니메이션까진 넣지 못했다. 혹시 block/none으로도 애니메이션을 넣는 방법이 있을까?
- onClick 이벤트를 걸기 위해 input과 label을 추가하는 방법으로 했는데, 너무 비효울적인 것 같다. 혹시 더 좋은 방법이 있을까?
- BEM 구조 적용하자.
- 미디어 쿼리를 작성할 때 유튜브가 화면 별로 너무 많이 나뉘어져 있어서 media 종류가 좀 많은데, 혹시 mixin을 합친다거나 하는 방법이 있을까? (예를 들어 max-width: 511px인 미디어 쿼리와 min-width: 512px and max-width: 791px인 미디어 쿼리를 합치는 방법)
- svg 파일을 별도로 만드는 게 비효율적이라 생각되어서 유튜브 로고만 코드로 받아오고, 나머지는 비슷한 아이콘으로 대체했는데 이렇게 해도 되는지
- flex를 적용한 곳에서, 마지막 줄, 예를 들어 12개의 아이템이 있고 flex 속성(1, 1, width)으로 한 줄에 5개씩 정렬한다 했을 때 마지막 줄의 2개의 아이템들은 grow 속성 때문에 부모의 width의 반씩(100% / 2개) 나눠가지는 문제가 있었다. 이를 해결하기 위해 고민하다가 처음에 sass나 css에 자식 개수나 특정 class의 개수를 세는 방법이 있는지 찾아봤는데 내가 찾아봤을 때는 없어서 max-width를 하드코딩 방식으로 적용했다. 혹시 이 방법 말고도 flexbox에서 마지막 줄 item들의 width를 고정시킬 수 있는 방법이 있을지
  - _content.scss 파일의 85번째 줄 ~
  
