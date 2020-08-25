
export interface INavItem {
  img: string, // 0
  detail: string, // 0 1 2
  group: string, // 1
  url: string // 0 1 2
}

export interface INav {
  name: string, // tab name
  type: number, // 0:图文 1:分组 2:排列 3:name only
  ref: string,
  content: INavItem[], // tab content
}