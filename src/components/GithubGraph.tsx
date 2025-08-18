import React, { useEffect, useState } from 'react';
import GitHubCalendar, { type ColorScale } from 'react-activity-calendar';

import SubSectionHeader from './SubSectionHeader';
import { ApiResponse, fetchCalendarData } from '~/services/github';
import './index.css';

const GithubGraph: React.FC = () => {
  const colourTheme: ColorScale = ['rgba(0,0,0,0)', '#72888e', '#9baaae', '#d7dddf', '#ffffff'];

  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetchCalendarData('jinhao-l').then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="space-y-3 flex flex-col overflow-hidden githubGraph">
      <SubSectionHeader>My GitHub coding frequency:</SubSectionHeader>
      <GitHubCalendar
        data={data?.contributions || []}
        loading={data === null}
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        theme={{ dark: colourTheme }}
        fontSize={18}
        style={{ width: 'fit-content' }}
      />
    </div>
  );
};

export default GithubGraph;
