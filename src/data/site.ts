export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  summary: string;
  links: ProjectLink[];
  placeholder: boolean;
}

export const site = {
  title: "Asher Selwyn · 叶志青",
  description:
    "成都锦城学院计算机科学与技术学生，关注 AI Agent 与大模型应用，公开构建个人产品。",
  nameEn: "Asher Selwyn",
  nameZh: "叶志青",
  school: "成都锦城学院",
  major: "计算机科学与技术",
  focus: "AI Agent / 大模型应用",
  bio: "个人产品以公开方式构建，代码放在 GitHub 上。",
  githubUrl: "https://github.com/Asher-Selwyn",
  githubLabel: "github.com/Asher-Selwyn",
  emailPlaceholder: "your@email.com",
} as const;

export const projects: Project[] = [
  {
    name: "rea",
    summary:
      "基于 Agent 的逆向工程工具项目。公开仓库的描述是：Reverse engineer anything with agents, from app behavior down to native binaries.",
    links: [
      { label: "rea.tools", href: "https://rea.tools" },
      { label: "GitHub", href: "https://github.com/Asher-Selwyn/rea" },
    ],
    placeholder: false,
  },
  {
    name: "待补充",
    summary: "预留项目位。补上名称、一句如实说明，以及仓库或主页链接。",
    links: [],
    placeholder: true,
  },
  {
    name: "待补充",
    summary: "另一个预留位。写法与上一张相同，有公开项目后再填。",
    links: [],
    placeholder: true,
  },
];
