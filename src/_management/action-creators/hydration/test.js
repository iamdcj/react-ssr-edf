export const regions = [
  {
    regions: [],
    fragments: [
      {
        content: {
          height: "100px",
          image: {
            alternateText: "Header Image",
            caption: "",
            mediaType: "Image",
            url:
              "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
            fileSize: 678029,
            mimeType: "image/png"
          },
          title: "Title",
          subTitle: "Subtitle",
          link: [
            {
              url: "https://www.sjp.co.uk",
              text: "Homepage Link",
              target: "_self"
            }
          ],
          textAlignment: "left",
          icon: "arrow-down",
          showBar: true,
          showOverlay: true
        },
        template: {
          content: {
            params: null
          },
          id: "HomepageHeader",
          extendedProperties: {}
        },
        id: "5181",
        extendedProperties: {}
      },
      {
        content: {
          videoId: "57da7906a8c63c5f7f8b4568",
          caption: "This is a Test Caption",
          providerUrl: "https://sjp.getmediamanager.com/js/mm.embed.v1.min.js",
          client: "sjp",
          embedId: "c095e753-8906-4e7b-acd3-84056ed614c8"
        },
        template: {
          content: {
            params: null
          },
          id: "Video",
          extendedProperties: {}
        },
        id: "4094",
        extendedProperties: {}
      },
      {
        content: {},
        template: {
          content: {
            params: null
          },
          id: "ContentDividerPageWidth",
          extendedProperties: {}
        },
        id: "7867",
        extendedProperties: {}
      },
      {
        content: {
          title: "Table Heading",
          subTitle: "Sub Title",
          tableData: {
            headings: [
              "heading1 heading1",
              "heading2",
              "heading3",
              "heading4",
              "heading 5 heading 5 heading 5",
              "heading 6"
            ],
            rows: [
              {
                data: [
                  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
                  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
                  "data 4"
                ]
              },
              {
                data: ["Row 2", "Data 2", "Data 3", "Data 4"]
              }
            ]
          }
        },
        template: {
          content: {
            params: null
          },
          id: "Table",
          extendedProperties: {}
        },
        id: "7857",
        extendedProperties: {}
      },
      {
        content: {
          image: {
            alternateText: "Header Image",
            caption: "",
            mediaType: "Image",
            url:
              "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
            fileSize: 678029,
            mimeType: "image/png"
          },
          title: "This is the header title over more than one line",
          subTitle:
            "This is the secondary text, This is the secondary text, This is the secondary text, This is the secondary text, This is the secondary text, This is the secondary text, This is the secondary text, This is the secondary text, This is the secondary text, This is the secondary text, This is the secondary text, This is the secondary text, This is the secondary text ",
          textAlignment: "left",
          showBar: true,
          showBreadcrumb: "No",
          showOverlay: true
        },
        template: {
          content: {
            params: null
          },
          id: "ContentHeader",
          extendedProperties: {}
        },
        id: "1957",
        extendedProperties: {}
      },
      {
        content: {},
        template: {
          content: {
            params: null
          },
          id: "Breadcrumb",
          extendedProperties: {}
        },
        id: "2047",
        extendedProperties: {}
      },
      {
        content: {
          title: "News & Insights",
          subTitle:
            "Visit Insights to read articles and news to help you make informed decisions about your wealth",
          link: [
            {
              url: "https://www.sjpinsights.co.uk/{0}",
              text: "Go to Insights",
              target: "_blank",
              altText: "2CTA"
            }
          ],
          ctaLookupValue: "Partner-NewsAndInsights"
        },
        template: {
          content: {
            params: null
          },
          id: "Feature",
          extendedProperties: {}
        },
        id: "653",
        extendedProperties: {}
      },
      {
        content: {
          text:
            '<p>The Partner Practice represents only St. James’s Place Wealth Management plc (which is authorised and regulated by the Financial Conduct Authority) for the purpose of advising solely on the Group’s wealth management products and services, more details of which are set out on the Group’s website <a href="http://www.sjp.co.uk/products">www.sjp.co.uk/products</a>. The ‘St. James’s Place Partnership’ and the titles ‘Partner’ and ‘Partner Practice’ are marketing terms used to describe St. James’s Place representatives.</p>'
        },
        template: {
          content: {
            params: null
          },
          id: "Disclaimer",
          extendedProperties: {}
        },
        id: "630",
        extendedProperties: {}
      },
      {
        content: {
          title: "SJP Guarantee",
          text:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu metus facilisis, luctus lectus sed, vestibulum lectus. Pellentesque in egestas nisi. Ut maximus pellentesque orci nec consequat. Donec lacus lorem, fringilla eu neque sed, tristique rhoncus nisl. Nulla facilisi. Morbi in neque quis dolor aliquet elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin laoreet erat nec purus laoreet, ultrices lobortis neque malesuada. Aenean vel metus nec dolor tempor gravida vel in odio. Quisque luctus pharetra orci, a sodales augue.</p>",
          logo: {
            alternateText: "Logo",
            caption: "",
            mediaType: "Image",
            url:
              "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/SJPWM-Crop-Blue_tcm9-5124.svg",
            fileSize: 7609,
            mimeType: "image/svg+xml"
          }
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
          title: "Why Choose St. James's place",
          subTitle: "Sub Title",
          list: [
            {
              icon: "document",
              title: "Inteligent investmant management approach",
              text:
                "We carefully select first-class manager from the global investment market to manage our funds.",
              link: {
                url: "http://www.sjp.co.uk",
                text: "Example Link"
              }
            },
            {
              icon: "document",
              title: "Inteligent investmant management approach",
              text:
                "We carefully select first-class manager from the global investment market to manage our funds.",
              link: {
                url: "http://www.sjp.co.uk",
                text: "Example Link"
              }
            },
            {
              icon: "document",
              title: "Inteligent investmant management approach",
              text:
                "We carefully select first-class manager from the global investment market to manage our funds.",
              link: {
                url: "http://www.sjp.co.uk",
                text: "Example Link"
              }
            }
          ]
        },
        template: {
          content: {
            params: null
          },
          id: "Usp",
          extendedProperties: {}
        },
        id: "651",
        extendedProperties: {}
      },
      {
        content: {
          frameUrl: "https://studio.h2creative.co.uk/sjp-iht-calc/",
          height: "100"
        },
        template: {
          content: {
            params: null
          },
          id: "FindAnAdvisor",
          extendedProperties: {}
        },
        id: "1946",
        extendedProperties: {}
      },
      {
        content: {
          title: "Title",
          subTitle: "Sub Title",
          text:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, dui eget vehicula accumsan, lorem lectus porttitor ipsum, ut viverra purus orci vitae ante. Duis molestie nisl et mi rhoncus, sit amet placerat tellus commodo. Nunc suscipit pellentesque molestie. Etiam pretium tellus ut leo egestas, non vestibulum justo pharetra. Phasellus sed nulla eu libero cursus tristique. Cras urna lectus, ornare in libero vitae, consectetur porttitor urna. Vestibulum non ultricies magna. Cras eu interdum elit, in hendrerit leo. Donec gravida tincidunt turpis, in volutpat turpis vestibulum sed. Pellentesque blandit lacinia augue in fringilla.</p>\n<p><img src="http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png" />\n</p>',
          image: {
            alternateText: "Header Image",
            caption: "",
            mediaType: "Image",
            url:
              "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
            fileSize: 678029,
            mimeType: "image/png"
          }
        },
        template: {
          content: {
            params: null
          },
          id: "BasicText",
          extendedProperties: {}
        },
        id: "1945",
        extendedProperties: {}
      },
      {
        content: {},
        template: {
          content: {
            params: null
          },
          id: "ContentDividerFullWidth",
          extendedProperties: {}
        },
        id: "7867",
        extendedProperties: {}
      },
      {
        content: {
          title: "Title",
          subTitle: "Sub Title",
          text:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, dui eget vehicula accumsan, lorem lectus porttitor ipsum, ut viverra purus orci vitae ante. Duis molestie nisl et mi rhoncus, sit amet placerat tellus commodo. Nunc suscipit pellentesque molestie. Etiam pretium tellus ut leo egestas, non vestibulum justo pharetra. Phasellus sed nulla eu libero cursus tristique. Cras urna lectus, ornare in libero vitae, consectetur porttitor urna. Vestibulum non ultricies magna. Cras eu interdum elit, in hendrerit leo. Donec gravida tincidunt turpis, in volutpat turpis vestibulum sed. Pellentesque blandit lacinia augue in fringilla.</p>\n<p><img src="http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png" />\n</p>',
          image: {
            alternateText: "Header Image",
            caption: "",
            mediaType: "Image",
            url:
              "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
            fileSize: 678029,
            mimeType: "image/png"
          }
        },
        template: {
          content: {
            params: null
          },
          id: "TruncatedText",
          extendedProperties: {}
        },
        id: "1945",
        extendedProperties: {}
      },
      {
        content: {
          image: {
            alternateText: "Header Image",
            caption: "",
            mediaType: "Image",
            url:
              "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
            fileSize: 678029,
            mimeType: "image/png"
          },
          caption: "Caption of the Image"
        },
        template: {
          content: {
            params: null
          },
          id: "Image",
          extendedProperties: {}
        },
        id: "1947",
        extendedProperties: {}
      },
      {
        content: {
          image: {
            alternateText: "Header Image",
            caption: "",
            mediaType: "Image",
            url:
              "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
            fileSize: 678029,
            mimeType: "image/png"
          },
          title: "Feature Title",
          text:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil enim arbitror esse magna laude dignum, quod te praetermissurum credam aut mortis aut doloris metu. Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod interest, non sit magnum. Atqui eorum nihil est eius generis, ut sit in fine atque extrerno bonorum. Animum autem reliquis rebus ita perfecit, ut corpus; Duo Reges: constructio interrete. Fortitudinis quaedam praecepta sunt ac paene leges, quae effeminari virum vetant in dolore. Sed haec ab Antiocho, familiari nostro, dicuntur multo melius et fortius, quam a Stasea dicebantur. Sunt enim quasi prima elementa naturae, quibus ubertas orationis adhiberi vix potest, nec equidem eam cogito consectari. Sin laboramus, quis est, qui alienae modum statuat industriae?</p>",
          link: [
            {
              url: "https://www.sjp.co.uk",
              text: "SJP.co.uk",
              target: "_blank",
              icon: "arrow-left",
              altText: "Home Link"
            }
          ]
        },
        template: {
          content: {
            params: null
          },
          id: "FeatureLeft",
          extendedProperties: {}
        },
        id: "1973",
        extendedProperties: {}
      },
      {
        content: {
          image: {
            alternateText: "Header Image",
            caption: "",
            mediaType: "Image",
            url:
              "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
            fileSize: 678029,
            mimeType: "image/png"
          },
          title: "Feature Title",
          text:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil enim arbitror esse magna laude dignum, quod te praetermissurum credam aut mortis aut doloris metu. Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod interest, non sit magnum. Atqui eorum nihil est eius generis, ut sit in fine atque extrerno bonorum. Animum autem reliquis rebus ita perfecit, ut corpus; Duo Reges: constructio interrete. Fortitudinis quaedam praecepta sunt ac paene leges, quae effeminari virum vetant in dolore. Sed haec ab Antiocho, familiari nostro, dicuntur multo melius et fortius, quam a Stasea dicebantur. Sunt enim quasi prima elementa naturae, quibus ubertas orationis adhiberi vix potest, nec equidem eam cogito consectari. Sin laboramus, quis est, qui alienae modum statuat industriae?</p>",
          link: [
            {
              url: "https://www.sjp.co.uk",
              text: "SJP.co.uk",
              target: "_blank",
              icon: "arrow-left",
              altText: "Home Link"
            }
          ]
        },
        template: {
          content: {
            params: null
          },
          id: "FeatureRight",
          extendedProperties: {}
        },
        id: "1973",
        extendedProperties: {}
      },
      {
        content: {
          title: "Card List Title",
          subTitle: "Card List Sub Title",
          list: [
            {
              icon: "bookmark",
              title: "Icon Card",
              text: "Test Text",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              icon: "bookmark",
              title: "Icon Card",
              text: "Test Text",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              icon: "bookmark",
              title: "Icon Card",
              text: "Test Text",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            }
          ],
          cta: {
            url: "http://www.sjp.co.uk",
            text: "More",
            target: "_self"
          }
        },
        template: {
          content: {
            params: null
          },
          id: "ThirdContentCardList",
          extendedProperties: {}
        },
        id: "1981",
        extendedProperties: {}
      },
      {
        content: {
          title: "Card List Title",
          subTitle: "Card List Sub Title",
          list: [
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            }
          ],
          cta: {
            url: "http://www.sjp.co.uk",
            text: "More",
            target: "_self"
          }
        },
        template: {
          content: {
            params: null
          },
          id: "ThirdContentCardList",
          extendedProperties: {}
        },
        id: "1980",
        extendedProperties: {}
      },
      {
        content: {
          title: "Card List Title",
          subTitle: "Card List Sub Title",
          list: [
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            },
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-440.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              title: "Test Title",
              text: "Text for the content",
              link: {
                url: "http://www.sjp.co.uk",
                text: "More",
                target: "_self"
              }
            }
          ],
          cta: {
            url: "http://www.sjp.co.uk",
            text: "More",
            target: "_self"
          }
        },
        template: {
          content: {
            params: null
          },
          id: "SmallThirdContentCardList",
          extendedProperties: {}
        },
        id: "1980",
        extendedProperties: {}
      },
      {
        content: {
          accordionList: [
            {
              title: "This is the title",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quoniamque in iis rebus, quae neque in virtutibus sunt neque in vitiis, est tamen quiddam, quod usui possit esse, tollendum id non est. Nulla profecto est, quin suam vim retineat a primo ad extremum. Qui autem voluptate vitam effici beatam putabit, qui sibi is conveniet, si negabit voluptatem crescere longinquitate? Ergo ita: non posse honeste vivi, nisi honeste vivatur? Duo Reges: constructio interrete. Videsne igitur Zenonem tuum cum Aristone verbis concinere, re dissidere, cum Aristotele et illis re consentire, verbis discrepare? Facile est hoc cernere in primis puerorum aetatulis. Infinitio ipsa, quam apeirian vocant, tota ab illo est, tum innumerabiles mundi, qui et oriantur et intereant cotidie. Nec mihi illud dixeris: Haec enim ipsa mihi sunt voluptati, et erant illa Torquatis. Ergo id est convenienter naturae vivere, a natura discedere. At hoc in eo M. \n",
              moreText: "More",
              lessText: "Less",
              moreIcon: "plus-o",
              lessIcon: "minus-o"
            },
            {
              title: "This is the Title",
              subTitle: "This is the Sub Title",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quoniamque in iis rebus, quae neque in virtutibus sunt neque in vitiis, est tamen quiddam, quod usui possit esse, tollendum id non est. Nulla profecto est, quin suam vim retineat a primo ad extremum. Qui autem voluptate vitam effici beatam putabit, qui sibi is conveniet, si negabit voluptatem crescere longinquitate? Ergo ita: non posse honeste vivi, nisi honeste vivatur? Duo Reges: constructio interrete. Videsne igitur Zenonem tuum cum Aristone verbis concinere, re dissidere, cum Aristotele et illis re consentire, verbis discrepare? Facile est hoc cernere in primis puerorum aetatulis. Infinitio ipsa, quam apeirian vocant, tota ab illo est, tum innumerabiles mundi, qui et oriantur et intereant cotidie. Nec mihi illud dixeris: Haec enim ipsa mihi sunt voluptati, et erant illa Torquatis. Ergo id est convenienter naturae vivere, a natura discedere. At hoc in eo M. \n",
              moreText: "More",
              lessText: "Less",
              moreIcon: "plus-o",
              lessIcon: "minus-o"
            },
            {
              title: "Example Title",
              subTitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quoniamque in iis rebus, quae neque in virtutibus sunt neque in vitiis, est tamen quiddam, quod usui possit esse, tollendum id non est. Nulla profecto est",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quoniamque in iis rebus, quae neque in virtutibus sunt neque in vitiis, est tamen quiddam, quod usui possit esse, tollendum id non est. Nulla profecto est, quin suam vim retineat a primo ad extremum. Qui autem voluptate vitam effici beatam putabit, qui sibi is conveniet, si negabit voluptatem crescere longinquitate? Ergo ita: non posse honeste vivi, nisi honeste vivatur? Duo Reges: constructio interrete. Videsne igitur Zenonem tuum cum Aristone verbis concinere, re dissidere, cum Aristotele et illis re consentire, verbis discrepare? Facile est hoc cernere in primis puerorum aetatulis. Infinitio ipsa, quam apeirian vocant, tota ab illo est, tum innumerabiles mundi, qui et oriantur et intereant cotidie. Nec mihi illud dixeris: Haec enim ipsa mihi sunt voluptati, et erant illa Torquatis. Ergo id est convenienter naturae vivere, a natura discedere. At hoc in eo M. \n",
              moreText: "More",
              lessText: "Less",
              moreIcon: "plus-o",
              lessIcon: "minus-o"
            }
          ]
        },
        template: {
          content: {
            params: null
          },
          id: "Accordion",
          extendedProperties: {}
        },
        id: "7496",
        extendedProperties: {}
      },
      {
        content: {
          download: [
            {
              file: {
                url:
                  "http://localhost:53991/api/v1/site/9/file?fileUrl=/media/Partner%20Websites%205000%20vu%20Capacity%20Test%20Executive%20Summary%20%281%29_tcm9-7502.pdf",
                fileSize: 657465,
                mimeType: "application/pdf"
              },
              title: "Partner Websites 5000 vu Capacity Test Executive Summary",
              icon: "document",
              downloadIcon: "arrow-down"
            },
            {
              file: {
                url:
                  "http://localhost:53991/api/v1/site/9/file?fileUrl=/media/SJP%20-%20Dept%20Office%20Visit_tcm9-7504.pdf",
                fileSize: 4298270,
                mimeType: "application/pdf"
              },
              title: "Dept Office Visit",
              icon: "document",
              downloadIcon: "arrow-down"
            }
          ]
        },
        template: {
          content: {
            params: null
          },
          id: "Download",
          extendedProperties: {}
        },
        id: "7503",
        extendedProperties: {}
      },
      {
        content: {
          list: [
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-7628.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              caption: "Test image 1"
            },
            {
              image: {
                alternateText: "Header Image",
                caption: "",
                mediaType: "Image",
                url:
                  "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/content-header-small_tcm9-7628.png",
                fileSize: 678029,
                mimeType: "image/png"
              },
              caption: "Test image 1"
            }
          ]
        },
        template: {
          content: {
            params: null
          },
          id: "ImageGallery",
          extendedProperties: {}
        },
        id: "7630",
        extendedProperties: {}
      }
    ],
    id: "Main",
    extendedProperties: {
      params: null
    }
  },
  {
    regions: [
      {
        regions: [],
        fragments: [
          {
            content: {
              logo: {
                link: {
                  url: "http://www.sjp.co.uk",
                  text: "Logo",
                  altText: "Logo"
                },
                image: {
                  alternateText: "SJP-Partnership-Hor-Logo-White.svg",
                  caption: "",
                  mediaType: "Image",
                  url:
                    "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/SJP-Partnership-Hor-Logo-White_tcm9-437.svg",
                  fileSize: 37378,
                  mimeType: "image/svg+xml"
                }
              },
              login: {
                url: "http://www.sjp.co.uk",
                text: "Login",
                icon: "secure",
                altText: "Login"
              }
            },
            template: {
              content: {
                params: null
              },
              id: "SubdomainNavigation",
              extendedProperties: {}
            },
            id: "597",
            extendedProperties: {}
          }
        ],
        id: "Main",
        extendedProperties: {
          params: null
        }
      }
    ],
    fragments: [],
    id: "Header",
    extendedProperties: {
      params: null
    }
  },
  {
    regions: [
      {
        regions: [],
        fragments: [
          {
            content: {
              logo: {
                link: {
                  url: "http://www.sjp.co.uk",
                  text: "Logo",
                  altText: "Logo"
                },
                image: {
                  alternateText: "SJP-Partnership-Hor-Logo-White.svg",
                  caption: "",
                  mediaType: "Image",
                  url:
                    "http://localhost:53991/api/v1/site/9/image?imageUrl=/media/SJP-Partnership-Hor-Logo-White_tcm9-437.svg",
                  fileSize: 37378,
                  mimeType: "image/svg+xml"
                }
              },
              siteLink: [
                {
                  url: "http://www.sjp.co.uk",
                  text: "Example Footer Link"
                },
                {
                  url: "http://www.sjp.co.uk",
                  text: "Example Footer Link"
                },
                {
                  url: "http://www.sjp.co.uk",
                  text: "Example Footer Link"
                }
              ],
              footerLink: [
                {
                  url: "http://www.sjp.co.uk",
                  text: "Example Footer Link"
                },
                {
                  url: "http://www.sjp.co.uk",
                  text: "Example Footer Link"
                },
                {
                  url: "http://www.sjp.co.uk",
                  text: "Example Footer Link"
                }
              ],
              copyright: "Copyright St. James's Place © {0}",
              backToTop: "Back To Top"
            },
            template: {
              content: {
                params: null
              },
              id: "SubdomainFooter",
              extendedProperties: {}
            },
            id: "599",
            extendedProperties: {}
          }
        ],
        id: "Main",
        extendedProperties: {
          params: null
        }
      }
    ],
    fragments: [],
    id: "Footer",
    extendedProperties: {
      params: null
    }
  }
];
