import  {  gql  }  from  "apollo-server-micro"; 

export  const  typeDefs  =  gql`
    type  Event {
        id: String
        name: String
        category: String
        excerpt: String
        image: String
        link: String
    }

    type  Query {
        getEvents: [Event]
        getEvent(id: String!): Event!
    }`