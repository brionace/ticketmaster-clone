import type { NextApiRequest, NextApiResponse } from 'next'

type Content = {
  id: string,
  name: string,
  category: string,
  excerpt?: string,
  image: string,
  link: string
}[]

type Data = {
  title: string
  content: Content
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    [
      {
        title: '',
        content: [
            {
                id: '1',
                name: 'Rüfüs Du Sol',
                category: 'Clubs and Dance',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/RDS22_TM_720x405.jpg',
                link: '#'
            },
            {
                id: '2',
                name: 'The Nickelodeon Experience',
                category: 'Family',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/7294_03_NICK_TM_Artist_720x405_edit-2.jpg',
                link: '#'
            },
            {
                id: '3',
                name: 'Scouting For Girls',
                category: 'Rock/Pop',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/720x405_sfg2802.png',
                link: '#'
            },
            {
                id: '4',
                name: 'The Cher Show - A New Musical',
                category: 'Musicals',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/7110_53_CHER_TM_CCP_Spotlight_Med_720x405.jpg',
                link: '#'
            }
        ]
      },
      {
        title: 'Popular Tickets',
        content: [
            {
                id: '5',
                name: 'Back To The Future The Musical',
                category: 'Musicals',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/BackToTheFuture_TICKETMASTER_368x207.jpg',
                link: '#'
            },
            {
                id: '6',
                name: 'Wireless',
                category: 'Fetivals',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/Wireless22_2502_368x207.png',
                link: '#'
            },
            {
                id: '7',
                name: 'Parenting Hell Live',
                category: 'Comedy',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/Parenting_Hell_Live_368x207_TM.jpg',
                link: '#'
            },
            {
                id: '8', 
                name: 'Jersey Boys',
                category: 'Musicals',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/JerseyBoys_SmallSpot_22.jpg',
                link: '#'
            },
            {
                id: '9',
                name: 'Disney\'s Frozen',
                category: 'Musicals',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/DisneysFrozen_2021_368x207.jpg',
                link: '#'
            }
        ]
      },
      {
        title: 'Featured',
        content: [
            {
                id: '5',
                name: 'Back To The Future The Musical',
                category: 'Musicals',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/BackToTheFuture_TICKETMASTER_368x207.jpg',
                link: '#'
            },
            {
                id: '6',
                name: 'Wireless',
                category: 'Fetivals',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/Wireless22_2502_368x207.png',
                link: '#'
            },
            {
                id: '7',
                name: 'Parenting Hell Live',
                category: 'Comedy',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/Parenting_Hell_Live_368x207_TM.jpg',
                link: '#'
            },
            {
                id: '8', 
                name: 'Jersey Boys',
                category: 'Musicals',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/JerseyBoys_SmallSpot_22.jpg',
                link: '#'
            },
            {
                id: '9',
                name: 'Disney\'s Frozen',
                category: 'Musicals',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/DisneysFrozen_2021_368x207.jpg',
                link: '#'
            }
        ]
      },
      {
        title: 'Discover',
        content: [
            {
                id: '10',
                name: 'First Stages: Feeder',
                category: 'Interview',
                excerpt: 'Grant Nicholas looks back on Feeder\'s early days ahead of his new tour',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/Feeder_260222.jpeg',
                link: '#'
            },
            {
                id: '11',
                name: 'Fury vs Whyte: The Full Story',
                category: 'Preview',
                excerpt: 'A closer look at what\'s at stake in the biggest British bout in WBA history',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/FuryWhyte_250222.jpg',
                link: '#'
            },
            {
                id: '12',
                name: 'First Stages: Del Amitri',
                category: 'Interview',
                excerpt: 'Justin Currie on opening for the Stones and why he dreads playing his biggest hit',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/DelAmitri_0403_720.jpeg',
                link: '#'
            },
            {
                id: '13',
                name: 'Theatre Roundup: Spring 2022',
                category: 'Theatre',
                excerpt: 'The big new curtains coming up this season in the West End',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/THEATRE_1602_720.jpg',
                link: '#'
            },
            {
                id: '14',
                name: 'One Sale Now!',
                category: 'News',
                excerpt: 'This week\'s big tickets, including The Cher Show, Latitude, Calvin Harris and more',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/ONSALE_0203_720.jpg',
                link: '#'
            },
            {
                id: '15',
                name: 'Steve Backshall',
                category: 'Stuck In a Lift',
                excerpt: 'The British explorer answers our quickfire questions',
                image: 'https://uk.tmconst.com/ccp-salesforce-images/UK/SteveBackshall_0403_720.jpg',
                link: '#'
            }
        ]
      }
    ]
  )
}