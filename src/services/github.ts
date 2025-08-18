// Referenced from https://github.com/grubersjoe/react-github-calendar
export type Activity = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export type ApiResponse = {
  total: {
    [year: number]: number
    [year: string]: number // 'lastYear;
  }
  contributions: Array<Activity>
}

export type ApiErrorResponse = {
  error: string
}

export async function fetchCalendarData(username: string): Promise<ApiResponse> {
  const apiUrl = 'https://github-contributions-api.jogruber.de/v4/'
  const response = await fetch(`${apiUrl}${username}?y=last`)
  const data = (await response.json()) as ApiResponse | ApiErrorResponse

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${(data as ApiErrorResponse).error}`,
    )
  }

  return data as ApiResponse
}
