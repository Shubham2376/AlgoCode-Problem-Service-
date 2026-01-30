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
        // if we go inside the santise html npm page we see that inside the allowed tags we don't have <img> tag by default so if we want to allow img tag we have to explicitly allow it so that is why we concat the img tag because we want image in our markdown because the markdown was appear in frontend and we need image in frontend 
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    })
    console.log("Santized HTML:", santizedHtml);

    // 3. convert santized html back to markdown
    const santizedMarkdown = turndownService.turndown(santizedHtml)

    return santizedMarkdown;
}
module.exports = santizeMarkdownContent;