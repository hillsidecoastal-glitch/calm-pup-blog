const fs = require('fs');
const path = require('path');

const articlesPath = path.join(process.cwd(), 'data', 'articles.json');
const appDir = path.join(process.cwd(), 'app');

const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'));

const manifest = [];

articles.forEach(article => {
  const [category, keyword] = article.slug.split('/');
  const articleDir = path.join(appDir, category, keyword);
  
  fs.mkdirSync(articleDir, { recursive: true });
  
  const pageContent = `export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div dangerouslySetInnerHTML={{ __html: \`${article.content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      </div>
    </div>
  );
}

export const metadata = {
  title: "${article.title}",
  description: "${article.metadata.description}",
};`;

  fs.writeFileSync(path.join(articleDir, 'page.tsx'), pageContent);
  
  manifest.push({
    url: `/${article.slug}`,
    lastModified: article.metadata.date,
    category: category
  });
});

fs.writeFileSync('generated-manifest.json', JSON.stringify(manifest, null, 2));
console.log(`✅ Generated ${articles.length} article pages`);
