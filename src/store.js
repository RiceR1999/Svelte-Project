import { writable, derived } from "svelte/store";

export const apiData = writable([]);

export const userNames = derived(apiData, ($apiData) => {
  if ($apiData.users) {
    return $apiData.users.map((user) => user.userName);
  }
  return [];
});
