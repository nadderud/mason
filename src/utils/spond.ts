const SPOND_API_URL = 'https://api.spond.com/core/v1/';

type SpondEvent = {
    id: string;
    creatorId: string;
    owners: any;
    heading: string;
    description: string;
    startTimestamp: string;
    endTimestamp: string;
    location?: any
    picture?: string;
    type: "EVENT"
}

type EventFetchOptions = {
    maxEvents?: number;
    scheduled?: boolean;
    includeComments?: boolean;
    includeHidden?: boolean;
    order?: "asc" | "desc";
    groupId?: string;
    maxEndTimestamp?: string;
    minEndTimestamp?: string;
  };

export async function getSpondEvents(
    accessToken,
    options: EventFetchOptions = {}
  ): Promise<SpondEvent[]> {
    const { maxEvents = 50, scheduled = true, includeComments = false, order = "asc" } = options;
  
    const params = new URLSearchParams();
  
    params.append('scheduled', String(scheduled));
    params.append('max', String(maxEvents));
    params.append('includeComments', String(includeComments));
    params.append('order', order);
  
  
    if (options.includeHidden) {
      params.append('includeHidden', String(options.includeHidden));
    }
  
    if (options.groupId) {
      params.append('groupId', options.groupId);
    }
  
    if (options.maxEndTimestamp) {
      params.append('maxEndTimestamp', options.maxEndTimestamp);
    }
  
    if (options.minEndTimestamp) {
      params.append('minEndTimestamp', options.minEndTimestamp);
    }
  
    try {
      const response = await fetch(
        SPOND_API_URL + 'sponds/?' + params.toString(),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
  
      const events = await response.json();
  
      return events as SpondEvent[];
    } catch (error) {
      throw error;
    }
  }
