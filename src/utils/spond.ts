import axios from "axios";

const spondBaseApiUrl = "https://api.spond.com/core/v1/";

export type SpondEvent = {
  id: string;
  heading: string;
  description: string;
  startTimestamp: string;
  endTimestamp: string;
  type: string;
  picture?: string;
};

export const getEvents = async (groupId: string) => {
  const { data } = await axios.get<SpondEvent[]>(`${spondBaseApiUrl}sponds`, {
    params: {
      groupId: import.meta.env.SPOND_GROUP_ID,
      subGroupId: groupId,
      order: "asc",
      scheduled: true,
      addProfileInfo: false,
      includeHidden: true,
      includeComments: false,
      max: 10,
      minEndTimestamp: new Date(),
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.SPOND_SESSION_TOKEN}`,
      accept: "application/json",
      "Api-level": "2.5.53",
    },
  });

  return data;
};

export const getEventsFromSelectedGroups = async (groupIds: string[]) => {
  try {
    const allEvents = await Promise.all(
      groupIds.map((groupId) => getEvents(groupId))
    );
    return allEvents.flat();
  } catch (error) {
    console.error("Error fetching events from Spond", error);
    return [];
  }
};
