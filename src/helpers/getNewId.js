export default function(listState) {
  return listState.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1
}