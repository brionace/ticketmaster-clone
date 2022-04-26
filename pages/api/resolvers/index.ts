import axios from "axios";

export const resolvers = {
  Query: {
    getEvents: async () => {
      try {
        const events = await axios.get("http://localhost:3000/api/events");
        return events.data.map(({ id, name, category, excerpt, image, link }: Record<string, string>) => ({
          id,
          name,
          category, 
          excerpt, 
          image, 
          link
        }));
      } catch (error) {
        throw error;
      }
    },
    getEvent: async (_:unknown, args:unknown) => {
      try {
        const event = await axios.get(
          `http://localhost:3000/api/events/${args.id}`
        );
        return {
          id: event.data.id,
          name: event.data.name,
          excerpt: event.data.excerpt,
          image: event.data.image
        };
      } catch (error) {
        throw error;
      }
    }
  }
};