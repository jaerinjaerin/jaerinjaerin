# 포트폴리오 데이터 활용 가이드

`portfolio-data.json` 파일을 다양한 방식으로 활용하는 방법을 안내합니다.

## 📁 파일 구조

```
├── portfolio-data.json          # 프로젝트 데이터 (JSON)
├── portfolio-data.types.ts      # TypeScript 타입 정의
└── PORTFOLIO_USAGE_GUIDE.md     # 이 가이드
```

## 🎯 활용 사례

### 1. 포트폴리오 웹사이트

#### React 컴포넌트 예시

```tsx
import portfolioData from './portfolio-data.json';
import type { Project } from './portfolio-data.types';

// 프로젝트 카드 컴포넌트
export function ProjectCard({ language = 'ko' }: { language: 'ko' | 'en' }) {
  const project = portfolioData.project;

  return (
    <div className="project-card">
      <h2>{project.title[language]}</h2>
      <p>{project.overview[language]}</p>

      {/* 주요 지표 */}
      <div className="metrics">
        {project.keyMetrics.map((metric, index) => (
          <div key={index} className={metric.highlight ? 'highlight' : ''}>
            <span className="value">{metric.value}{metric.unit}</span>
            <span className="label">{metric.label[language]}</span>
          </div>
        ))}
      </div>

      {/* 기술 스택 */}
      <div className="tech-stack">
        {project.techStack.frontend.map((tech) => (
          <span key={tech.name} className="tech-badge">
            {tech.name} {tech.version}
          </span>
        ))}
      </div>

      {/* 태그 */}
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

// 상세 페이지 컴포넌트
export function ProjectDetail({ language = 'ko' }: { language: 'ko' | 'en' }) {
  const project = portfolioData.project;

  return (
    <article className="project-detail">
      {/* 헤더 */}
      <header>
        <h1>{project.title[language]}</h1>
        <div className="meta">
          <span>{project.period.duration}</span>
          <span>{project.role[language]}</span>
          <span>{project.client}</span>
        </div>
      </header>

      {/* 개요 */}
      <section>
        <h2>프로젝트 개요</h2>
        <p>{project.overview[language]}</p>
      </section>

      {/* 문제 & 해결 */}
      <section>
        <h2>Problem & Solution</h2>
        <div className="problem-solution">
          <div className="problem">
            <h3>문제</h3>
            <p>{project.problem[language]}</p>
          </div>
          <div className="solution">
            <h3>해결</h3>
            <p>{project.solution[language]}</p>
          </div>
        </div>
      </section>

      {/* 주요 담당 업무 */}
      <section>
        <h2>주요 담당 업무</h2>
        {project.responsibilities
          .sort((a, b) => a.order - b.order)
          .map((resp) => (
            <div key={resp.id} className="responsibility">
              <h3>{resp.title[language]}</h3>
              <ul>
                {resp.tasks.map((task, idx) => (
                  <li key={idx}>{task[language]}</li>
                ))}
              </ul>
              {/* 기술 상세 */}
              <details>
                <summary>기술 상세</summary>
                <ul>
                  {resp.technicalDetails.map((detail, idx) => (
                    <li key={idx}><code>{detail}</code></li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
      </section>

      {/* 주요 성과 */}
      <section>
        <h2>주요 성과</h2>
        {project.achievements.map((achievement, idx) => (
          <div
            key={idx}
            className={`achievement impact-${achievement.impact}`}
          >
            <p>{achievement[language]}</p>
            <span className="category">{achievement.category}</span>
          </div>
        ))}
      </section>

      {/* 도전 과제 */}
      <section>
        <h2>도전 과제 및 해결</h2>
        {project.challenges.map((challenge, idx) => (
          <div key={idx} className="challenge">
            <h3>{challenge.title[language]}</h3>
            <div className="psr">
              <div>
                <strong>문제:</strong> {challenge.problem[language]}
              </div>
              <div>
                <strong>해결:</strong> {challenge.solution[language]}
              </div>
              <div>
                <strong>결과:</strong> {challenge.result[language]}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 주요 기능 */}
      <section>
        <h2>주요 기능</h2>
        <div className="features">
          {project.features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title[language]}</h3>
              <p>{feature.description[language]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 스크린샷 */}
      <section>
        <h2>스크린샷</h2>
        <div className="screenshots">
          {project.screenshots.map((screenshot, idx) => (
            <figure key={idx}>
              <img src={screenshot.url} alt={screenshot.title} />
              <figcaption>
                <strong>{screenshot.title}</strong>
                <p>{screenshot.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 학습 내용 */}
      <section>
        <h2>학습 내용</h2>
        <ul>
          {project.learnings.map((learning, idx) => (
            <li key={idx}>{learning[language]}</li>
          ))}
        </ul>
      </section>

      {/* 키워드 (SEO용) */}
      <div className="keywords" style={{ display: 'none' }}>
        {project.keywords.join(', ')}
      </div>
    </article>
  );
}
```

