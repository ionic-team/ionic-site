ionic 웹 사이트 저장소는 ionic 저장소 자체와 별도로 라이센스를 부여 받고 관리합니다.

귀하는 driftyco / ionic-site repo 에 컨트리뷰션함으로써 귀하의 기고 물이 Apache 2.0 라이센스에 따라 라이센스가 부여되는 것에 동의합니다. 이 라이센스에 대한 자세한 내용은 LICENSE 파일을 참조하십시오.

## 가이드 라인
확실하지 않은 경우 풀 요청을 작게 유지하십시오. 몇 가지 관련 변경 사항만 있습니다. 다른 기능이나 변경 사항  을 다른 PR로 분리하여 쉽게 병합 할 수 있습니다.

들여 쓰기를 위해 항상 두 개의 공백을 사용하고 탭을 사용하지 마십시오.

## 구조
content / docs / api, content / docs / api, content / docs / native, content / docs / storage 및 content / dist의 내용은 자동으로 생성됩니다. v1, v2, Ionic Native 및 Ionic Storage 문서는 인라인 코드 주석을 사용하여 각 소스 저장소에 대한 커밋마다 dgeni에 의해 생성됩니다.

이 사이트의 시작은 Github Pages 사이트로 시작되었으며 그 핵심 구조의 많은 부분이 이곳에 남아 있습니다. 다음은 Heroku 서버에 있는 작은 Node.js / Express 앱입니다. 대부분 Node.js 앱은 Jekyll이 생성 한 정적인 html 파일을 제공합니다. 일부 페이지는 Nunjucks 템플릿 (jekyll과 매우 유사한)이 있는 기존 Express 경로를 통해 서버 측에서 생성됩니다. 이들은 서버 디렉토리에 포함되어 있습니다.

모든 커밋마다 Heroku는 클린 빌드를 실행하고 ionic-site-staging.herokuapp.com 에서 노드 서버를 시작합니다. Ionic 핵심 팀은 정기적으로 사이트를 점검하고 준비 서버를 ionicframework.com 으로 승격시킵니다.

이 프로젝트는 여러 방법으로 수행되며 하나의 사이트를 여러 개로 나누고 이를 빌드하고 / 컴파일하는 프로세스가 있습니다. gulp watch는 이러한 모든 기능을 수행하며 대부분의 스타일 및 JS 처리 요구를 충족해야 합니다. 일부 오래된 문서 페이지는 성능상의 이유로 무시될 수 있습니다. exec jekyll 빌드는 성능을 업데이트 해야 합니다.

v1 스타일은 content / scss에 있으며 content / css / site.css로 출력됩니다. v2 스타일은 asset / scss에 있으며 content / css / v2.css로 출력됩니다.

v2 이미지 및 JS는 사전 처리되고 최적화됩니다. 작업 디렉토리는 각각 asset / img 및 asset / js 여야합니다.

Jekyll 규칙에 따라 밑줄로 시작하는 디렉토리는 프로덕션으로 복사되지 않습니다.
