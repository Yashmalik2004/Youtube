const searchTextQuery = window.location.search;
const queryArr = searchTextQuery.split("=");
const encodedSearchText = queryArr[queryArr.length - 1];

const getSearchResults = () => {
  // const request = fetch(
  //   `https://youtube138.p.rapidapi.com/search/?q=${encodedSearchText}&hl=en&gl=US`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "youtube138.p.rapidapi.com",
  //       "x-rapidapi-key": "a3e1a43d1cmshc780918109af492p11a868jsn9ee0f6a88eca",
  //     },
  //   },
  // );

  // request.then((response) =>{
  //   const pr2=response.json();
  //   pr2.then((data)=>{
  //     renderSearchResults(data);
  //   });
  // }).catch((err)=>{
  //   console.log("Failed to fetch the data, ",err.message);
  // });
  renderSearchResults();
};

const rootElement = document.getElementById("root");

const renderSearchResults = () => {
  const dummyData = {
    contents: [
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/wwnQq1pmB2B-Fh0o-6dhpc_Ep6bTwZtCsAIfmY6q84K0_2wuORa7tHTt6vOMGDOUjsynm1kT=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@petcollective",
            channelId: "UCPIvT-zcQl2H0vabdXJGcpg",
            title: "The Pet Collective",
          },
          badges: [],
          descriptionSnippet:
            "Dogs! Who doesn't love 'em...and also wonder how they get up to some of these shenanigans! #Dogs #Pets #puppy ...",
          isLiveNow: false,
          lengthSeconds: 3723,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/-AdteE-KuIg/mqdefault_6s.webp?du=3000&sqp=CMjTwswG&rs=AOn4CLD9A2fGwFttAaAvMSzWE6otWna-Lw",
              width: 320,
            },
          ],
          publishedTimeText: "9 months ago",
          stats: {
            views: 2371670,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/-AdteE-KuIg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBz2IqgPzDvf_-ZSKkxP8iZH3nhow",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/-AdteE-KuIg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmKptAsflW7CrwLfdaWl4fWz3cPA",
              width: 720,
            },
          ],
          title:
            "HILARIOUS Dogs Being Weird 🤪 | 60 Minutes Of Funny Dog Videos",
          videoId: "-AdteE-KuIg",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/bggytpwRvtw30OgWzOyoqx6n-Kdp96c0vl9q9wh5wtte8t3oczH31gkFZXt9yrwHqB1Ee9H5RA=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@funnypetslife67911",
            channelId: "UC0YbFiLN8fcvtWC5Jtt1Vzw",
            title: "Funny Pet's Life",
          },
          badges: ["New"],
          descriptionSnippet:
            "When You Live With a Talkative Dog The FUNNIEST Dogs Video Witness the hilarity when you live with a talkative dog who ...",
          isLiveNow: false,
          lengthSeconds: 649,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/3FiQdBy-jsM/mqdefault_6s.webp?du=3000&sqp=CK3lwswG&rs=AOn4CLALL6T4EOTYVhIkkudANis1cdciSg",
              width: 320,
            },
          ],
          publishedTimeText: "1 day ago",
          stats: {
            views: 8820,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/3FiQdBy-jsM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOMEWRx0NSE1HBRcns1xANx7YEUA",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/3FiQdBy-jsM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBR35lPe4jdn125kw8EgTxKok4PfQ",
              width: 720,
            },
          ],
          title:
            "When You Live With a Talkative Dog 🐶 The FUNNIEST Dogs Video",
          videoId: "3FiQdBy-jsM",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/T8HQt-G22rvs7hTNfGfY3gqE4CfF4hXTRlnaGpx2-FmdzRTrjdZnQECY-i4qJtVOhVL2Qo12Og=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@nannynae",
            channelId: "UC7AzlnaS5lix7JzFnVjr_iw",
            title: "Cutest Lands",
          },
          badges: ["New"],
          descriptionSnippet:
            "This is video : When God Sends You Funny Dogs Smarty Funny Animals Video Compilation Welcome to the Cutest Land!",
          isLiveNow: false,
          lengthSeconds: 4159,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/ZOMkkahLjTw/mqdefault_6s.webp?du=3000&sqp=CLSCw8wG&rs=AOn4CLACm6ZOlcn97gFIyKOImysVZoCFWA",
              width: 320,
            },
          ],
          publishedTimeText: "1 day ago",
          stats: {
            views: 36098,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/ZOMkkahLjTw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDe-ZUTBcn_yyemIAeQAirfAfneRg",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/ZOMkkahLjTw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQjSNw0VPMPb7gwppQRHYumRYGDw",
              width: 720,
            },
          ],
          title:
            "When God Sends You Funny Dogs 😹🐶 Smarty Funny Animals Video Compilation",
          videoId: "ZOMkkahLjTw",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/wQ95aenI8m__fznR9m05wfBlu5vkCdRncw0cka4A-2rzonlt4JQ6bkvtjUjrrD_nGW218mqKQQ=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@GingerCatOfficial",
            channelId: "UCU0zC0L4o0qOos83NLhK5ug",
            title: "Ginger Cat",
          },
          badges: [],
          descriptionSnippet:
            "When God Sends You the Funniest Police Dog on Earth Funny Dogs Videos 2026 Not all heroes wear badges… some wear ...",
          isLiveNow: false,
          lengthSeconds: 653,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/vxhHLkkXMIA/mqdefault_6s.webp?du=3000&sqp=CIDFwswG&rs=AOn4CLBUlx4ZypjOK9ADoK7sIzy3UBUjFA",
              width: 320,
            },
          ],
          publishedTimeText: "13 days ago",
          stats: {
            views: 470838,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/vxhHLkkXMIA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-AiQutodds5qNO3P51SfdfW5SEA",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/vxhHLkkXMIA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkcHe7UE0OQ5sBpKcFLg3LsstRMA",
              width: 720,
            },
          ],
          title:
            "When God Sends You the Funniest Police Dog on Earth 😂 Funny Dogs  Videos 2026",
          videoId: "vxhHLkkXMIA",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/T48d6mFIh_m_QXRbcYtWhldKB2dlF6K5MXg32nbIOchCPrCrOlIJiAh5E7r6ItgXc9DVjocKo5M=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@MAIPM1102",
            channelId: "UCIqWFhsJm2VU1ZuGrZnx3Pw",
            title: "MAI PM",
          },
          badges: ["New"],
          descriptionSnippet:
            "Try Not To Laugh Funniest Rottweiler Dogs | Funny Animals Video 2026 Think Rottweilers are always serious? Think again ...",
          isLiveNow: false,
          lengthSeconds: 1809,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/A8Lhs7RiZ9M/mqdefault_6s.webp?du=3000&sqp=CKj1wswG&rs=AOn4CLCzt9SItPvfOFrlHMBE-lky9paVng",
              width: 320,
            },
          ],
          publishedTimeText: "3 days ago",
          stats: {
            views: 15920,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/A8Lhs7RiZ9M/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfni9qvhnjXv3gA5yZJgkFnl_wIA",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/A8Lhs7RiZ9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmtsJ5LiSqFpetHL6NbL79yM5JtA",
              width: 720,
            },
          ],
          title:
            "Try Not To Laugh 😂 Funniest Rottweiler Dogs | Funny Animals Video 2026",
          videoId: "A8Lhs7RiZ9M",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/wQ95aenI8m__fznR9m05wfBlu5vkCdRncw0cka4A-2rzonlt4JQ6bkvtjUjrrD_nGW218mqKQQ=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@GingerCatOfficial",
            channelId: "UCU0zC0L4o0qOos83NLhK5ug",
            title: "Ginger Cat",
          },
          badges: [],
          descriptionSnippet:
            "Dogs Being Comedians and Silly for 1 Hour Funniest Animal Videos 2025 Get ready for 1 full hour of dogs being the ultimate ...",
          isLiveNow: false,
          lengthSeconds: 3682,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/EvQ3hjfqFoo/mqdefault_6s.webp?du=3000&sqp=CMTRwswG&rs=AOn4CLD69iUR0mbKObfvMJ10m_EGwsHuAg",
              width: 320,
            },
          ],
          publishedTimeText: "5 months ago",
          stats: {
            views: 63038,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/EvQ3hjfqFoo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCnWFAwgs6PEErXg8fSDVZb6osbA",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/EvQ3hjfqFoo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDa09AOw-_JnUWZx99pOpUnQ0xU2A",
              width: 720,
            },
          ],
          title:
            "Dogs Being Comedians and Silly for 1 Hour 😹 Funniest Animal Videos 2025",
          videoId: "EvQ3hjfqFoo",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/bggytpwRvtw30OgWzOyoqx6n-Kdp96c0vl9q9wh5wtte8t3oczH31gkFZXt9yrwHqB1Ee9H5RA=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@funnypetslife67911",
            channelId: "UC0YbFiLN8fcvtWC5Jtt1Vzw",
            title: "Funny Pet's Life",
          },
          badges: [],
          descriptionSnippet:
            "When Your Dog First Encounters with the Ocean! Funny Dogs and Water What happens when a dog meets the ocean for the ...",
          isLiveNow: false,
          lengthSeconds: 682,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/7vQySFky8pk/mqdefault_6s.webp?du=3000&sqp=CO_fwswG&rs=AOn4CLAD-Fp6dMZMx2PYXsd8IHBeD7O4iA",
              width: 320,
            },
          ],
          publishedTimeText: "7 months ago",
          stats: {
            views: 3604889,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/7vQySFky8pk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJLtQJr5Sb9zRoFuvGP03AMvlTGw",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/7vQySFky8pk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTZuBS0P86fibgXv9Yp-y2AqaeEQ",
              width: 720,
            },
          ],
          title:
            "When Your Dog First Encounters with the Ocean! 😂 Funny Dogs and Water",
          videoId: "7vQySFky8pk",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/uUXHK2E4JlNbxxc4gJHGGJUUuVUaIvBhmb0AHyOXuulHaIukHrQqsz_f7qpjE-y7Y42lY_Ub=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [],
            canonicalBaseUrl: "/@THesBUDDYTV",
            channelId: "UCD2Gk2Cuj2PIag_hsIIKyBQ",
            title: "THe’s BUDDY TV",
          },
          badges: [],
          descriptionSnippet:
            "When you're lucky enough to have a funny dog in your life, it's like a daily dose of happiness sent from above! Embrace the ...",
          isLiveNow: false,
          lengthSeconds: 1202,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/tzA0RzvcJwU/mqdefault_6s.webp?du=3000&sqp=CMT-wswG&rs=AOn4CLCAF6H7hBlTLO1Zx5fRMBwq7BP71Q",
              width: 320,
            },
          ],
          publishedTimeText: "5 months ago",
          stats: {
            views: 1808102,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/tzA0RzvcJwU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA42Hfb2pwkdy0RAln_y3HDTAqOsw",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/tzA0RzvcJwU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzfibgXlS9j9rWVqoM98nw8tPMAQ",
              width: 720,
            },
          ],
          title:
            "I dare you not to LAUGH at these FUNNY DOGS 😁🦮 - Best Funny Animals Videos 2025 #95",
          videoId: "tzA0RzvcJwU",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/xWIWU5BnPSXbnyy-NS-rAjMlq2h7_UyYVQttTE14vrTTfZ_Pellx8Ji3QEMZvpOWypfDax-Nbg=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [],
            canonicalBaseUrl: "/@ComfortZoneTV3s",
            channelId: "UCvveQAkC2cwDn5TuKWuSkCw",
            title: "Comfort Zone TV",
          },
          badges: [],
          descriptionSnippet:
            "The Funniest DOGS of 2026 So Far Funny Dog Videos Dogs have completely taken over 2026, and this compilation proves ...",
          isLiveNow: false,
          lengthSeconds: 3601,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/xVBPuqJhYiQ/mqdefault_6s.webp?du=3000&sqp=CMj6wswG&rs=AOn4CLBao6iuqntnTOhPMrBCBMPqD0hxDw",
              width: 320,
            },
          ],
          publishedTimeText: "2 weeks ago",
          stats: {
            views: 194471,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/xVBPuqJhYiQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOo1fBxeOTA4Q5rzLZUq2c4Cbyqg",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/xVBPuqJhYiQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDonkEGDWO_nbIbz6nWVTc7pZWTIA",
              width: 720,
            },
          ],
          title: "The Funniest DOGS of 2026 So Far 😂 Funny Dog Videos",
          videoId: "xVBPuqJhYiQ",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/IxRhzSjrJEvGVx-1pbXZo40wT8xCNCQmQQMh7VanzkBuFbkTFFUgQQQy0Rs4H4zfp88RgXfuJhc=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [],
            canonicalBaseUrl: "/@PetComedyClub777",
            channelId: "UC6M-Z9hfRI8D8oSwJ9GkllA",
            title: "Pet Comedy Club",
          },
          badges: [],
          descriptionSnippet:
            "Crazy Funny Dogs That Will Make You Laugh Nonstop FUNNY DOGS 2026 Try Not To Laugh Challenge | Cutest ...",
          isLiveNow: false,
          lengthSeconds: 513,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/67dDEr24xTs/mqdefault_6s.webp?du=3000&sqp=COHuwswG&rs=AOn4CLAwcuRIX9qvgjetOZ2X6d8yxFPKlQ",
              width: 320,
            },
          ],
          publishedTimeText: "5 months ago",
          stats: {
            views: 1493109,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/67dDEr24xTs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-iBYuuCG82_kyQL9G_cwHieX9sw",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/67dDEr24xTs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD85DivVSaD2Mztxhrhu8Ed5mIkjQ",
              width: 720,
            },
          ],
          title: "Crazy Funny Dogs That Will Make You Laugh Nonstop 🐶🤣",
          videoId: "67dDEr24xTs",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/t6aznm976yemkpK7doWzAYALcZ8uLU2idK0TzEBnKM-WkELuZdg9A3VicBcicfUYciCf-yfrTA=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@failarmy",
            channelId: "UCPDis9pjXuqyI7RYLJ-TTSA",
            title: "FailArmy",
          },
          badges: [],
          descriptionSnippet:
            "Dogs are mans best friend, and sometimes that best friend fails hard! Here's the top 29 dog fails. With you vote we'll admit one into ...",
          isLiveNow: false,
          lengthSeconds: 292,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/-SY-aeSplco/mqdefault_6s.webp?du=3000&sqp=CO7kwswG&rs=AOn4CLA6OpWL7Iqed6XPoZ7y_1KQO2e2Ig",
              width: 320,
            },
          ],
          publishedTimeText: "8 years ago",
          stats: {
            views: 5327957,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/-SY-aeSplco/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4dGKdsMl4MifyOLO5PhxdQ9Rlgg",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/-SY-aeSplco/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYDXzot7mDtiIA_ZSl2RHto7zrYA",
              width: 720,
            },
          ],
          title: "The Top 29 Dog Fails: Funny Dog Videos: FailArmy",
          videoId: "-SY-aeSplco",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/BUWPWnXVV2qp_JIuqnTXsiS8x5UX-PhHjPQP6VPXcq7rIX5QmxWrirw60WdLJq0Y6HPhxf6i=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [],
            canonicalBaseUrl: "/@Funnycatlos",
            channelId: "UCksHFQBGb1l5pQaNWAhUdzg",
            title: "Funny Catlos",
          },
          badges: [],
          descriptionSnippet:
            "Funniest Cats & Dogs of 2025 | Try Not To Laugh Challenge! Get ready to laugh non-stop! This video is a compilation of ...",
          isLiveNow: false,
          lengthSeconds: 1283,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/Cn9SmlfsYzk/mqdefault_6s.webp?du=3000&sqp=CProwswG&rs=AOn4CLDBy-RN204EZ9W_vRvyx9cmVB9fLg",
              width: 320,
            },
          ],
          publishedTimeText: "4 months ago",
          stats: {
            views: 6272720,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/Cn9SmlfsYzk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYr1yrLTEF9a4grZYCYl1U1THPGg",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/Cn9SmlfsYzk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4ajg6zkGcnVF6vSooPl96VEJ6UA",
              width: 720,
            },
          ],
          title:
            "Funniest Cats & Dogs of 2025 🐾😂 | Try Not To Laugh Challenge!",
          videoId: "Cn9SmlfsYzk",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AIdro_nhNcwhrQYcj4XStN4IxFVipf97m9JdDwTVJwZlAJBrFA=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@Mayapolarbear",
            channelId: "UCLFJxkc6mv0Mj6N49MHyK2Q",
            title: "Mayapolarbear",
          },
          badges: [],
          descriptionSnippet:
            'She says "you can hate me but I still love you " ✿ CONNECT WITH US ✿ » Maya\'s Shop | https://www.mayapolarbear.com ...',
          isLiveNow: false,
          lengthSeconds: 12,
          movingThumbnails: null,
          publishedTimeText: "3 years ago",
          stats: {
            views: 207072741,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/9biWC3pKzE0/hq720_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhlIFwoVDAP&rs=AOn4CLBlIyGWth7dl9daI_1HDeBs3q_ZYg",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/9biWC3pKzE0/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhlIFwoVDAP&rs=AOn4CLA9BG-j0Qm7X9tyQAnSf70jy1YqDA",
              width: 720,
            },
          ],
          title: "My Dog Has a Pure Heart 🥺 #shorts #dog",
          videoId: "9biWC3pKzE0",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/uUXHK2E4JlNbxxc4gJHGGJUUuVUaIvBhmb0AHyOXuulHaIukHrQqsz_f7qpjE-y7Y42lY_Ub=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [],
            canonicalBaseUrl: "/@THesBUDDYTV",
            channelId: "UCD2Gk2Cuj2PIag_hsIIKyBQ",
            title: "THe’s BUDDY TV",
          },
          badges: [],
          descriptionSnippet:
            "When you're lucky enough to have a funny dog in your life, it's like a daily dose of happiness sent from above! Embrace the ...",
          isLiveNow: false,
          lengthSeconds: 1184,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/e-pwNstdC6w/mqdefault_6s.webp?du=3000&sqp=CJTOwswG&rs=AOn4CLDCYJng32YStWL5qUYktU-_8UKC3A",
              width: 320,
            },
          ],
          publishedTimeText: "6 months ago",
          stats: {
            views: 601720,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/e-pwNstdC6w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrVWpd5bAGO3jdjsbkwY9CH5YAeg",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/e-pwNstdC6w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBj8FZfxiaH5wKAEpdYHu-UTQNqQ",
              width: 720,
            },
          ],
          title:
            "I dare you not to LAUGH at these FUNNY DOGS 😁🦮 - Best Funny Animals Videos 2025 #64",
          videoId: "e-pwNstdC6w",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/wwnQq1pmB2B-Fh0o-6dhpc_Ep6bTwZtCsAIfmY6q84K0_2wuORa7tHTt6vOMGDOUjsynm1kT=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@petcollective",
            channelId: "UCPIvT-zcQl2H0vabdXJGcpg",
            title: "The Pet Collective",
          },
          badges: [],
          descriptionSnippet:
            "Those little legs can MOVE! (Via - Claire P.) #Dog #MiniDachshund #Dachshund ✨    Subscribe to The Scoop for our most ...",
          isLiveNow: false,
          lengthSeconds: 15,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/fBeZLFo0Yew/mqdefault_6s.webp?du=3000&sqp=CKjbwswG&rs=AOn4CLCoNJJW1hDSOy-d2HBInDiVHFeXIA",
              width: 320,
            },
          ],
          publishedTimeText: "7 months ago",
          stats: {
            views: 19702940,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/fBeZLFo0Yew/hq720_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhaIGUoLzAP&rs=AOn4CLBXeKb7aDq5JWYT1HiIpfLUHxFLvw",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/fBeZLFo0Yew/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhaIGUoLzAP&rs=AOn4CLC4EKvF0GxDnhzCgzFlTI0S0t-Nqw",
              width: 720,
            },
          ],
          title: "Dachshund Races Car to Home",
          videoId: "fBeZLFo0Yew",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/wwnQq1pmB2B-Fh0o-6dhpc_Ep6bTwZtCsAIfmY6q84K0_2wuORa7tHTt6vOMGDOUjsynm1kT=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@petcollective",
            channelId: "UCPIvT-zcQl2H0vabdXJGcpg",
            title: "The Pet Collective",
          },
          badges: [],
          descriptionSnippet:
            "Your dogs deserve to chill out to a great video too every once in a while ✨    Subscribe to The Scoop for our most ...",
          isLiveNow: false,
          lengthSeconds: 7222,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/_mKAqrA3weA/mqdefault_6s.webp?du=3000&sqp=CMD_wswG&rs=AOn4CLACpF8omQpv-5p4mpUdId95uqujlQ",
              width: 320,
            },
          ],
          publishedTimeText: "1 year ago",
          stats: {
            views: 1424353,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/_mKAqrA3weA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwOEtynvPFusacBRjaL5b_PdNy_A",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/_mKAqrA3weA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBR9xE57OJJLMXa8im07BF_IoK-dA",
              width: 720,
            },
          ],
          title: "CLASSIC Dog Videos! 🐶 🤣 | 2 HOURS of FUNNY Clips",
          videoId: "_mKAqrA3weA",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/T8HQt-G22rvs7hTNfGfY3gqE4CfF4hXTRlnaGpx2-FmdzRTrjdZnQECY-i4qJtVOhVL2Qo12Og=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@nannynae",
            channelId: "UC7AzlnaS5lix7JzFnVjr_iw",
            title: "Cutest Lands",
          },
          badges: ["New"],
          descriptionSnippet:
            "This is video : Super Funny Dog Video Clips The Funniest Cat & Dog Moments Compilation Welcome to the Cutest Land!",
          isLiveNow: false,
          lengthSeconds: 4159,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/hm9YEWrKyWs/mqdefault_6s.webp?du=3000&sqp=CPHwwswG&rs=AOn4CLC2lvL1U0M0BrlsISuqRL1Pk65tSg",
              width: 320,
            },
          ],
          publishedTimeText: "2 days ago",
          stats: {
            views: 13132,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/hm9YEWrKyWs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDulE9Sn_zQa8rbatoXufol-0mToA",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/hm9YEWrKyWs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaACYLzc5i59cZZNo90Q6eMx6Ocg",
              width: 720,
            },
          ],
          title:
            "Super Funny Dog Video Clips  😹🐶 The Funniest Cat & Dog Moments Compilation 😁",
          videoId: "hm9YEWrKyWs",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/owo501x5IB3Vy4ahZxjXeyqlCjQNVmTCGIPaxS2Z_I8jN96zyJ3AiZu7v8Xyx1fBO27vzKeWqQ=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [],
            canonicalBaseUrl: "/@buitenzorgeth",
            channelId: "UCU_spd5jRm4-x_x_fxUzcOA",
            title: "buitenzorgeth",
          },
          badges: [],
          descriptionSnippet:
            "If you enjoy puppy funny videos and adorable dog antics, you're going to love this one! funny dog, funny dog moments, cute dog, ...",
          isLiveNow: false,
          lengthSeconds: 10,
          movingThumbnails: null,
          publishedTimeText: "6 months ago",
          stats: {
            views: 267576346,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/E8HxOFUKbWo/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhyIFMoNDAP&rs=AOn4CLCELLLncuQfF8Vk03njSCk_1KxxvQ",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/E8HxOFUKbWo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhyIFMoNDAP&rs=AOn4CLC3FLDLmBm05eK-3Ly_6BPu1ceVKw",
              width: 720,
            },
          ],
          title: "DOG FUNNY REACTION PART 3 #dog #funny #trendingshorts #doge",
          videoId: "E8HxOFUKbWo",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/bggytpwRvtw30OgWzOyoqx6n-Kdp96c0vl9q9wh5wtte8t3oczH31gkFZXt9yrwHqB1Ee9H5RA=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@funnypetslife67911",
            channelId: "UC0YbFiLN8fcvtWC5Jtt1Vzw",
            title: "Funny Pet's Life",
          },
          badges: [],
          descriptionSnippet:
            "Overdramatic Dogs Who Deserve An Oscar Funny Dog Videos 2025 Who needs Hollywood when you have these Overdramatic ...",
          isLiveNow: false,
          lengthSeconds: 1230,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/nVciDuOSqFg/mqdefault_6s.webp?du=3000&sqp=CNjvwswG&rs=AOn4CLA2xEkgdSybXlAtpI7izvm3PTIEHQ",
              width: 320,
            },
          ],
          publishedTimeText: "7 months ago",
          stats: {
            views: 2393566,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/nVciDuOSqFg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbB3bQnm-3BB-ywDoZMQNTSUyzrA",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/nVciDuOSqFg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC59a8L6p3VCvBE8yDZgue1BLPPJA",
              width: 720,
            },
          ],
          title:
            "Overdramatic Dogs Who Deserve An Oscar 😁 Funny Dog Videos 2025",
          videoId: "nVciDuOSqFg",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/bggytpwRvtw30OgWzOyoqx6n-Kdp96c0vl9q9wh5wtte8t3oczH31gkFZXt9yrwHqB1Ee9H5RA=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@funnypetslife67911",
            channelId: "UC0YbFiLN8fcvtWC5Jtt1Vzw",
            title: "Funny Pet's Life",
          },
          badges: [],
          descriptionSnippet:
            "The FUNNIEST Dogs Around the World! Funny Dog Videos 2026 Who are the funniest dogs around the world? Find out in our ...",
          isLiveNow: false,
          lengthSeconds: 642,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/7EplwTxppsk/mqdefault_6s.webp?du=3000&sqp=CM3XwswG&rs=AOn4CLBYgPql2t-cjpJpJTT6U3uNdsFlbg",
              width: 320,
            },
          ],
          publishedTimeText: "2 weeks ago",
          stats: {
            views: 106083,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/7EplwTxppsk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtD_dhRt_MVgqFVbyaQPuIwk4UhQ",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/7EplwTxppsk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHI2yc7dpElVVqyUdb2TSjZU_UWg",
              width: 720,
            },
          ],
          title: "The FUNNIEST Dogs Around the World! 😂 Funny Dog Videos 2026",
          videoId: "7EplwTxppsk",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/T48d6mFIh_m_QXRbcYtWhldKB2dlF6K5MXg32nbIOchCPrCrOlIJiAh5E7r6ItgXc9DVjocKo5M=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@MAIPM1102",
            channelId: "UCIqWFhsJm2VU1ZuGrZnx3Pw",
            title: "MAI PM",
          },
          badges: [],
          descriptionSnippet:
            "The Funniest Dog on the Planet | Funny Animal Video is guaranteed to make you laugh from start to finish This dog has ...",
          isLiveNow: false,
          lengthSeconds: 1960,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/bjny1qTWG1U/mqdefault_6s.webp?du=3000&sqp=CKXawswG&rs=AOn4CLDYdYJFqCJF_kQ6ibP86VNtnsB8Sw",
              width: 320,
            },
          ],
          publishedTimeText: "1 month ago",
          stats: {
            views: 165114,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/bjny1qTWG1U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeANsCfBA84W1SIi98c-Khs6jrfw",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/bjny1qTWG1U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBNKM7I5UxtID4HL0ZrdU0tPQe-w",
              width: 720,
            },
          ],
          title: "The Funniest Dog on the Planet 😂🐶 Funny Animal Video",
          videoId: "bjny1qTWG1U",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/_kGeBiATYLQFY3bMo1CswNuPDudPKE98cnIQ7J6s31vMxtUNpOC6P38xUPfPWKqFg9Zq3bHDKg=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [],
            canonicalBaseUrl: "/@FunnyCollectionAnimals",
            channelId: "UCm7VzEfXHsc2F8Vgc_rLNfw",
            title: "Funny Collection Animals",
          },
          badges: [],
          descriptionSnippet:
            "Get ready to laugh nonstop! The funniest cats and dogs are back in this brand-new 2025 compilation! From clumsy kittens ...",
          isLiveNow: false,
          lengthSeconds: 1215,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/Ob05Vq3NU8Y/mqdefault_6s.webp?du=3000&sqp=CI6Ew8wG&rs=AOn4CLABcWinambOcW60oH3vwWFLHrNrBw",
              width: 320,
            },
          ],
          publishedTimeText: "6 months ago",
          stats: {
            views: 520628,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/Ob05Vq3NU8Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDa91zUFsFsojxXCXhwa_lX63nlpg",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/Ob05Vq3NU8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiCx6A3Ek9rSEDB4zW0HzkNzcEeA",
              width: 720,
            },
          ],
          title:
            "NEW Funniest videos of Cats🐈 and Dogs🐕2025. Try Not To Laugh 😂",
          videoId: "Ob05Vq3NU8Y",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/dOHE6fvwMvejBD4Nb_uA7ftD-hGEth93Zj2GSSBXvZbA-4VT8AskUWCoZILJjSfoO5Ht6NV9ZSM=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [],
            canonicalBaseUrl: "/@cutepetstv11",
            channelId: "UCAmhbG40GSFEJEa-6Yj8zAQ",
            title: "Cute Pets TV",
          },
          badges: [],
          descriptionSnippet:
            "99.9% Can't stop laughing at these dog Funny Dog Videos 2025 Get ready to laugh until you can't breathe! These dogs are ...",
          isLiveNow: false,
          lengthSeconds: 606,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/V6Oyv9zoz9Y/mqdefault_6s.webp?du=3000&sqp=COrtwswG&rs=AOn4CLC-P6eV43Ri4WaDt-bN4m9XCZzmVg",
              width: 320,
            },
          ],
          publishedTimeText: "9 months ago",
          stats: {
            views: 1523226,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/V6Oyv9zoz9Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9eSBcbNw8_ZO0wzhPm9-742b2Xw",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/V6Oyv9zoz9Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9ooOLLCWTBDeF-A1tuAr9Klu3Lw",
              width: 720,
            },
          ],
          title:
            "99.9% Can’t stop laughing at these dog 😂 Funny Dog Videos 2025",
          videoId: "V6Oyv9zoz9Y",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/PghHfw9GtHz9bKR6UBHKeZdszsn_xNpBk4xNdVcTt9CnKvyEu9tSdJL4mHVGNzXpc6A7oJ2S=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [],
            canonicalBaseUrl: "/@justsomepets",
            channelId: "UCxh03BJxkKN9yRrK98kqFXw",
            title: "JustSomePets",
          },
          badges: [],
          descriptionSnippet: "Ranking The Funniest Dog Videos.",
          isLiveNow: false,
          lengthSeconds: 28,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/LHRaPXGx_qw/mqdefault_6s.webp?du=3000&sqp=COzjwswG&rs=AOn4CLDB8V5IdWZkqp3Uqc2Kg7bHOXZ5og",
              width: 320,
            },
          ],
          publishedTimeText: "9 months ago",
          stats: {
            views: 5279052,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/LHRaPXGx_qw/hq720_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhyIFkoOzAP&rs=AOn4CLD8tsrnFRBbdCpKyda6yoI6cwvMkg",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/LHRaPXGx_qw/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhyIFkoOzAP&rs=AOn4CLCaq1buSNN3D3CIDCQc2guiW7BPQg",
              width: 720,
            },
          ],
          title: "Ranking The Funniest Dog Videos",
          videoId: "LHRaPXGx_qw",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/h_IH0CZ9vsWspoE_yqpgE5rCbDb3QOF7FQlVI6wFecPgR3ObAWR9_HY1j7qqoKrdUz_f46rRjq4=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@bulldog_reaction2",
            channelId: "UCgsYCEIoBAVel-xiun4RmPQ",
            title: "Bulldog Reaction 🐾 Zephyrka girl 🐕",
          },
          badges: ["CC"],
          descriptionSnippet:
            "Subscribe and Like this video  ❤️ Watch more videos in playlists - French bulldog shorts ❤️ === Hello Everyone! I am a ...",
          isLiveNow: false,
          lengthSeconds: 13,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/WjJpTNuZdkc/mqdefault_6s.webp?du=3000&sqp=CL_kwswG&rs=AOn4CLCZEXqoUIAQUDufG4-TEX-lMz9zlQ",
              width: 320,
            },
          ],
          publishedTimeText: "1 year ago",
          stats: {
            views: 63044474,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/WjJpTNuZdkc/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhlIFcoSDAP&rs=AOn4CLC4rYClDxfzrs-VIT4KARgaX1DzYw",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/WjJpTNuZdkc/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhlIFcoSDAP&rs=AOn4CLCbAM5YK5phJJcn-cJoMASw4vYkgw",
              width: 720,
            },
          ],
          title:
            "French bulldog fart 😁  #bulldog #animals #mreviatar #dog #dogs #animal #animalshorts #shorts #funny",
          videoId: "WjJpTNuZdkc",
        },
      },
    ],
    cursorNext:
      "Eq4DEhVjb21lZHkgdmlkZW9zIG9mIGRvZ3MalANTQlNDQVF0RmRsRXphR3BtY1VadmI0SUJDemQyVVhsVFJtdDVPSEJyZ2dFTGRIcEJNRko2ZG1OS2QxV0NBUXQ0VmtKUWRYRkthRmxwVVlJQkN6WTNaRVJGY2pJMGVGUnpnZ0VMTFZOWkxXRmxVM0JzWTItQ0FRdERiamxUYld4bWMxbDZhNElCQ3psaWFWZERNM0JMZWtVd2dnRUxaUzF3ZDA1emRHUkRObmVDQVF0bVFtVmFURVp2TUZsbGQ0SUJDMTl0UzBGeGNrRXpkMlZCZ2dFTGFHMDVXVVZYY2t0NVYzT0NBUXRGT0VoNFQwWlZTMkpYYjRJQkMyNVdZMmxFZFU5VGNVWm5nZ0VMTjBWd2JIZFVlSEJ3YzJ1Q0FRdGlhbTU1TVhGVVYwY3hWWUlCQzA5aU1EVldjVE5PVlRoWmdnRUxWalpQZVhZNWVtOTZPVm1DQVF0TVNGSmhVRmhIZUY5eGQ0SUJDMWRxU25CVVRuVmFaR3Rqc2dFR0NnUUlHeEFDNmdFRUNBSVFGQSUzRCUzRBiB4OgYIgtzZWFyY2gtZmVlZA%3D%3D",
    didYouMean: null,
    estimatedResults: 13565205,
    filterGroups: [
      {
        filters: [
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJUUFRJTNEJTNE",
            label: "Videos",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJUUNRJTNEJTNE",
            label: "Shorts",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJUUFnJTNEJTNE",
            label: "Channels",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJUUF3JTNEJTNE",
            label: "Playlists",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJUUJBJTNEJTNE",
            label: "Movies",
            selected: false,
          },
        ],
        title: "Type",
      },
      {
        filters: [
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJWUJBJTNEJTNE",
            label: "Under 3 minutes",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJWUJRJTNEJTNE",
            label: "3 - 20 minutes",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJWUFnJTNEJTNE",
            label: "Over 20 minutes",
            selected: false,
          },
        ],
        title: "Duration",
      },
      {
        filters: [
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJSUFnJTNEJTNE",
            label: "Today",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJSUF3JTNEJTNE",
            label: "This week",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJSUJBJTNEJTNE",
            label: "This month",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJSUJRJTNEJTNE",
            label: "This year",
            selected: false,
          },
        ],
        title: "Upload date",
      },
      {
        filters: [
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdKQUFRJTNEJTNE",
            label: "Live",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdKd0FRJTNEJTNE",
            label: "4K",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJZ0FRJTNEJTNE",
            label: "HD",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJb0FRJTNEJTNE",
            label: "Subtitles/CC",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJd0FRJTNEJTNE",
            label: "Creative Commons",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdKNEFRJTNEJTNE",
            label: "360°",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdQUUFRRSUzRA==",
            label: "VR180",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdJNEFRJTNEJTNE",
            label: "3D",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdQSUFRRSUzRA==",
            label: "HDR",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdPNEFRRSUzRA==",
            label: "Location",
            selected: false,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmRWdKSUFRJTNEJTNE",
            label: "Purchased",
            selected: false,
          },
        ],
        title: "Features",
      },
      {
        filters: [
          {
            cursorSelect: null,
            label: "Relevance",
            selected: true,
          },
          {
            cursorSelect: "Y29tZWR5IHZpZGVvcyBvZiBkb2dzJiYmQ0FNJTNE",
            label: "Popularity",
            selected: false,
          },
        ],
        title: "Prioritize",
      },
    ],
    refinements: [],
  };
  const { contents } = dummyData;

  contents.forEach((obj) => {
    const { video } = obj;
    const newDiv=document.createElement("div");

  });
};

getSearchResults();
