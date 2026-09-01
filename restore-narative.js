const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(fragments) {
  const result = fragments.filter(f => f !== undefined);
  if (result.length < fragments.length) {
    console.log('[COMPACTED] Removed undefined elements');
  }
  return result;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(fragments) {
  const byId = {};
  let minId = Infinity;
  let maxId = -Infinity;

  for (const frag of fragments) {
    if (!byId[frag.id]) byId[frag.id] = [];
    byId[frag.id].push(frag);
    if (frag.id < minId) minId = frag.id;
    if (frag.id > maxId) maxId = frag.id;
  }

  const result = [];
  for (let id = minId; id <= maxId; id++) {
    if (byId[id]) {
      result.push(...byId[id]);
    }
  }
  return result;
}   

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(fragments) {
  const seen = new Set();
  const result = [];
  for (const frag of fragments) {
    if (!seen.has(frag.id)) {
      seen.add(frag.id);
      result.push(frag);
    } else {
      console.log(`[DEDUPED] Removed duplicate fragment with id ${frag.id}`);
    }
  }
  return result;
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(fragments) {
  if (fragments.length === 0) return [];
  const minId = fragments[0].id;
  const maxId = fragments[fragments.length - 1].id;
  const existingIds = new Set(fragments.map(f => f.id));
  const result = [];
  let idx = 0;
  for (let id = minId; id <= maxId; id++) {
    if (existingIds.has(id)) {
      result.push(fragments[idx]);
      idx++;
    } else {
      const placeholder = { id, text: '[...]' };
      result.push(placeholder);
      console.log(`[FILLED] Added placeholder for missing fragment with id ${id}`);
    }
  }
  return result;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(fragments) {
  return fragments.map(f => f.text).join('\n');
}

console.log(assembleStory(filledFragments));   