#### Next.js 페이지 예시

```tsx
// app/projects/[id]/page.tsx
import { Metadata } from 'next';
import portfolioData from '@/portfolio-data.json';

export async function generateMetadata(): Promise<Metadata> {
  const project = portfolioData.project;

  return {
    title: `${project.title.ko} | 포트폴리오`,
    description: project.overview.ko,
    keywords: project.keywords,
    openGraph: {
      title: project.title.ko,
      description: project.overview.ko,
      images: project.screenshots.map(s => s.url),
    },
  };
}

export default function ProjectPage() {
  return <ProjectDetail language="ko" />;
}
```

### 2. 이력서 (Resume) 생성

#### 마크다운 생성 스크립트

```typescript
// generate-resume.ts
import fs from 'fs';
import portfolioData from './portfolio-data.json';

function generateMarkdownResume(language: 'ko' | 'en' = 'ko') {
  const project = portfolioData.project;

  let markdown = `# ${project.title[language]}\n\n`;
  markdown += `**기간**: ${project.period.start} ~ ${project.period.end}\n`;
  markdown += `**역할**: ${project.role[language]}\n`;
  markdown += `**클라이언트**: ${project.client}\n\n`;

  markdown += `## 프로젝트 개요\n\n`;
  markdown += `${project.overview[language]}\n\n`;

  markdown += `## 주요 성과\n\n`;
  project.keyMetrics.forEach(metric => {
    markdown += `- **${metric.label[language]}**: ${metric.value}${metric.unit}\n`;
  });
  markdown += `\n`;

  markdown += `## 기술 스택\n\n`;
  markdown += `**Frontend**: ${project.techStack.frontend.map(t => t.name).join(', ')}\n`;
  markdown += `**Styling**: ${project.techStack.styling.map(t => t.name).join(', ')}\n\n`;

  markdown += `## 주요 담당 업무\n\n`;
  project.responsibilities
    .sort((a, b) => a.order - b.order)
    .forEach(resp => {
      markdown += `### ${resp.title[language]}\n\n`;
      resp.tasks.forEach(task => {
        markdown += `- ${task[language]}\n`;
      });
      markdown += `\n`;
    });

  markdown += `## 주요 성과\n\n`;
  project.achievements.forEach(achievement => {
    markdown += `- ${achievement[language]}\n`;
  });

  return markdown;
}

// 실행
const resume = generateMarkdownResume('ko');
fs.writeFileSync('resume-project.md', resume);
console.log('이력서가 생성되었습니다: resume-project.md');
```

### 3. PDF 이력서 생성

```typescript
// generate-pdf-resume.ts (puppeteer 사용)
import puppeteer from 'puppeteer';
import portfolioData from './portfolio-data.json';

