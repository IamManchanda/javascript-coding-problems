import Solution from "./Solution.js";
import { sleep } from "../helpers/sleep.js";

const solution = new Solution();

const sendChat = (message) => {
  console.log(`Sending message: ${message}`);
};

const throttledSendChat = solution.throttle(sendChat, 3000);

(async function() {
  await sleep(0, throttledSendChat, 'Hello');
  await sleep(1000, throttledSendChat, 'Hello Ji');
  await sleep(2000, throttledSendChat, 'Hello please respond');
  await sleep(4000, throttledSendChat, 'Why are you ignoring me?');
  await sleep(2000, throttledSendChat, 'Chal nikal');
  await sleep(1000, throttledSendChat, 'Chal be');
  await sleep(0, throttledSendChat, 'Dekhunga tujhe jaldi');
})();
