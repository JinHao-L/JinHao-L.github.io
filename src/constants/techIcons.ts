import {
  SiAdobexd,
  SiAmazonwebservices,
  SiApachekafka,
  SiBinance,
  SiCodemirror,
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglemaps,
  SiGradle,
  SiGraphql,
  SiIonic,
  SiJavascript,
  SiJira,
  SiJunit5,
  SiJupyter,
  SiKubernetes,
  SiLeetcode,
  SiMapbox,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPassport,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiRubyonrails,
  SiSocketdotio,
  SiStyledcomponents,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVim,
  SiWebpack,
  SiZoom,
  SiJest,
  SiMobx,
} from 'react-icons/si';
import { FcLinux } from 'react-icons/fc';
import { DiVisualstudio } from 'react-icons/di';
import JavaSvg from '~/assets/logo/java.svg?react';
import EthersSvg from '~/assets/logo/ethers.svg?react';
import SwitcheoSvg from '~/assets/logo/swth.svg?react';
import ZilliqaSvg from '~/assets/logo/zilliqa.svg?react';
import ChromeSvg from '~/assets/logo/chrome.svg?react';
import RxjsSvg from '~/assets/logo/rxjs.svg?react';
import ReactQuerySvg from '~/assets/logo/react-query.svg?react';
import JenkinsSvg from '~/assets/logo/jenkins.svg?react';
import React from 'react';

export interface TechIconType {
  name: string;
  Icon: React.FC<React.SVGAttributes<SVGElement>>;
  color?: string;
  link?: string;
}

