import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt({
    html: true,
});

export async function GET(context) {
    const posts = await getCollection('blog');
    return rss({
        title: 'dev-rueda',
        description: 'Personal tech blog and thoughts',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            author: post.data.author,
            categories: post.data.tags,
            link: `/pepefeliblu/blog/${post.slug}/`,
            content: sanitizeHtml(parser.render(post.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'figure', 'figcaption'])
            }),
            customData: `<published>${post.data.published ?? true}</published>`,
        })),
    });
}
