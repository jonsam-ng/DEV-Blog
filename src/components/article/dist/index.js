"use strict";
exports.__esModule = true;
var react_1 = require("react");
var articleBox_1 = require("../../components/common/articleBox");
var postInfo_1 = require("../../components/common/postInfo");
var commentBox_1 = require("../../components/common/commentBox");
var optBox_1 = require("./components/optBox");
var react_document_title_1 = require("react-document-title");
var react_i18next_1 = require("react-i18next");
var antd_1 = require("antd");
require("./index.scss");
var lodash_1 = require("lodash");
var authorBox_1 = require("../common/authorBox");
// TODO 通过postID请求数据
var postData = {
    article: {
        article: {
            postID: 1,
            album: 'https://res.cloudinary.com/practicaldev/image/fetch/s--0J-QW6Fv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/m33raj4cdipc5sv7c57y.png',
            title: '5 tools to supercharge your Flutter development',
            tags: ['flutter', 'dart', 'vscode', 'beginners'],
            author: 'Ivan Huerta',
            postDate: new Date().getTime(),
            updateDate: new Date().getTime(),
            readtime: lodash_1.random(10),
            content: "<div class=\"crayons-article__main\"><div class=\"crayons-article__body text-styles spec__body\" data-article-id=\"436503\" id=\"article-body\"><p>If you've read my previous posts, you probably know I'm addicted to getting things done quickly. At the time of me writing this, I'm preparing to mentor a hackathon that's being hosted online out of El Paso, TX. So I quickly wanted to put together a couple of tools &amp; packages that can help new Flutter developers get going &amp; hopefully create an MVP within a hackathon's time period.</p><h2><a name=\"vscode\" href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fdev.to%2Fparabeac%2F5-tools-to-supercharge-your-flutter-development-1m0l%23vscode\" class=\"anchor\"></a><a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fcode.visualstudio.com%2Fdownload\">VSCode</a></h2><p>This is the premier IDE from Microsoft &amp; has gotten a lot of traction across the global developer community for creating plugins. You can download VSCode here &amp; I recommend installing the plugins for<a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DDart-Code.flutter\">Flutter</a> &amp;<a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3DDart-Code.dart-code\">Dart</a>. Alternatively, you can use Android Studio, but in our opinion, VSCode is just much lighter &amp; friendlier to use.</p><h2><a name=\"firebase\" href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fdev.to%2Fparabeac%2F5-tools-to-supercharge-your-flutter-development-1m0l%23firebase\" class=\"anchor\"></a><a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Ffirebase.google.com\">Firebase</a></h2><p>Firebase is a tool where you can create a backend &amp; database. You can manually populate data which is nice for getting some test data in on the backend. You can use the Firebase Flutter package to integrate your mobile app with your Firebase. Although I'm not the biggest fan of the way this package works, it gets the job done for a Minimum Viable Product.</p><h2><a name=\"http-package\" href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fdev.to%2Fparabeac%2F5-tools-to-supercharge-your-flutter-development-1m0l%23http-package\" class=\"anchor\"></a><a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fpub.dev%2Fpackages%2Fhttp\">HTTP Package</a></h2><p>For applications that need to talk to an API, the HTTP package is an excellent package to use for talking to API endpoints. Below is a snippet of how simple a POST request is.<br></p><div class=\"highlight\"><pre class=\"highlight plaintext\"><code>import 'package:http/http.dart' as http;var url = 'https://example.com/whatsit/create';var response = await http.post(url, body: {'name': 'doodle'});</code></pre></div><h2><a name=\"jsonserializable\" href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fdev.to%2Fparabeac%2F5-tools-to-supercharge-your-flutter-development-1m0l%23jsonserializable\" class=\"anchor\"></a><a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fpub.dev%2Fpackages%2Fjson_serializable\">JSON_Serializable</a></h2><p>This is a more advanced tool but extremely useful. Often times when receiving &amp; sending JSON data, you likely want to convert the data into dart object(s). Most of the time this requires additional time and boilerplate code to complete. This is where Serializing comes in. In this context, Deserializing just means converting the JSON objects into a format that allows your dart code to interact directly with these objects through dart rather than JSON or maps. Why spend additional time to map classes into a format that could be sent &amp; received across the network when json_serilizable can do it automatically. Additionally, doing it by hand increases the risk of creating bugs in the objects that are serialized. This dart package allows the serializable classes by putting dart annotations into the classes that are going to be serialized and running<code>pub run build_runner</code>.</p><h2><a name=\"parabeac\" href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fdev.to%2Fparabeac%2F5-tools-to-supercharge-your-flutter-development-1m0l%23parabeac\" class=\"anchor\"></a><a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fgithub.com%2FParabeac%2FParabeac-Core\">Parabeac</a></h2><p><a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--T5WS98tW--%2Fc_limit%252Cf_auto%252Cfl_progressive%252Cq_66%252Cw_880%2Fhttps%3A%2F%2Fkindling-sketch.s3.amazonaws.com%2Fparabeac-high-level-animation2.gif\" class=\"article-body-image-wrapper\"><img src=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--T5WS98tW--%2Fc_limit%252Cf_auto%252Cfl_progressive%252Cq_66%252Cw_880%2Fhttps%3A%2F%2Fkindling-sketch.s3.amazonaws.com%2Fparabeac-high-level-animation2.gif\" alt=\"Parabeac High-Level Animation\" loading=\"lazy\"></a></p><p>Ok, ok. I might be a little biased here, but we made this tool because we wanted to produce apps faster for ourselves. With Parabeac you can convert design files from<a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fwww.sketch.com\">Sketch</a> (as of this writing) &amp; soon Figma directly into Flutter code. Just follow the README &amp; you'll be on your way.</p><p>Thanks for reading. Hopefully, this will be a resource for you to get your MVP up and running in no time. Or at least in less time. What are your favorite tools for developing Flutter applications?</p></div></div>",
            like: lodash_1.random(1000),
            thanks: lodash_1.random(1000),
            comments: lodash_1.random(1000),
            readinglist: lodash_1.random(1000)
        },
        user: {
            userID: 1,
            name: 'Ivan Huerta',
            avatar: 'https://52proxy.xyz/index.php?q=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--5tOx-dDT--%2Fc_fill%2Cf_auto%2Cfl_progressive%2Ch_50%2Cq_auto%2Cw_50%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F267905%2F1c79cbeb-f2f6-460d-b78c-fd1545b9acc9.jpeg',
            github: 'http://jonsam.site',
            website: 'http://jonsam.site',
            email: 'jonam.ng@foxmail.com',
            intro: "It's OK to love Flutter and hate hand-coding design elements. Parabeac-Core converts design files into Flutter code.",
            work: 'engineer',
            company: 'xylink',
            age: 18,
            joinDate: new Date().getTime(),
            links: [
                {
                    name: 'Facebook',
                    url: 'http://jonsam.site'
                },
                {
                    name: 'Youtube',
                    url: 'http://jonsam.site'
                },
                {
                    name: 'Weibo',
                    url: 'http://jonsam.site'
                },
            ],
            labels: ['宅男', 'young', '篮球🏀'],
            phone: 16476427642
        }
    },
    comments: [
        {
            user: {
                userID: 1,
                avatar: 'https://52proxy.xyz/index.php?q=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--5tOx-dDT--%2Fc_fill%2Cf_auto%2Cfl_progressive%2Ch_50%2Cq_auto%2Cw_50%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F267905%2F1c79cbeb-f2f6-460d-b78c-fd1545b9acc9.jpeg',
                name: 'Ivan Huerta'
            },
            comment: {
                commentID: 11,
                time: new Date().getTime(),
                like: 647,
                content: "Thanks"
            }
        },
        {
            user: {
                userID: 2,
                avatar: 'https://52proxy.xyz/index.php?q=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--EIAo43DW--%2Fc_fill%2Cf_auto%2Cfl_progressive%2Ch_50%2Cq_auto%2Cw_50%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F25139%2F86c1bc8c-87a9-401d-8830-fa73cc01e569.jpg',
                name: 'Nikita Sobolev'
            },
            comment: {
                commentID: 15,
                time: new Date().getTime(),
                like: 647,
                content: "<div class=\"body \"><p>I would recommend to use <a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fgithub.com%2Fwemake-services%2Fwemake-vue-template\" rel=\"nofollow\">wemake-vue-template</a>to get started with <code>Vue</code>and <code>Nuxt</code>.</p><p>It allows you to start easily with the full-featured project. Features:</p><ul><li>Proven to work on both small and large scale projects</li><li>Always up-to-date with the help of <a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fgithub.com%2Fwemake-services%2Fwemake-vue-template%2Fpulls%3Futf8%3D%25E2%259C%2593%26q%3Dis%253Apr%2520author%253Aapp%252Fdependabot\" rel=\"nofollow\">@dependabot</a></li><li>Latest <a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fnuxtjs.org%2F\" rel=\"nofollow\">nuxt</a>for server-side rendering</li><li>Full <code>typescript</code>support,including <code>Vue</code>'s SFC,<code>Vuex</code>,and tests</li><li>Tools to write business logics including:DI,IoC,runtime type validation</li><li>Linting with <a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Feslint.org%2F\" rel=\"nofollow\">eslint</a>+<a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fgithub.com%2Fwemake-services%2Fstylelint-config-strict-scss\" rel=\"nofollow\">stylelint</a></li><li><a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Ffacebook.github.io%2Fjest%2F\" rel=\"nofollow\">jest</a>for unit tests and <a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fgithub.com%2FDevExpress%2Ftestcafe\" rel=\"nofollow\">testcafe</a>for end-to-end testing</li><li><code>docker</code>optional support for development,testing,and production</li><li><a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fabout.gitlab.com%2Ffeatures%2Fgitlab-ci-cd%2F\" rel=\"nofollow\">Gitlab CI</a>with full <code>test</code>and <code>deploy</code>pipeline configured by default</li><li>Meaningful <a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fwemake-services.gitbook.io%2Fwemake-vue-template%2F\" rel=\"nofollow\">docs</a>,covering almost every aspect of the project,including <a href=\"https://52proxy.xyz/index.php?q=http%3A%2F%2Fusejsdoc.org%2F\" rel=\"nofollow\">jsdoc</a>annotations</li><li>Full <code>vscode</code>support and list of <a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fgithub.com%2Fwemake-services%2Fwemake-vue-template%2Ftree%2Fmaster%2Ftemplate%2F.vscode\" rel=\"nofollow\">suggested settings and plugins</a></li><li>Easy <a href=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fwemake-services.gitbook.io%2Fwemake-vue-template%2F%23updating-template\" rel=\"nofollow\">update process</a>,so your template will always be up-to-date</li></ul><button class=\"reaction-button\" id=\"button-for-comment-288690\" data-comment-id=\"288690\" title=\"heart\"><img alt=\"Favorite heart outline button\" src=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fpracticaldev-herokuapp-com.freetls.fastly.net%2Fassets%2Ffavorite-heart-outline-button-0e707584abc59ba8dfe82cacff79233a8e1cb9791379a4d9715bd8318e72eb6b.svg\"><img class=\"voted-heart\" src=\"https://52proxy.xyz/index.php?q=https%3A%2F%2Fpracticaldev-herokuapp-com.freetls.fastly.net%2Fassets%2Femoji%2Femoji-one-heart-f5a59d5d1b6cfe4e2c956c0ed63cd644820683dcd5c5a051d810fa6efe67a6ce.png\" alt=\"Favorite heart button\"></button></div>"
            }
        },
    ],
    next: [
        {
            user: {
                userID: 2,
                avatar: 'https://52proxy.xyz/index.php?q=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--EIAo43DW--%2Fc_fill%2Cf_auto%2Cfl_progressive%2Ch_50%2Cq_auto%2Cw_50%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F25139%2F86c1bc8c-87a9-401d-8830-fa73cc01e569.jpg'
            },
            article: {
                postID: 21,
                title: 'I Created a Responsive Portfolio Website Using HTML, CSS, Bootstrap, and JavaScript',
                author: 'John',
                postDate: new Date().getTime()
            }
        },
        {
            user: {
                userID: 3,
                avatar: 'https://52proxy.xyz/index.php?q=https%3A%2F%2Fres.cloudinary.com%2Fpracticaldev%2Fimage%2Ffetch%2Fs--EIAo43DW--%2Fc_fill%2Cf_auto%2Cfl_progressive%2Ch_50%2Cq_auto%2Cw_50%2Fhttps%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F25139%2F86c1bc8c-87a9-401d-8830-fa73cc01e569.jpg'
            },
            article: {
                postID: 211,
                title: 'From no programming experience to web developer in 19 small steps',
                author: 'Hello',
                postDate: new Date().getTime()
            }
        }
    ]
};
var Article = function (props) {
    var t = react_i18next_1.useTranslation().t;
    return (react_1["default"].createElement(react_document_title_1["default"], { title: t('site_name') + ": " + postData.article.article.title },
        react_1["default"].createElement("div", { className: 'act__container' },
            react_1["default"].createElement(antd_1.Row, { gutter: 20 },
                react_1["default"].createElement(antd_1.Col, { className: "gutter-row act__sider--left", span: 2 },
                    react_1["default"].createElement("div", { className: 'sider__fixed--wrapper' },
                        react_1["default"].createElement(optBox_1["default"], null))),
                react_1["default"].createElement(antd_1.Col, { className: "gutter-row", span: 15 },
                    react_1["default"].createElement(articleBox_1["default"], { article: postData.article }),
                    react_1["default"].createElement("div", { className: "card_divider" }),
                    react_1["default"].createElement(postInfo_1["default"], { article: postData.article }),
                    react_1["default"].createElement("div", { className: "card_divider" }),
                    react_1["default"].createElement(commentBox_1["default"], { comments: postData.comments })),
                react_1["default"].createElement(antd_1.Col, { className: "gutter-row act__sider--right", span: 7 },
                    react_1["default"].createElement("div", { className: 'sider__fixed--wrapper' },
                        react_1["default"].createElement(authorBox_1["default"], { user: postData.article.user })))))));
};
exports["default"] = Article;
