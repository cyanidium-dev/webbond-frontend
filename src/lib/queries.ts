export const casesOnHomepageQuery = `
  *[_type == "case" && showOnHomepage == true] | order(_createdAt desc) {
    "id": _id,
    "title": title[$lang],
    "slug": slug.current,
    "hero": {
      "description": hero.description[$lang],
      "tags": hero.tags[]{
        "text": $lang
      },
      "image": hero.image{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      }
    },
    "services": services[]{
      "title": title[$lang],
      "description": description[]{
        "text": text[$lang]
      }
    },
    "imageBlock": imageBlock{
      "imageDesktop": imageDesktop{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "imageMobile": imageMobile{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "button": {
        "text": button.text[$lang],
        "link": button.link
      }
    },
    "testimonial": testimonial{
      "description": testimonial.description[$lang],
      "clientName": clientName[$lang],
      "clientPosition": clientPosition[$lang],
      "clientPhoto": clientPhoto{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "testimonialText": testimonialText[$lang],
      "imageDesktop": imageDesktop{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "imageMobile": imageMobile{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      }
    }
  }
`;

