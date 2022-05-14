import {createSitemap} from 'sitemap'

const published_date = '2022-05-14';
const cache_time = 60*10*1000;

export async function get({params, url}) {
  // sitemap を生成
  var sitemap = createSitemap({
    hostname: url.origin,
    urls: [],
  });

  // トップページを登録
  sitemap.add({
    url: '/',
    lastmod: new Date(published_date).toISOString(),
    changefreq: 'monthly',
    priority: 0.8,
  });

  // about ページも登録
  sitemap.add({
    url: '/about',
    lastmod: new Date(published_date).toISOString(),
    changefreq: 'monthly',
    priority: 0.8,
  });

  // xml に変換
  const xml = sitemap.toXML();

  // xml としてレスポンスを返す
  return {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': `max-age=3600, s-maxage=3600`,
    },
    body: xml,
  };
};