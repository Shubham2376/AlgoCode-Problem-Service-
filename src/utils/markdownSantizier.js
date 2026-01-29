const marked = require('marked')
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown')

function santizeMarkdownContent(markdownContent){
    const turndownService = new TurndownService()
    // 1. convert markdown to html
    const convertedHtml = marked.parse(markdownContent);
    console.log("Converted HTML:", convertedHtml);

    // 2. santize html
    const santizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags
    })
    console.log("Santized HTML:", santizedHtml);

    // 3. convert santized html back to markdown
    const santizedMarkdown = turndownService.turndown(santizedHtml)

    return santizedMarkdown;
}
module.exports = santizeMarkdownContent;