async function generatePDFResume(language: 'ko' | 'en' = 'ko') {
  const project = portfolioData.project;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Noto Sans KR', sans-serif; padding: 40px; }
        h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
        h2 { color: #34495e; margin-top: 30px; }
        .metric { display: inline-block; margin: 10px 20px 10px 0; }
        .metric .value { font-size: 24px; font-weight: bold; color: #3498db; }
        .tech-badge {
          display: inline-block;
          background: #ecf0f1;
          padding: 5px 10px;
          margin: 5px;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <h1>${project.title[language]}</h1>
      <p><strong>기간:</strong> ${project.period.duration}</p>
      <p><strong>역할:</strong> ${project.role[language]}</p>

      <h2>주요 지표</h2>
      ${project.keyMetrics.map(m => `
        <div class="metric">
          <div class="value">${m.value}${m.unit}</div>
          <div class="label">${m.label[language]}</div>
        </div>
      `).join('')}

      <h2>기술 스택</h2>
      ${project.techStack.frontend.map(t =>
        `<span class="tech-badge">${t.name} ${t.version || ''}</span>`
      ).join('')}

      <!-- 더 많은 섹션 추가 -->
    </body>
    </html>
  `;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true
  });
  await browser.close();

  console.log('PDF 이력서가 생성되었습니다: resume.pdf');
}

generatePDFResume('ko');
```

### 4. LinkedIn 요약 생성

```typescript
// generate-linkedin-summary.ts
import portfolioData from './portfolio-data.json';

function generateLinkedInSummary(language: 'ko' | 'en' = 'ko') {
  const project = portfolioData.project;

  let summary = `${project.title[language]}\n\n`;

  // 핵심 성과 강조
  const topMetrics = project.keyMetrics
    .filter(m => m.highlight)
    .map(m => `✅ ${m.label[language]}: ${m.value}${m.unit}`)
    .join('\n');

  summary += `${topMetrics}\n\n`;

  // 주요 기술
  const skills = [
    ...project.techStack.frontend.map(t => t.name),
    ...project.tags
  ].slice(0, 10).join(' · ');

  summary += `🛠 ${skills}\n\n`;

  // 핵심 성과 3개
  const topAchievements = project.achievements
    .filter(a => a.impact === 'high')
    .slice(0, 3)
    .map(a => `• ${a[language]}`)
    .join('\n');

  summary += `${topAchievements}\n\n`;

  summary += `#${project.tags.join(' #')}`;

  return summary;
}

console.log(generateLinkedInSummary('ko'));
```

### 5. 블로그 포스트 템플릿

```typescript
// generate-blog-post.ts
import portfolioData from './portfolio-data.json';

function generateBlogPost(language: 'ko' | 'en' = 'ko') {
  const project = portfolioData.project;

  let post = `---
title: "${project.title[language]}"
date: ${project.metadata.createdAt}
tags: [${project.tags.join(', ')}]
category: ${project.category}
---

# ${project.title[language]}

![메인 이미지](${project.screenshots[0]?.url})

## 프로젝트 개요

${project.overview[language]}

## 문제 정의

${project.problem[language]}

## 해결 방법

${project.solution[language]}

## 주요 도전 과제

`;

  project.challenges.forEach((challenge, idx) => {
    post += `
### ${idx + 1}. ${challenge.title[language]}

**문제**
${challenge.problem[language]}

**해결**
${challenge.solution[language]}

**결과**
${challenge.result[language]}

`;
  });

  post += `
## 기술 스택

`;

  post += `### Frontend
${project.techStack.frontend.map(t =>
  `- **${t.name}** ${t.version || ''}: ${t.description}`
).join('\n')}

`;

  post += `
## 학습한 점

${project.learnings.map(l => `- ${l[language]}`).join('\n')}

## 결론

이 프로젝트를 통해 ${project.achievements.length}개의 주요 성과를 달성했습니다.

---

**키워드**: ${project.keywords.join(', ')}
`;

  return post;
}

console.log(generateBlogPost('ko'));
```

### 6. JSON Resume 형식으로 변환

```typescript
// convert-to-json-resume.ts
import portfolioData from './portfolio-data.json';

function convertToJSONResume() {
  const project = portfolioData.project;

  return {
    basics: {
      name: "Your Name",
      label: "Frontend Developer",
      email: "your.email@example.com",
      summary: project.overview.ko
    },
    work: [
      {
        name: project.client,
        position: project.role.ko,
        startDate: project.period.start,
        endDate: project.period.end,
        summary: project.overview.ko,
        highlights: project.achievements.map(a => a.ko)
      }
    ],
    projects: [
      {
        name: project.title.ko,
        description: project.overview.ko,
        highlights: project.responsibilities.flatMap(r =>
          r.tasks.map(t => t.ko)
        ),
        keywords: project.tags,
        startDate: project.period.start,
        endDate: project.period.end,
        url: project.links.live,
        roles: [project.role.ko],
        entity: project.client,
        type: project.category
      }
    ],
    skills: [
      {
        name: "Frontend",
        keywords: project.techStack.frontend.map(t => t.name)
      }
    ]
  };
}

console.log(JSON.stringify(convertToJSONResume(), null, 2));
```

## 🔍 데이터 필터링 및 검색

```typescript
// utils/portfolio-utils.ts
import type { Project, ProjectFilter } from './portfolio-data.types';

export function filterProjects(
  projects: Project[],
  filter: ProjectFilter
): Project[] {
  return projects.filter(project => {
    if (filter.tags && !filter.tags.some(tag => project.tags.includes(tag))) {
      return false;
    }
    if (filter.category && project.category !== filter.category) {
      return false;
    }
    if (filter.status && project.status !== filter.status) {
      return false;
    }
    if (filter.featured !== undefined && project.metadata.featured !== filter.featured) {
      return false;
    }
    return true;
  });
}

export function searchProjects(
  projects: Project[],
  query: string,
  language: 'ko' | 'en' = 'ko'
): Project[] {
  const lowercaseQuery = query.toLowerCase();

  return projects.filter(project => {
    return (
      project.title[language].toLowerCase().includes(lowercaseQuery) ||
      project.overview[language].toLowerCase().includes(lowercaseQuery) ||
      project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      project.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery))
    );
  });
}
```

## 📊 통계 생성

```typescript
// generate-stats.ts
import portfolioData from './portfolio-data.json';

function generateProjectStats() {
  const project = portfolioData.project;

  return {
    총_기술_스택:
      project.techStack.frontend.length +
      project.techStack.styling.length +
      project.techStack.tools.length +
      project.techStack.integration.length,
    총_태그: project.tags.length,
    총_담당업무: project.responsibilities.length,
    총_태스크: project.responsibilities.reduce((sum, r) => sum + r.tasks.length, 0),
    총_성과: project.achievements.length,
    고영향_성과: project.achievements.filter(a => a.impact === 'high').length,
    총_도전과제: project.challenges.length,
    총_기능: project.features.length,
    총_학습내용: project.learnings.length,
    주요_키워드: project.keywords.slice(0, 10)
  };
}

console.log(generateProjectStats());
```

## 🎨 CSS 예시

```css
/* portfolio-styles.css */
.project-card {
  border: 1px solid #e1e8ed;
  border-radius: 12px;
  padding: 24px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

.metrics .highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px;
  border-radius: 8px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
}

.tech-badge {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
}

.achievement.impact-high {
  border-left: 4px solid #48bb78;
  padding-left: 16px;
}

.achievement.impact-medium {
  border-left: 4px solid #4299e1;
  padding-left: 16px;
}
```

## 📱 모바일 앱 데이터 소스

React Native나 Flutter 앱에서도 동일한 JSON을 사용할 수 있습니다:

```typescript
// React Native 예시
import portfolioData from './portfolio-data.json';

export function ProjectScreen() {
  const project = portfolioData.project;

  return (
    <ScrollView>
      <Text style={styles.title}>{project.title.ko}</Text>
      <Text style={styles.overview}>{project.overview.ko}</Text>

      <View style={styles.metricsContainer}>
        {project.keyMetrics.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </View>
    </ScrollView>
  );
}
```

## 🔄 다른 프로젝트 추가하기

프로젝트를 추가할 때는 배열로 확장:

```json
{
  "projects": [
    { /* 현재 프로젝트 */ },
    { /* 새로운 프로젝트 */ }
  ]
}
```

## 💡 팁

1. **다국어 자동화**: i18next와 통합하여 자동 번역
2. **CMS 통합**: Contentful, Strapi 등과 연동 가능
3. **버전 관리**: Git으로 프로젝트 이력 추적
4. **자동 배포**: JSON 변경 시 자동으로 사이트 재배포
5. **SEO**: keywords 배열을 메타 태그로 활용

이 구조를 활용하면 한 번의 데이터 작성으로 포트폴리오 사이트, 이력서, LinkedIn, 블로그 등 다양한 곳에서 일관되게 사용할 수 있습니다!
