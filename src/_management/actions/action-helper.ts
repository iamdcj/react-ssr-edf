export const actionHelper = (
  group: string,
  actionType: string,
  value: any
) => ({
  type: `${group.toUpperCase()}_${actionType.toUpperCase()}`,
  [actionType.toLowerCase()]: value
});