export const TYPESCRIPT_ICON = { Icon: SiTypescript, name: 'Typescript', color: '#007acc' };
export const JAVASCRIPT_ICON = { Icon: SiJavascript, name: 'Javascript', color: '#F0DB4F' };
export const REACT_ICON = { Icon: SiReact, name: 'React (JS & Native)', color: '#61DBFB' };
export const REACT_JS_ICON = { Icon: SiReact, name: 'React JS', color: '#61DBFB' };
export const NEXT_JS_ICON = {
  Icon: SiNextdotjs,
  name: 'Next.JS',
  color: '#A8B9C0',
  link: 'https://nextjs.org/',
};
export const REACT_NATIVE_ICON = { Icon: SiReact, name: 'React Native', color: '#61DBFB' };
export const PYTHON_ICON = { Icon: SiPython, name: 'Python', color: '#4B8BBE' };
export const NEST_ICON = {
  Icon: SiNestjs,
  name: 'NestJS',
  color: '#E0234E',
  link: 'https://nestjs.com/',
};
export const POSTGRES_ICON = { Icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' };
export const NODE_ICON = { Icon: SiNodedotjs, name: 'NodeJS', color: '#68a063' };
export const GRAPHQL_ICON = { Icon: SiGraphql, name: 'GraphQL', color: '#E535AB' };
export const CSS_ICON = { Icon: SiCss3, name: 'CSS', color: '#0A90F0' };
export const STYLED_COMP_ICON = {
  Icon: SiStyledcomponents,
  name: 'Styled Components',
  color: 'pink',
  link: 'https://styled-components.com/',
};

export const JAVA_ICON = { Icon: JavaSvg, name: 'Java', color: '#f89820' };
export const GRADLE_ICON = { Icon: SiGradle, name: 'Gradle', color: '#0FA4CC' };
export const EXPRESS_ICON = { Icon: SiExpress, name: 'ExpressJS', color: '#ffffff' };
export const KAFKA_ICON = { Icon: SiApachekafka, name: 'Apache Kafka', color: '#D3D3D3' };
export const K8S_ICON = { Icon: SiKubernetes, name: 'Kubernetes', color: '#326ce5' };
export const AWS_ICON = { Icon: SiAmazonwebservices, name: 'AWS Services', color: '#FF9900' };
export const MONGO_ICON = { Icon: SiMongodb, name: 'MongoDB', color: '#3FA037' };
export const IONIC_ICON = { Icon: SiIonic, name: 'Ionic', color: '#498AFF' };
export const WEBPACK_ICON = { Icon: SiWebpack, name: 'Webpack', color: '#1c78c0' };
export const RUBY_ICON = { Icon: SiRubyonrails, name: 'Ruby on Rails', color: '#cc0000' };

export const VIM_ICON = { Icon: SiVim, name: 'Vim', color: '#029833' };
export const GITHUB_ICON = { Icon: SiGithub, name: 'Github', color: '#f34f29' };
export const GIT_ICON = { Icon: SiGit, name: 'Git', color: '#f34f29' };
export const VSCODE_ICON = { Icon: DiVisualstudio, name: 'VS Code', color: '#0078d7' };
export const DOCKER_ICON = { Icon: SiDocker, name: 'Docker', color: '#0db7ed' };
export const LINUX_ICON = { Icon: FcLinux, name: 'Linux (Ubuntu)' };
export const POSTMAN_ICON = { Icon: SiPostman, name: 'Postman', color: '#F15A24' };
export const JUPYTER_ICON = { Icon: SiJupyter, name: 'Jupyter Notebook', color: '#F37726' };
export const FIREBASE_ICON = { Icon: SiFirebase, name: 'Firebase', color: '#FCCA3F' };
export const EXPO_ICON = { Icon: SiExpo, name: 'Expo', color: '#D3D3D3' };
export const FIGMA_ICON = { Icon: SiFigma, name: 'Figma', color: '#E04A34' };
export const JIRA_ICON = { Icon: SiJira, name: 'Jira', color: '#0052CC' };

export const SOCKET_ICON = { Icon: SiSocketdotio, name: 'Socket.io', color: '#D3D3D3' };
export const PASSPORT_JS_ICON = { Icon: SiPassport, name: 'Passport.js', color: '#00B9F1' };
export const ZOOM_ICON = { Icon: SiZoom, name: 'Zoom API', color: '#2D8CFF' };
export const SWAGGER_ICON = { Icon: SiSwagger, name: 'Swagger Docs', color: '#19b6b5' };
export const LEETCODE_ICON = { Icon: SiLeetcode, name: 'Leetcode API', color: '#F69C14' };
export const CODEMIRROR_ICON = { Icon: SiCodemirror, name: 'CodeMirror', color: '#FFFFFF' };
export const TAILWINDCSS_ICON = { Icon: SiTailwindcss, name: 'Tailwind', color: '#09B6D4' };
export const MAPBOX_ICON = { Icon: SiMapbox, name: 'Mapbox', color: '#4164FB' };
export const JUNIT5_ICON = { Icon: SiJunit5, name: 'JUnit 5', color: '#DC524A' };
export const JAVAFX_ICON = { Icon: JavaSvg, name: 'JavaFX', color: '#f89820' };
export const REDUX_ICON = { Icon: SiRedux, name: 'React Redux', color: '#764abc' };
export const ADOBE_XD_ICON = { Icon: SiAdobexd, name: 'Adobe XD', color: '#FE61F7' };
export const GOOGLE_MAPS_ICON = { Icon: SiGooglemaps, name: 'Google Maps API', color: '#4285F4' };
export const REACT_QUERY_ICON = {
  Icon: ReactQuerySvg,
  name: 'React Query',
  link: 'https://tanstack.com/query/v4',
};

export const ZILLIQA_ICON = {
  Icon: ZilliqaSvg,
  name: 'Zilliqa',
  link: 'https://github.com/Zilliqa/zilliqa-js',
};
export const BINANCE_ICON = {
  Icon: SiBinance,
  name: 'Binance',
  color: '#F0B90B',
  link: 'https://github.com/bnb-chain/javascript-sdk',
};
export const ETHEREUM_ICON = { Icon: EthersSvg, name: 'Ethers', link: 'https://docs.ethers.io/' };
export const SWITCHEO_ICON = {
  Icon: SwitcheoSvg,
  name: 'Switcheo Tradehub',
  link: 'https://github.com/Switcheo/tradehub-api-js',
};

export const CHROME_ICON = { Icon: ChromeSvg, name: 'Chrome Extension' };

export const RXJS_ICON = { Icon: RxjsSvg, name: 'RxJS', link: 'https://rxjs.dev/' };

export const JENKINS_ICON = { Icon: JenkinsSvg, name: 'Jenkins' };

export const MOBX_ICON = {
  Icon: SiMobx,
  name: 'MobX',
  color: '#FF9955',
  link: 'https://mobx.js.org/README.html',
};

export const JEST_ICON = {
  Icon: SiJest,
  name: 'Jest',
  color: '#99425B',
  link: 'https://jestjs.io/',
};
