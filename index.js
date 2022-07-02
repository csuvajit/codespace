// async_scrape.js (tested with node 11.3)
const sleep = ts => new Promise(resolve => setTimeout(resolve, ts * 1000));

async function fetchUrl(url) {
    console.log(`~ executing fetchUrl(${url})`);
    console.time(`fetchUrl(${url})`);
    await sleep(1 + Math.random() * 4);
    console.timeEnd(`fetchUrl(${url})`);
    return `<em>fake</em> page html for ${url}`;
}

async function analyzeSentiment(html) {
    console.log(`~ analyzeSentiment("${html}")`);
    console.time(`analyzeSentiment("${html}")`);
    await sleep(1 + Math.random() * 4);
    const r = {
        positive: Math.random()
    }
    console.timeEnd(`analyzeSentiment("${html}")`);
    return r;
}

const urls = [
    "https://www.ietf.org/rfc/rfc2616.txt",
    "https://en.wikipedia.org/wiki/Asynchronous_I/O",
]
const extractedData = {}

async function handleUrl(url) {
    const html = await fetchUrl(url);
    extractedData[url] = await analyzeSentiment(html);
}

async function main() {
    console.time('ellapsed');
    await Promise.all(urls.map(handleUrl));
    console.timeEnd('ellapsed');
}

main()