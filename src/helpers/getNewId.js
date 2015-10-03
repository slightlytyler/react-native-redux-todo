export default function(listState) {
  return listState.reduce((maxId, item) => Math.max(item.get('id'), maxId), -1) + 1
}