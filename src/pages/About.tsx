import React from 'react';

import GithubGraph from '~/components/GithubGraph';
import IconList from '~/components/IconList';
import Section, { SectionProps } from '~/components/Section';
import SectionBody from '~/components/SectionBody';
import SectionHeader from '~/components/SectionHeader';
import SubSectionHeader from '~/components/SubSectionHeader';
import {
  AWS_ICON,
  DOCKER_ICON,
  EXPRESS_ICON,
  FIGMA_ICON,
  FIREBASE_ICON,
  GIT_ICON,
  GRADLE_ICON,
  GRAPHQL_ICON,
  IONIC_ICON,
  JAVASCRIPT_ICON,
  JAVA_ICON,
  JEST_ICON,
  JIRA_ICON,
  JUPYTER_ICON,
  K8S_ICON,
  KAFKA_ICON,
  LINUX_ICON,
  MOBX_ICON,
  MONGO_ICON,
  NEST_ICON,
  NEXT_JS_ICON,
  NODE_ICON,
  POSTGRES_ICON,
  POSTMAN_ICON,
  PYTHON_ICON,
  REACT_ICON,
  RUBY_ICON,
  STYLED_COMP_ICON,
  TAILWINDCSS_ICON,
  TYPESCRIPT_ICON,
  VIM_ICON,
  VSCODE_ICON,
  WEBPACK_ICON,
} from '~/constants/techIcons';

const About: React.FC<SectionProps> = ({ id, style, className, nextId }) => {
  const DESCRIPTION =
    'I am a Computing Science graduate from the National University of Singapore. ' +
    'I specialises in Software Engineering and Computer Security. ' +
    'I believe that both specialisations are important to create inclusive, secure technologies that will be used by the masses.';

  const SKILLS_INTRO =
    'I have dabbled with both frontend and backend, with a greater proficiency in frontend. ' +
    'Throughout my studies, I have also experienced and tried out various fields of software development, ranging from Cryptocurrency, Chrome Extension, Mobile App development to Web development. ' +
    'The list below are some of the skillsets that I have gained through projects that I have done in my academic, internship or in my own free time.';

  const PROFICIENT = [
    TYPESCRIPT_ICON,
    JAVASCRIPT_ICON,
    REACT_ICON,
    NEXT_JS_ICON,
    PYTHON_ICON,
    RUBY_ICON,
    NEST_ICON,
    POSTGRES_ICON,
    NODE_ICON,
    TAILWINDCSS_ICON,
    GRAPHQL_ICON,
    STYLED_COMP_ICON,
    JEST_ICON,
    JAVA_ICON,
  ];

  const DABBLED = [
    GRADLE_ICON,
    EXPRESS_ICON,
    KAFKA_ICON,
    AWS_ICON,
    MONGO_ICON,
    IONIC_ICON,
    WEBPACK_ICON,
    MOBX_ICON,
  ];

  const TOOLS = [
    VIM_ICON,
    GIT_ICON,
    VSCODE_ICON,
    DOCKER_ICON,
    K8S_ICON,
    LINUX_ICON,
    POSTMAN_ICON,
    FIREBASE_ICON,
    JUPYTER_ICON,
    FIGMA_ICON,
    JIRA_ICON,
  ];

  return (
    <Section id={id} style={style} className={`mb-10 ${className}`} nextId={nextId}>
      <SectionHeader>About Me</SectionHeader>
      <div className="px-8 space-y-7 md:px-10 lg:px-40 xl:px-60 2xl:px-80">
        <SectionBody>{DESCRIPTION}</SectionBody>
        <SectionBody>{SKILLS_INTRO}</SectionBody>
        <div className="space-y-14 ">
          <div className="pt-4 space-y-3">
            <SubSectionHeader>Proficient in:</SubSectionHeader>
            <IconList icons={PROFICIENT} />
          </div>
          <div className="space-y-3">
            <SubSectionHeader>Dabbled with:</SubSectionHeader>
            <IconList icons={DABBLED} />
          </div>
          <div className="space-y-3">
            <SubSectionHeader>Tools I use:</SubSectionHeader>
            <IconList icons={TOOLS} />
          </div>
          <div className="hidden sm:block">
            <GithubGraph />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
