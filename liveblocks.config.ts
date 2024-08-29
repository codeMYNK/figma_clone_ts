import { LiveMap, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

// Create a Liveblocks client with resolveUsers and resolveMentionSuggestions
const client = createClient({
  throttle: 16,
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
  resolveUsers: async ({ userIds }) => {
    // Your existing logic for resolving users
    // This can involve fetching user details from an API or a local store
    // Example implementation
    return [];
  },
  resolveMentionSuggestions: async ({ text, roomId }) => {
    // Your existing logic for resolving mention suggestions
    // Example implementation
    return [];
  },
});

// Presence represents the properties that exist on every user in the Room
// and that will automatically be kept in sync. Accessible through the
// `user.presence` property. Must be JSON-serializable.
type Presence = {
  // Define presence properties if needed
};

// Optionally, Storage represents the shared document that persists in the
// Room, even after all users leave.
type Storage = {
  canvasObjects: LiveMap<string, any>;
};

// Optionally, UserMeta represents static/readonly metadata on each user.
type UserMeta = {
  // Define user meta properties if needed
};

// Optionally, the type of custom events broadcast and listened to in this
// room.
type RoomEvent = {
  // Define room event properties if needed
};

// Optionally, when using Comments, ThreadMetadata represents metadata on
// each thread.
export type ThreadMetadata = {
  resolved: boolean;
  zIndex: number;
  time?: number;
  x: number;
  y: number;
};

// Create Room Context
export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useUser,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(client);
