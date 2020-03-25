import React from "react";
import loadable from "@loadable/component";

import { GlobalStyles } from "./_styles";

// Hidden
import Head from "./components/global/head";
import RouteChange from "./components/global/route-change";

// Rendered
const RegionSwitch = loadable(() => import("./regions/_region-switch"));
const Header = loadable(() => import("./components/global/header"));
const Footer = loadable(() => import("./components/global/footer"));

const AppClient = () => (
  <>
    <GlobalStyles />
    <Head />
    <RouteChange />
    <Header />
    <RegionSwitch
      regions={[
        {
          regions: [],
          fragments: [
            {
              content: {
                image: {
                  alternateText: "SJP office",
                  caption: "",
                  mediaType: "Image",
                  url:
                    "https://partnership-assets.sjp.co.uk/api/v1/site/9/image?imageUrl=/media/why-SJP-2_tcm9-6283.jpg",
                  fileSize: 725298,
                  mimeType: "image/jpeg"
                },
                title: "Why choose St. James's Place?",
                inlineEditMarkup:
                  '<!-- Start Component Presentation: {"ComponentID":"tcm:9-3516","ComponentModified":"2020-02-20T10:52:36.097","ComponentTemplateID":"tcm:9-837-32","ComponentTemplateModified":"2020-02-20T08:44:16.55","IsRepositoryPublished":false} -->',
                textAlignment: "center",
                showBar: true,
                showBreadcrumb: "Yes",
                showOverlay: false,
                breadcrumb: [
                  {
                    url: "/",
                    text: "Home"
                  },
                  {
                    url: "/why-choose-us",
                    text: "Why choose SJP"
                  }
                ]
              },
              template: {
                content: {
                  params: null
                },
                id: "ContentHeader",
                extendedProperties: {}
              },
              id: "3516",
              extendedProperties: {}
            },
            {
              content: {
                title: "OUR BIGGEST INVESTMENT IS TIME",
                text:
                  "<p>We understand the time it takes to get to know clients on an individual basis.</p>\n<p>Only by building trusted, long-term relationships are we able to truly discern a client’s aspirations and offer you the bespoke advice you need.</p>",
                inlineEditMarkup:
                  '<!-- Start Component Presentation: {"ComponentID":"tcm:9-3517","ComponentModified":"2020-01-10T09:31:33.697","ComponentTemplateID":"tcm:9-845-32","ComponentTemplateModified":"2020-02-20T08:44:16.927","IsRepositoryPublished":false} -->'
              },
              template: {
                content: {
                  params: null
                },
                id: "BasicText",
                extendedProperties: {}
              },
              id: "3517",
              extendedProperties: {}
            },
            {
              content: {
                title: "Working with you",
                text:
                  "<p>By putting clients firmly at the heart of our service we run a genuinely client-focused business. No two clients are the same and therefore we ensure that we understand your personal or business objectives and deliver solutions that are right for you.</p>\n<p>We do not provide off the shelf solutions, but instead strive to provide you with a single relationship for all of your financial planning needs. The focus always being on offer the very best service to develop a long term relationship with you.</p>\n<p>Our commitment:</p>\n<ul>\n<li>Providing personal face-to-face financial advice</li>\n<li>Giving you the opportunity to review your financial affairs regularly</li>\n<li>Effectively managing your investments via our distinctive approach</li>\n<li>Keeping you informed of the latest news and any changes that might affect your personal situation</li>\n<li>Listening to your feedback</li>\n<li>Ensuring that any dealings with you are sensitive to your needs</li>\n</ul>\n<p>The value of an investment with St. James's Place will be directly linked to the performance of the funds you select and the value can therefore go down as well as up. You may get back less than you invested.</p>",
                inlineEditMarkup:
                  '<!-- Start Component Presentation: {"ComponentID":"tcm:9-6423","ComponentModified":"2020-01-10T09:51:55.867","ComponentTemplateID":"tcm:9-845-32","ComponentTemplateModified":"2020-02-20T08:44:16.927","IsRepositoryPublished":false} -->'
              },
              template: {
                content: {
                  params: null
                },
                id: "BasicText",
                extendedProperties: {}
              },
              id: "6423",
              extendedProperties: {}
            },
            {
              content: {
                title: "Why Choose St. James's place?",
                subTitle:
                  "We're not about selling products. We pride ourselves on building trusted, long-term relationships with clients - only by doing so can we truly understand our clients' immediate needs and future aspirations, and offer the quality, bespoke advice that they deserve.",
                list: [
                  {
                    title: "Our investment management approach",
                    text:
                      "A number of carefully selected external managers of outstanding ability manage our client funds.",
                    link: {
                      url:
                        "/advice-and-services/investment-management-approach",
                      text: "More",
                      target: ""
                    },
                    icon: "intelligent"
                  },
                  {
                    title: "St. James's Place Charitable Foundation",
                    text:
                      "Over £93 million has been raised for our charitable arm, changing the lives of children and young people.",
                    link: {
                      url: "/why-choose-us/charitable-foundation",
                      text: "More",
                      target: ""
                    },
                    icon: "heart"
                  },
                  {
                    title: "Award winning service",
                    text:
                      "St. James's Place are pleased to have won numerous awards over the years, voted for by industry experts and the public.",
                    link: {
                      url: "/why-choose-us/awards",
                      text: "More",
                      target: ""
                    },
                    icon: "award"
                  }
                ],
                inlineEditMarkup:
                  '<!-- Start Component Presentation: {"ComponentID":"tcm:9-664","ComponentModified":"2020-01-14T08:58:56.73","ComponentTemplateID":"tcm:9-640-32","ComponentTemplateModified":"2019-11-27T13:32:52.197","IsRepositoryPublished":true} -->',
                alignment: "center"
              },
              template: {
                content: {
                  params: null
                },
                id: "ThirdContentCardList",
                extendedProperties: {}
              },
              id: "664-640",
              extendedProperties: {}
            },
            {
              content: {
                title: "Find an adviser",
                subTitle:
                  "Our experienced advisers offer professional, tailored, face-to-face advice based on your current circumstances and future aspirations. Start your journey now and find a St. James’s Place Partner in your local area.",
                link: [
                  {
                    url:
                      "https://www.sjp.co.uk/site-services/find-your-adviser",
                    text: "Find an adviser",
                    altText: "Find an adviser",
                    target: "_blank"
                  }
                ],
                inlineEditMarkup:
                  '<!-- Start Component Presentation: {"ComponentID":"tcm:9-6909","ComponentModified":"2020-02-20T12:13:41.723","ComponentTemplateID":"tcm:9-6898-32","ComponentTemplateModified":"2020-02-20T08:44:11.957","IsRepositoryPublished":false} -->'
              },
              template: {
                content: {
                  params: null
                },
                id: "Feature",
                extendedProperties: {}
              },
              id: "6909",
              extendedProperties: {}
            },
            {
              content: {
                title: "St. James's Place Guarantee",
                text:
                  '<p>St. James\'s Place guarantees the suitability of the advice given by members of the St. James\'s Place Partnership when recommending any of the wealth management products and services available from companies in the group, more details of which are set out on the Group\'s <a href="https://www.sjp.co.uk/products-and-services/products-and-services" title="St. James\'s Place guarantee" target="_blank">website.</a></p>',
                logo: {
                  alternateText: "SJPWM-Crop-Blue.svg",
                  caption: "",
                  mediaType: "Image",
                  url:
                    "https://partnership-assets.sjp.co.uk/api/v1/site/9/image?imageUrl=/media/SJPWM-Crop-Blue_tcm9-962.svg",
                  fileSize: 7609,
                  mimeType: "image/svg+xml"
                },
                inlineEditMarkup:
                  '<!-- Start Component Presentation: {"ComponentID":"tcm:9-577","ComponentModified":"2019-10-30T10:06:41.47","ComponentTemplateID":"tcm:9-418-32","ComponentTemplateModified":"2019-10-15T07:30:16.35","IsRepositoryPublished":true} -->'
              },
              template: {
                content: {
                  params: null
                },
                id: "SjpGuarantee",
                extendedProperties: {}
              },
              id: "577",
              extendedProperties: {}
            },
            {
              content: {
                text:
                  '<p xmlns="http://www.w3.org/1999/xhtml">We use cookies to analyse how visitors use our website and to help us provide the best possible experience for users. By continuing to use our site, we will take that as your consent to allow us to use cookies. However, you can disable cookies at any time if you wish.</p>',
                buttonText: "Close"
              },
              template: {
                content: {},
                id: "CookiePolicy",
                extendedProperties: {}
              },
              extendedProperties: {}
            }
          ],
          id: "Main",
          extendedProperties: {
            params: null
          }
        }
      ]}
    />
    <Footer />
  </>
);

export default AppClient;
